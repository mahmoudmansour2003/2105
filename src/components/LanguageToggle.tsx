
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { toast } = useToast();
  
  const handleLanguageChange = (lang: string) => {
    toast({
      title: "Language Change",
      description: `Language would change to ${lang}. This feature is a placeholder in the current version.`,
    });
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      <Button 
        variant="ghost" 
        className="text-sm font-medium underline" 
        onClick={() => handleLanguageChange('English')}
      >
        English
      </Button>
      <Button 
        variant="ghost" 
        className="text-sm font-medium hover:underline" 
        onClick={() => handleLanguageChange('French')}
      >
        Français
      </Button>
    </div>
  );
};

export default LanguageToggle;
