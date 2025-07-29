import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: 'English', code: 'en', flag: '🇺🇸' },
    { name: 'Français', code: 'fr', flag: '🇫🇷' },
    { name: 'Deutsch', code: 'de', flag: '🇩🇪' },
    { name: 'العربية', code: 'ar', flag: '🇸🇦' },
    { name: 'Español', code: 'es', flag: '🇪🇸' },
    { name: 'Italiano', code: 'it', flag: '🇮🇹' },
    { name: 'Português', code: 'pt', flag: '🇵🇹' },
    { name: 'Nederlands', code: 'nl', flag: '🇳🇱' },
    { name: 'Polski', code: 'pl', flag: '🇵🇱' },
    { name: 'Русский', code: 'ru', flag: '🇷🇺' },
    { name: '日本語', code: 'ja', flag: '🇯🇵' },
    { name: '한국어', code: 'ko', flag: '🇰🇷' },
    { name: '中文', code: 'zh', flag: '🇨🇳' },
    { name: 'हिन्दी', code: 'hi', flag: '🇮🇳' },
    { name: 'Türkçe', code: 'tr', flag: '🇹🇷' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (langCode: string) => {
    setIsOpen(false);
    await i18n.changeLanguage(langCode);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200"
        >
          <Globe size={16} className="text-gray-600" />
          <span className="text-lg mr-1">{currentLang.flag}</span>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {currentLang.name}
          </span>
          <ChevronDown 
            size={14} 
            className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-[200px] max-h-64 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="text-lg">{language.flag}</span>
                <span className="flex-1 text-sm font-medium text-gray-700">
                  {language.name}
                </span>
                {i18n.language === language.code && (
                  <Check size={16} className="text-green-500" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Backdrop to close dropdown */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher; 