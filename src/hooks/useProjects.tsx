import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Project, DatabaseProject } from '@/types';
import { useAuth } from './useAuth';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setProjects(data || []);
      setError(null);
    } catch (err) {
      setError(err as Error);
      console.error('Error fetching projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Create new project
  const createProject = async (projectData: Omit<Project, 'id'>) => {
    try {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('projects')
        .insert([
          {
            ...projectData,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      setProjects((prev) => [data, ...prev]);
      return { data, error: null };
    } catch (err) {
      console.error('Error creating project:', err);
      return { data: null, error: err as Error };
    }
  };

  // Update existing project
  const updateProject = async (id: string, projectData: Partial<Project>) => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setProjects((prev) =>
        prev.map((project) => (project.id === id ? data : project))
      );
      return { data, error: null };
    } catch (err) {
      console.error('Error updating project:', err);
      return { data: null, error: err as Error };
    }
  };

  // Delete project
  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setProjects((prev) => prev.filter((project) => project.id !== id));
      return { error: null };
    } catch (err) {
      console.error('Error deleting project:', err);
      return { error: err as Error };
    }
  };

  // Get project by slug
  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug);
  };

  // Get project by ID
  const getProjectById = (id: string): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  // Get projects by category
  const getProjectsByCategory = (category: string): Project[] => {
    if (category === 'all') return projects;
    return projects.filter((project) => project.category === category);
  };

  // Search projects
  const searchProjects = (query: string): Project[] => {
    const lowerQuery = query.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.category.toLowerCase().includes(lowerQuery)
    );
  };

  // Upload image to Supabase Storage
  const uploadImage = async (file: File, bucket: string = 'project-images') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      return { url: publicUrl, error: null };
    } catch (err) {
      console.error('Error uploading image:', err);
      return { url: null, error: err as Error };
    }
  };

  // Delete image from Supabase Storage
  const deleteImage = async (url: string, bucket: string = 'project-images') => {
    try {
      // Extract file path from URL
      const urlParts = url.split('/');
      const filePath = urlParts[urlParts.length - 1];

      const { error } = await supabase.storage
        .from(bucket)
        .remove([filePath]);

      if (error) throw error;

      return { error: null };
    } catch (err) {
      console.error('Error deleting image:', err);
      return { error: err as Error };
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    isLoading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    getProjectBySlug,
    getProjectById,
    getProjectsByCategory,
    searchProjects,
    uploadImage,
    deleteImage,
  };
}
