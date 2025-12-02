-- Create storage bucket for about page media
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'about-media',
  'about-media',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'video/mp4']
);

-- Create about_settings table
CREATE TABLE public.about_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  media_url TEXT,
  media_type TEXT CHECK (media_type IN ('image', 'video')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.about_settings ENABLE ROW LEVEL SECURITY;

-- Public can read
CREATE POLICY "Anyone can view about settings"
  ON public.about_settings
  FOR SELECT
  USING (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update about settings"
  ON public.about_settings
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Storage policies for about-media bucket
CREATE POLICY "Public can view about media"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'about-media');

CREATE POLICY "Authenticated users can upload about media"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'about-media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update about media"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'about-media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete about media"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'about-media' AND auth.role() = 'authenticated');

-- Insert default row
INSERT INTO public.about_settings (media_url, media_type)
VALUES (null, null);