import React, { useEffect, useRef } from 'react';
import { useTranslationContext } from '../context/TranslationContext';

interface TranslatableTextProps {
  children: string;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any; // Allow additional props
}

const TranslatableText: React.FC<TranslatableTextProps> = ({ 
  children, 
  className, 
  tag: Tag = 'span',
  ...props 
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { currentLanguage, isTranslating } = useTranslationContext();

  useEffect(() => {
    if (elementRef.current && currentLanguage !== 'English') {
      // Add data attribute to mark this element as translatable
      elementRef.current.setAttribute('data-translatable', 'true');
    }
  }, [currentLanguage]);

  return (
    <Tag 
      ref={elementRef}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TranslatableText; 