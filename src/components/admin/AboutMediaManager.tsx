import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';

export function AboutMediaManager() {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: aboutSettings } = useQuery({
    queryKey: ['about-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('about_settings')
        .select('*')
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('about-media')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('about-media')
        .getPublicUrl(filePath);

      // Determine media type
      const mediaType = file.type.startsWith('video/') ? 'video' : 'image';

      // Update or insert about_settings
      const { data: existingData } = await supabase
        .from('about_settings')
        .select('id')
        .single();

      if (existingData) {
        const { error: updateError } = await supabase
          .from('about_settings')
          .update({
            media_url: publicUrl,
            media_type: mediaType,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existingData.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('about_settings')
          .insert({
            media_url: publicUrl,
            media_type: mediaType,
          });

        if (insertError) throw insertError;
      }

      return publicUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['about-settings'] });
      toast({
        title: 'Berhasil',
        description: 'Media profil berhasil diupload',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!aboutSettings?.id) return;

      const { error } = await supabase
        .from('about_settings')
        .update({
          media_url: null,
          media_type: null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', aboutSettings.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['about-settings'] });
      toast({
        title: 'Berhasil',
        description: 'Media profil berhasil dihapus',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      toast({
        title: 'Error',
        description: 'Hanya file gambar atau video yang diperbolehkan',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5242880) {
      toast({
        title: 'Error',
        description: 'Ukuran file maksimal 5MB',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    try {
      await uploadMutation.mutateAsync(file);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <Card className="border-purple-200 dark:border-purple-900">
      <CardHeader>
        <CardTitle>Foto/Video Profil About</CardTitle>
        <CardDescription>
          Upload foto atau video untuk halaman About. Jika tidak diatur, akan tampil background abu-abu polos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Media Preview */}
        {aboutSettings?.media_url ? (
          <div className="space-y-3">
            <Label>Media Saat Ini</Label>
            <div className="relative aspect-[3/4] max-w-xs overflow-hidden rounded-lg bg-muted">
              {aboutSettings.media_type === 'video' ? (
                <video
                  src={aboutSettings.media_url}
                  className="w-full h-full object-cover"
                  controls
                />
              ) : (
                <img
                  src={aboutSettings.media_url}
                  alt="About profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteMutation.mutate()}
              disabled={deleteMutation.isPending}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Hapus Media
            </Button>
          </div>
        ) : (
          <div className="text-center py-8 bg-muted rounded-lg">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Belum ada media. Upload foto atau video.
            </p>
          </div>
        )}

        {/* Upload Section */}
        <div className="space-y-2">
          <Label htmlFor="about-media">
            {aboutSettings?.media_url ? 'Ganti Media' : 'Upload Media'}
          </Label>
          <div className="flex items-center gap-2">
            <Input
              id="about-media"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="flex-1"
            />
            <Button disabled={uploading} size="sm">
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Format: JPG, PNG, WEBP, MP4. Maksimal 5MB.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
