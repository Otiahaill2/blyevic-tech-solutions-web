
import { useState, useRef } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Upload, X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

const EditableImage = ({ id, defaultSrc, alt, className = '' }: EditableImageProps) => {
  const { isEditMode, editableImages, updateImage } = useEditor();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    if (isEditMode) {
      setIsDialogOpen(true);
    }
  };

  const handleUpdateFromUrl = () => {
    if (imageUrl.trim()) {
      updateImage(id, imageUrl);
      setIsDialogOpen(false);
      toast.success('Image updated');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convert file to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updateImage(id, reader.result);
          setIsDialogOpen(false);
          toast.success('Image updated');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentSrc = editableImages[id] || defaultSrc;

  return (
    <>
      <div className={`relative group ${isEditMode ? 'cursor-pointer' : ''}`} onClick={handleClick}>
        <img
          src={currentSrc}
          alt={alt}
          className={className}
        />
        {isEditMode && (
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <div className="bg-white text-brand-blue p-2 rounded-full">
              <Upload size={24} />
            </div>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="font-medium">Upload from device</div>
              <Input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <div className="space-y-2">
              <div className="font-medium">Or enter image URL</div>
              <div className="flex gap-2">
                <Input 
                  value={imageUrl} 
                  onChange={(e) => setImageUrl(e.target.value)} 
                  placeholder="https://example.com/image.jpg"
                />
                <Button onClick={handleUpdateFromUrl} variant="outline">
                  <Check size={16} />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditableImage;
