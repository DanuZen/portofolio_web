import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Shield, Calendar, Database, Key } from 'lucide-react';
import { AboutMediaManager } from '@/components/admin/AboutMediaManager';

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-wide text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage your account settings and preferences
        </p>
      </div>

      {/* About Page Media */}
      <AboutMediaManager />

      {/* User Profile */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-medium">User Profile</CardTitle>
          <CardDescription>Your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-4 p-4 bg-accent/50 border border-border">
            <div className="p-3 bg-foreground">
              <User className="h-5 w-5 text-background" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">User ID</p>
              <p className="font-medium text-foreground text-sm mt-1">
                {user?.id || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-accent/50 border border-border">
            <div className="p-3 bg-foreground">
              <Mail className="h-5 w-5 text-background" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
              <p className="font-medium text-foreground text-sm mt-1">
                {user?.email || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-accent/50 border border-border">
            <div className="p-3 bg-foreground">
              <Shield className="h-5 w-5 text-background" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Role</p>
              <Badge className="mt-1 bg-foreground text-background hover:bg-foreground/90">
                {user?.role || 'Admin'}
              </Badge>
            </div>
          </div>

          {user?.created_at && (
            <div className="flex items-center gap-4 p-4 bg-accent/50 border border-border">
              <div className="p-3 bg-foreground">
                <Calendar className="h-5 w-5 text-background" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Member Since</p>
                <p className="font-medium text-foreground text-sm mt-1">
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

      {/* Database Configuration */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Database Configuration</CardTitle>
          <CardDescription>Connection status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-accent/50 border border-border">
              <div className="flex items-center gap-3">
                <Database className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">
                  Database URL
                </span>
              </div>
              <Badge variant="outline" className="border-border">
                {import.meta.env.VITE_SUPABASE_URL ? 'Connected' : 'Not Set'}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent/50 border border-border">
              <div className="flex items-center gap-3">
                <Key className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">
                  API Key
                </span>
              </div>
              <Badge variant="outline" className="border-border">
                {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Configured' : 'Not Set'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
