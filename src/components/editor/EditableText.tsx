
import { useState, useRef, useEffect } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Pencil, Check } from 'lucide-react';

interface EditableTextProps {
  id: string;
  defaultText: string | React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const EditableText = ({ id, defaultText, as = 'p', className = '' }: EditableTextProps) => {
  const { isEditMode, editableContent, updateContent } = useEditor();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Convert ReactNode to string if needed
  const defaultTextString = typeof defaultText === 'string' 
    ? defaultText 
    : 'Editable content';
  
  useEffect(() => {
    // Set initial text based on stored content or default
    setText(editableContent[id] || defaultTextString);
  }, [id, editableContent, defaultTextString]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    updateContent(id, text);
    setIsEditing(false);
  };

  useEffect(() => {
    // Focus input when editing starts
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // If not in edit mode, just show the content
  if (!isEditMode) {
    const Component = as as any;
    return <Component className={className}>{editableContent[id] || defaultText}</Component>;
  }

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full min-h-[100px] border border-brand-blue p-2 rounded ${className}`}
          onBlur={handleSave}
        />
        <button 
          onClick={handleSave}
          className="absolute top-2 right-2 p-1 bg-brand-blue text-white rounded-full opacity-90 hover:opacity-100"
        >
          <Check size={16} />
        </button>
      </div>
    );
  }

  const Component = as as any;
  return (
    <div 
      className="group relative cursor-pointer" 
      onClick={handleClick}
    >
      <Component className={`${className} ${isEditMode ? 'hover:bg-blue-50 hover:border-dashed hover:border hover:border-brand-blue p-1' : ''}`}>
        {editableContent[id] || defaultText}
      </Component>
      {isEditMode && (
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 p-1 bg-brand-blue text-white rounded-full">
          <Pencil size={16} />
        </div>
      )}
    </div>
  );
};

export default EditableText;
