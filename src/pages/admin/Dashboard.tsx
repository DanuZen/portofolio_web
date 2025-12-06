import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FolderKanban,
  Image as ImageIcon,
  TrendingUp,
  Plus,
  Eye,
  Edit,
} from 'lucide-react';
import type { AdminStats, ProjectCategory } from '@/types';

export default function Dashboard() {
  const { projects, isLoading } = useProjects();
  const [stats, setStats] = useState<AdminStats>({
    totalProjects: 0,
    projectsByCategory: {
      portraits: 0,
      landscapes: 0,
      editorial: 0,
      architecture: 0,
      documentary: 0,
    },
    recentProjects: 0,
    totalImages: 0,
  });

  useEffect(() => {
    if (projects.length > 0) {
      const categoryCount: Record<ProjectCategory, number> = {
        portraits: 0,
        landscapes: 0,
        editorial: 0,
        architecture: 0,
        documentary: 0,
      };

      let totalImages = 0;

      projects.forEach((project) => {
        categoryCount[project.category]++;
        totalImages += project.images.length;
      });

      // Count projects from last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const recentProjects = projects.filter((p) => {
        const createdAt = (p as any).created_at ? new Date((p as any).created_at) : new Date();
        return createdAt >= thirtyDaysAgo;
      }).length;

      setStats({
        totalProjects: projects.length,
        projectsByCategory: categoryCount,
        recentProjects,
        totalImages,
      });
    }
  }, [projects]);

  const recentProjects = projects.slice(0, 5);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide text-foreground">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Kelola dan pantau portfolio Anda
          </p>
        </div>
        <Link to="/admin/projects/new">
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            <Plus className="mr-2 h-4 w-4" strokeWidth={1.5} />
            New Project
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Projects
            </CardTitle>
            <FolderKanban className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-foreground">
              {stats.totalProjects}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Images
            </CardTitle>
            <ImageIcon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-foreground">
              {stats.totalImages}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              In all projects
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Recent Projects
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-foreground">
              {stats.recentProjects}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Last 30 days
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Top Category
            </CardTitle>
            <FolderKanban className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-foreground capitalize">
              {Object.entries(stats.projectsByCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {Object.entries(stats.projectsByCategory).sort((a, b) => b[1] - a[1])[0]?.[1] || 0} projects
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Projects by Category</CardTitle>
          <CardDescription>Distribution across all categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(stats.projectsByCategory).map(([category, count]) => (
              <div key={category} className="flex items-center gap-4">
                <div className="w-32 capitalize font-medium text-foreground text-sm">
                  {category}
                </div>
                <div className="flex-1">
                  <div className="h-6 bg-accent overflow-hidden">
                    <div
                      className="h-full bg-foreground transition-all duration-500 flex items-center justify-end pr-3"
                      style={{
                        width: `${stats.totalProjects > 0 ? (count / stats.totalProjects) * 100 : 0}%`,
                      }}
                    >
                      {count > 0 && (
                        <span className="text-background text-xs font-medium">{count}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm text-muted-foreground">
                  {stats.totalProjects > 0 ? Math.round((count / stats.totalProjects) * 100) : 0}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card className="border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg font-medium">Recent Projects</CardTitle>
            <CardDescription>Your latest portfolio additions</CardDescription>
          </div>
          <Link to="/admin/projects">
            <Button variant="outline" size="sm" className="border-border">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {recentProjects.length === 0 ? (
            <div className="text-center py-12">
              <FolderKanban className="h-12 w-12 text-muted-foreground mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-muted-foreground">No projects yet</p>
              <Link to="/admin/projects/new">
                <Button className="mt-4" variant="outline">
                  Create Your First Project
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-4 border border-border hover:bg-accent/50 transition-colors"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-14 h-14 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="capitalize text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Link to={`/project/${project.slug}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                    </Link>
                    <Link to={`/admin/projects/${project.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
