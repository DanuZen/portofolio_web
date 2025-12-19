import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useCategories, useUpdateCategory, useCreateCategory, useDeleteCategory } from '@/hooks/useCategories';
import { Plus, Trash2, GripVertical, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function CategoriesManager() {
  const { data: categories, isLoading } = useCategories();
  const updateCategory = useUpdateCategory();
  const createCategory = useCreateCategory();
  const deleteCategory = useDeleteCategory();
  
  const [newId, setNewId] = useState('');
  const [newLabel, setNewLabel] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleToggleActive = (id: string, currentValue: boolean) => {
    // Don't allow deactivating "all" category
    if (id === 'all') return;
    updateCategory.mutate({ id, updates: { is_active: !currentValue } });
  };

  const handleUpdateLabel = (id: string, label: string) => {
    if (id === 'all') return; // Don't allow editing "all" label
    updateCategory.mutate({ id, updates: { label } });
  };

  const handleAddCategory = () => {
    if (!newId.trim() || !newLabel.trim()) return;
    
    const maxOrder = categories?.reduce((max, c) => Math.max(max, c.sort_order), 0) || 0;
    
    createCategory.mutate(
      { id: newId.toLowerCase().replace(/\s+/g, '-'), label: newLabel, sort_order: maxOrder + 1 },
      {
        onSuccess: () => {
          setNewId('');
          setNewLabel('');
          setIsAdding(false);
        },
      }
    );
  };

  const handleDelete = (id: string) => {
    if (id === 'all') return; // Don't allow deleting "all"
    if (confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
      deleteCategory.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <Card className="border-border">
        <CardContent className="py-8 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Kategori Portfolio</CardTitle>
        <CardDescription>Kelola kategori yang tampil di halaman portfolio</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Category List */}
        <div className="space-y-2">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-3 p-3 bg-accent/50 border border-border rounded-lg"
            >
              <GripVertical className="h-4 w-4 text-muted-foreground" />
              
              <div className="flex-1 min-w-0">
                {category.id === 'all' ? (
                  <span className="text-sm font-medium">{category.label}</span>
                ) : (
                  <Input
                    defaultValue={category.label}
                    className="h-8 text-sm"
                    onBlur={(e) => {
                      if (e.target.value !== category.label) {
                        handleUpdateLabel(category.id, e.target.value);
                      }
                    }}
                  />
                )}
              </div>
              
              <code className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                {category.id}
              </code>
              
              <div className="flex items-center gap-2">
                <Switch
                  checked={category.is_active}
                  onCheckedChange={() => handleToggleActive(category.id, category.is_active)}
                  disabled={category.id === 'all'}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => handleDelete(category.id)}
                  disabled={category.id === 'all'}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Category */}
        {isAdding ? (
          <div className="p-4 border border-dashed border-border rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">ID (slug)</Label>
                <Input
                  placeholder="contoh: wedding"
                  value={newId}
                  onChange={(e) => setNewId(e.target.value)}
                  className="h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Label</Label>
                <Input
                  placeholder="contoh: Pernikahan"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  className="h-9"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddCategory}
                disabled={!newId.trim() || !newLabel.trim() || createCategory.isPending}
              >
                {createCategory.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : null}
                Simpan
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsAdding(false);
                  setNewId('');
                  setNewLabel('');
                }}
              >
                Batal
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            className="w-full border-dashed"
            onClick={() => setIsAdding(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Tambah Kategori
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
