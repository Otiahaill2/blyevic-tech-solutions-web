
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type EditorContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
  editableContent: Record<string, string>;
  updateContent: (id: string, content: string) => void;
  saveChanges: () => void;
  editableImages: Record<string, string>;
  updateImage: (id: string, url: string) => void;
  exitEditor: () => void;
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableContent, setEditableContent] = useState<Record<string, string>>({});
  const [editableImages, setEditableImages] = useState<Record<string, string>>({});
  
  // Load saved content if available
  useEffect(() => {
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
      setEditableContent(JSON.parse(savedContent));
    }
    
    const savedImages = localStorage.getItem('editableImages');
    if (savedImages) {
      setEditableImages(JSON.parse(savedImages));
    }
    
    // Check if admin is logged in
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    setIsEditMode(isAdmin);
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const updateContent = (id: string, content: string) => {
    setEditableContent(prev => ({
      ...prev,
      [id]: content
    }));
  };

  const updateImage = (id: string, url: string) => {
    setEditableImages(prev => ({
      ...prev,
      [id]: url
    }));
  };

  const saveChanges = () => {
    localStorage.setItem('editableContent', JSON.stringify(editableContent));
    localStorage.setItem('editableImages', JSON.stringify(editableImages));
  };

  const exitEditor = () => {
    setIsEditMode(false);
    sessionStorage.removeItem('isAdmin');
  };

  return (
    <EditorContext.Provider 
      value={{ 
        isEditMode, 
        toggleEditMode, 
        editableContent, 
        updateContent, 
        saveChanges,
        editableImages,
        updateImage,
        exitEditor
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
