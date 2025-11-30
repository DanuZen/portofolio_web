-- Supabase Database Setup for Portfolio Admin Dashboard
-- Run this SQL in your Supabase SQL Editor

-- 1. Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL CHECK (category IN ('portraits', 'landscapes', 'editorial', 'architecture', 'documentary')),
  year TEXT NOT NULL,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  client TEXT,
  camera TEXT,
  location TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);

-- 3. Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- 4. Create index on user_id
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 6. Create policies for authenticated users
-- Allow authenticated users to read all projects
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert their own projects
CREATE POLICY "Allow authenticated users to insert" ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own projects
CREATE POLICY "Allow users to update own projects" ON projects
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own projects
CREATE POLICY "Allow users to delete own projects" ON projects
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 7. Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Create trigger to call the function
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 9. Storage bucket setup (run this in Supabase Dashboard > Storage)
-- Create a new bucket named: project-images
-- Make it public by enabling "Public bucket" option
-- Or run this SQL:
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- 10. Create storage policies
CREATE POLICY "Allow public read access to images" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'project-images');

CREATE POLICY "Allow authenticated users to upload images" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "Allow users to update their images" ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'project-images');

CREATE POLICY "Allow users to delete their images" ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'project-images');

-- 11. Optional: Insert sample data (for testing)
-- Make sure to replace 'your-user-id' with your actual Supabase user ID
/*
INSERT INTO projects (title, slug, category, year, description, cover_image, images, user_id)
VALUES (
  'Sample Project',
  'sample-project',
  'portraits',
  '2024',
  'This is a sample project for testing purposes.',
  'https://images.unsplash.com/photo-1234567890',
  '[
    {
      "id": "img-1",
      "src": "https://images.unsplash.com/photo-1234567890",
      "alt": "Sample image",
      "aspectRatio": "landscape"
    }
  ]'::jsonb,
  'your-user-id'
);
*/

-- Setup complete! 
-- Next steps:
-- 1. Create a user account in Supabase Authentication
-- 2. Copy your Supabase URL and Anon Key to .env file
-- 3. Create the storage bucket 'project-images' in Supabase Dashboard
-- 4. Start your development server
