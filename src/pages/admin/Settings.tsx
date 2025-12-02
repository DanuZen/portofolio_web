import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Shield, Calendar } from 'lucide-react';
import { AboutMediaManager } from '@/components/admin/AboutMediaManager';

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* About Page Media */}
      <AboutMediaManager />

      {/* User Profile */}
      <Card className="border-purple-200 dark:border-purple-900">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full">
              <User className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">User ID</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user?.id || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user?.email || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-700 rounded-full">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Role</p>
              <Badge className="mt-1 bg-green-600 hover:bg-green-700">
                {user?.role || 'Admin'}
              </Badge>
            </div>
          </div>

          {user?.created_at && (
            <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {new Date(user.created_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Supabase Info */}
      <Card className="border-purple-200 dark:border-purple-900">
        <CardHeader>
          <CardTitle>Database Configuration</CardTitle>
          <CardDescription>Supabase connection status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Supabase URL
              </span>
              <Badge variant="outline">
                {import.meta.env.VITE_SUPABASE_URL ? 'Configured' : 'Not Set'}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Anon Key
              </span>
              <Badge variant="outline">
                {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Configured' : 'Not Set'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-blue-900 dark:text-blue-100">
            Setup Instructions
          </CardTitle>
          <CardDescription className="text-blue-700 dark:text-blue-300">
            How to configure your Supabase database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-blue-900 dark:text-blue-100">
          <p>1. Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">supabase.com</a></p>
          <p>2. Create a <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">.env</code> file in your project root</p>
          <p>3. Add your Supabase credentials:</p>
          <pre className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg overflow-x-auto">
{`VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key`}
          </pre>
          <p>4. Create the following table in Supabase SQL Editor:</p>
          <pre className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg overflow-x-auto text-xs">
{`CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  year TEXT NOT NULL,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  images JSONB NOT NULL,
  client TEXT,
  camera TEXT,
  location TEXT,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
          </pre>
          <p>5. Create a storage bucket named <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">project-images</code> and make it public</p>
          <p>6. Restart your development server</p>
        </CardContent>
      </Card>
    </div>
  );
}
