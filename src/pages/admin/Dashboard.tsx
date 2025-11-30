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

  const categoryColors: Record<ProjectCategory, string> = {
    portraits: 'bg-blue-500',
    landscapes: 'bg-green-500',
    editorial: 'bg-purple-500',
    architecture: 'bg-orange-500',
    documentary: 'bg-pink-500',
  };

  const recentProjects = projects.slice(0, 5);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Kelola dan pantau portfolio Anda
          </p>
        </div>
        <Link to="/admin/projects/new">
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg">
            <Plus className="mr-2 h-5 w-5" />
            New Project
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Projects
            </CardTitle>
            <FolderKanban className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {stats.totalProjects}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Images
            </CardTitle>
            <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {stats.totalImages}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              In all projects
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Recent Projects
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {stats.recentProjects}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Last 30 days
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Top Category
            </CardTitle>
            <FolderKanban className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 capitalize">
              {Object.entries(stats.projectsByCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {Object.entries(stats.projectsByCategory).sort((a, b) => b[1] - a[1])[0]?.[1] || 0} projects
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="border-purple-200 dark:border-purple-900 shadow-lg">
        <CardHeader>
          <CardTitle>Projects by Category</CardTitle>
          <CardDescription>Distribution across all categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(stats.projectsByCategory).map(([category, count]) => (
              <div key={category} className="flex items-center gap-4">
                <div className="w-32 capitalize font-medium text-gray-700 dark:text-gray-300">
                  {category}
                </div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${categoryColors[category as ProjectCategory]} transition-all duration-500 flex items-center justify-end pr-3`}
                      style={{
                        width: `${stats.totalProjects > 0 ? (count / stats.totalProjects) * 100 : 0}%`,
                      }}
                    >
                      {count > 0 && (
                        <span className="text-white text-sm font-semibold">{count}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm text-gray-600 dark:text-gray-400">
                  {stats.totalProjects > 0 ? Math.round((count / stats.totalProjects) * 100) : 0}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card className="border-purple-200 dark:border-purple-900 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your latest portfolio additions</CardDescription>
          </div>
          <Link to="/admin/projects">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {recentProjects.length === 0 ? (
            <div className="text-center py-12">
              <FolderKanban className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">No projects yet</p>
              <Link to="/admin/projects/new">
                <Button className="mt-4" variant="outline">
                  Create Your First Project
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/project/${project.slug}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`/admin/projects/${project.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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
