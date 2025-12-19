import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useProjects } from '@/hooks/useProjects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, ArrowLeft, Upload, X, Image as ImageIcon } from 'lucide-react';
import type { ProjectImage, ProjectCategory, AspectRatio, Project } from '@/types';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  category: z.enum(['portraits', 'landscapes', 'editorial', 'architecture', 'documentary']),
  year: z.string().min(4, 'Year is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  coverImage: z.string().url('Must be a valid URL'),
  client: z.string().optional(),
  camera: z.string().optional(),
  location: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createProject, updateProject, getProjectById, uploadImage } = useProjects();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const isEditMode = !!id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      category: 'portraits',
      year: new Date().getFullYear().toString(),
    },
  });

  const watchTitle = watch('title');

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !isEditMode) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setValue('slug', slug);
    }
  }, [watchTitle, setValue, isEditMode]);

  // Load project data if editing
  useEffect(() => {
    if (isEditMode && id) {
      const project = getProjectById(id);
      if (project) {
        setValue('title', project.title);
        setValue('slug', project.slug);
        setValue('category', project.category);
        setValue('year', project.year);
        setValue('description', project.description);
        setValue('coverImage', project.coverImage);
        setValue('client', project.client || '');
        setValue('camera', project.camera || '');
        setValue('location', project.location || '');
        setImages(project.images);
      }
    }
  }, [isEditMode, id, getProjectById, setValue]);

  const [coverDragActive, setCoverDragActive] = useState(false);
  const [imagesDragActive, setImagesDragActive] = useState(false);

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await uploadCoverFile(file);
  };

  const uploadCoverFile = async (file: File) => {
    setUploadingCover(true);
    const { url, error } = await uploadImage(file);

    if (error || !url) {
      toast({
        title: 'Error',
        description: 'Failed to upload cover image',
        variant: 'destructive',
      });
    } else {
      setValue('coverImage', url);
      toast({
        title: 'Success',
        description: 'Cover image uploaded successfully',
      });
    }
    setUploadingCover(false);
  };

  const handleCoverDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCoverDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      await uploadCoverFile(file);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await uploadImageFiles(Array.from(files));
  };

  const uploadImageFiles = async (files: File[]) => {
    setUploadingImage(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;
      
      const { url, error } = await uploadImage(file);

      if (error || !url) {
        toast({
          title: 'Error',
          description: `Failed to upload ${file.name}`,
          variant: 'destructive',
        });
      } else {
        const newImage: ProjectImage = {
          id: `img-${Date.now()}-${i}`,
          src: url,
          alt: file.name,
          aspectRatio: 'landscape',
        };
        setImages((prev) => [...prev, newImage]);
      }
    }

    setUploadingImage(false);
    toast({
      title: 'Success',
      description: 'Images uploaded successfully',
    });
  };

  const handleImagesDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setImagesDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await uploadImageFiles(files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleImageAspectRatioChange = (imageId: string, aspectRatio: AspectRatio) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === imageId ? { ...img, aspectRatio } : img
      )
    );
  };

  const handleRemoveImage = (imageId: string) => {
    setImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  const onSubmit = async (data: ProjectFormData) => {
    if (images.length === 0) {
      toast({
        title: 'Error',
        description: 'Please add at least one image to the project',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    const projectData: Omit<Project, 'id'> = {
      title: data.title,
      slug: data.slug,
      category: data.category,
      year: data.year,
      description: data.description,
      coverImage: data.coverImage,
      client: data.client,
      camera: data.camera,
      location: data.location,
      images,
    };

    let result;
    if (isEditMode && id) {
      result = await updateProject(id, projectData);
    } else {
      result = await createProject(projectData);
    }

    if (result.error) {
      toast({
        title: 'Error',
        description: `Failed to ${isEditMode ? 'update' : 'create'} project`,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: `Project ${isEditMode ? 'updated' : 'created'} successfully`,
      });
      navigate('/admin/projects');
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/admin/projects')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {isEditMode ? 'Edit Project' : 'New Project'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {isEditMode ? 'Update project details' : 'Create a new portfolio project'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <Card className="border-white/20 dark:border-white/20">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Essential project details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  {...register('title')}
                  placeholder="Project title"
                />
                {errors.title && (
                  <p className="text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  {...register('slug')}
                  placeholder="project-slug"
                />
                {errors.slug && (
                  <p className="text-sm text-red-600">{errors.slug.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  onValueChange={(value) => setValue('category', value as ProjectCategory)}
                  defaultValue={watch('category')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portraits">Portraits</SelectItem>
                    <SelectItem value="landscapes">Landscapes</SelectItem>
                    <SelectItem value="editorial">Editorial</SelectItem>
                    <SelectItem value="architecture">Architecture</SelectItem>
                    <SelectItem value="documentary">Documentary</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  {...register('year')}
                  placeholder="2024"
                  maxLength={4}
                />
                {errors.year && (
                  <p className="text-sm text-red-600">{errors.year.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                {...register('description')}
                placeholder="Project description"
                rows={4}
              />
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Additional Details */}
        <Card className="border-white/20 dark:border-white/20">
          <CardHeader>
            <CardTitle>Additional Details</CardTitle>
            <CardDescription>Optional project metadata</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Input
                  id="client"
                  {...register('client')}
                  placeholder="Client name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera">Camera</Label>
                <Input
                  id="camera"
                  {...register('camera')}
                  placeholder="Camera model"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  {...register('location')}
                  placeholder="Location"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cover Image */}
        <Card className="border-white/20 dark:border-white/20">
          <CardHeader>
            <CardTitle>Cover Image</CardTitle>
            <CardDescription>Upload gambar utama proyek</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="hidden"
              id="cover-upload"
            />
            
            {watch('coverImage') ? (
              <div className="relative group">
                <img
                  src={watch('coverImage')}
                  alt="Cover preview"
                  className="w-full h-64 object-cover rounded-lg border-2 border-border"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => document.getElementById('cover-upload')?.click()}
                    disabled={uploadingCover}
                  >
                    {uploadingCover ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Ganti'}
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => setValue('coverImage', '')}
                  >
                    Hapus
                  </Button>
                </div>
              </div>
            ) : (
              <div
                onDragEnter={() => setCoverDragActive(true)}
                onDragLeave={() => setCoverDragActive(false)}
                onDragOver={handleDragOver}
                onDrop={handleCoverDrop}
                onClick={() => document.getElementById('cover-upload')?.click()}
              className={`
                  cursor-pointer border-2 border-dashed rounded-lg p-8 text-center transition-all
                  ${coverDragActive 
                    ? 'border-white bg-white/10' 
                    : 'border-muted-foreground/30 hover:border-white/50 hover:bg-accent/50'
                  }
                `}
              >
                {uploadingCover ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    <p className="text-sm text-muted-foreground">Mengupload...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">Drag & drop atau klik untuk upload</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, WEBP (Max 10MB)</p>
                  </div>
                )}
              </div>
            )}
            
            {errors.coverImage && (
              <p className="text-sm text-destructive">{errors.coverImage.message}</p>
            )}
          </CardContent>
        </Card>

        {/* Project Images */}
        <Card className="border-white/20 dark:border-white/20">
          <CardHeader>
            <CardTitle>Project Images</CardTitle>
            <CardDescription>Upload dan kelola gambar galeri proyek</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="images-upload"
            />
            
            {/* Drop Zone */}
            <div
              onDragEnter={() => setImagesDragActive(true)}
              onDragLeave={() => setImagesDragActive(false)}
              onDragOver={handleDragOver}
              onDrop={handleImagesDrop}
              onClick={() => document.getElementById('images-upload')?.click()}
              className={`
                cursor-pointer border-2 border-dashed rounded-lg p-8 text-center transition-all
                ${imagesDragActive 
                  ? 'border-white bg-white/10' 
                  : 'border-muted-foreground/30 hover:border-white/50 hover:bg-accent/50'
                }
              `}
            >
              {uploadingImage ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-10 w-10 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground">Mengupload...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="text-sm font-medium">Drag & drop atau klik untuk upload</p>
                  <p className="text-xs text-muted-foreground">Upload banyak gambar sekaligus</p>
                </div>
              )}
            </div>

            {images.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center">
                Belum ada gambar. Upload minimal satu gambar.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative border border-gray-200 dark:border-gray-800 rounded-lg p-4 space-y-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="space-y-2">
                      <Label>Aspect Ratio</Label>
                      <Select
                        value={image.aspectRatio}
                        onValueChange={(value) =>
                          handleImageAspectRatioChange(image.id, value as AspectRatio)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portrait">Portrait</SelectItem>
                          <SelectItem value="landscape">Landscape</SelectItem>
                          <SelectItem value="square">Square</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveImage(image.id)}
                      className="w-full"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/admin/projects')}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" />
                {isEditMode ? 'Update Project' : 'Create Project'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
