import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Shield, Calendar, Database, Key } from 'lucide-react';
import { AboutMediaManager } from '@/components/admin/AboutMediaManager';
import { CategoriesManager } from '@/components/admin/CategoriesManager';
export default function Settings() {
  const {
    user
  } = useAuth();
  return <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-wide text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Categories Manager */}
      <CategoriesManager />

      {/* About Page Media */}
      <AboutMediaManager />

      {/* User Profile */}
      

      {/* Database Configuration */}
      
    </div>;
}