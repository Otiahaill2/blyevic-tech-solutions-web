
import { Button } from '@/components/ui/button';
import { useEditor } from '@/contexts/EditorContext';
import { Save, Eye, EyeOff, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const EditorToolbar = () => {
  const { isEditMode, toggleEditMode, saveChanges, exitEditor } = useEditor();

  if (!isEditMode) return null;

  const handleSave = () => {
    saveChanges();
    toast.success('Changes saved successfully');
  };

  const handlePreviewToggle = () => {
    toggleEditMode();
    toast.info(isEditMode ? 'Preview mode' : 'Edit mode');
  };

  const handleExit = () => {
    if (confirm('Exit editor? Make sure you saved your changes.')) {
      exitEditor();
      toast.info('Exited admin mode');
    }
  };

  return (
    <div className="fixed top-16 right-4 z-50 bg-white shadow-lg rounded-lg p-2 flex gap-2 border border-gray-200">
      <Button variant="outline" size="sm" onClick={handleSave} className="flex gap-1 items-center">
        <Save size={16} />
        <span className="hidden sm:inline">Save</span>
      </Button>
      <Button variant="outline" size="sm" onClick={handlePreviewToggle} className="flex gap-1 items-center">
        {isEditMode ? <EyeOff size={16} /> : <Eye size={16} />}
        <span className="hidden sm:inline">{isEditMode ? 'Preview' : 'Edit'}</span>
      </Button>
      <Button variant="outline" size="sm" onClick={handleExit} className="flex gap-1 items-center text-red-500 hover:text-red-600">
        <LogOut size={16} />
        <span className="hidden sm:inline">Exit</span>
      </Button>
    </div>
  );
};

export default EditorToolbar;
