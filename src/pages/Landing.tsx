import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languageNameToCode: Record<string, string> = {
  English: 'en',
  French: 'fr',
  German: 'de',
  Arabic: 'ar',
  Spanish: 'es',
  Italian: 'it',
  Portuguese: 'pt',
  Dutch: 'nl',
  Polish: 'pl',
  Russian: 'ru',
  Japanese: 'ja',
  Korean: 'ko',
  Chinese: 'zh',
  Hindi: 'hi',
  Turkish: 'tr',
  Bulgarian: 'bg',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Finnish: 'fi',
  Greek: 'el',
  Hungarian: 'hu',
  Norwegian: 'no',
  Romanian: 'ro',
  Slovak: 'sk',
  Slovenian: 'sl',
  Swedish: 'sv',
  Catalan: 'ca',
  Welsh: 'cy',
  Irish: 'ga',
  'Scottish Gaelic': 'gd',
  Kurdish: 'ku',
  Berber: 'ber',
  Mandarin: 'zh',
  Malay: 'ms',
  Tamil: 'ta',
  Thai: 'th',
  Urdu: 'ur'
};
// Define country and language mappings
const countryLanguageMap: { [key: string]: { name: string; languages: string[] } } = {
  // Arabic-speaking countries
  'Algeria': {
    name: 'Algeria',
    languages: ['Arabic', 'French', 'English']
  },
  'Bahrain': {
    name: 'Bahrain',
    languages: ['Arabic', 'English']
  },
  'Egypt': {
    name: 'Egypt',
    languages: ['Arabic', 'English', 'French']
  },
  'Iraq': {
    name: 'Iraq',
    languages: ['Arabic', 'Kurdish', 'English']
  },
  'Jordan': {
    name: 'Jordan',
    languages: ['Arabic', 'English']
  },
  'Kuwait': {
    name: 'Kuwait',
    languages: ['Arabic', 'English']
  },
  'Lebanon': {
    name: 'Lebanon',
    languages: ['Arabic', 'French', 'English']
  },
  'Libya': {
    name: 'Libya',
    languages: ['Arabic', 'English', 'Italian']
  },
  'Morocco': {
    name: 'Morocco',
    languages: ['Arabic', 'French', 'English', 'Berber']
  },
  'Oman': {
    name: 'Oman',
    languages: ['Arabic', 'English']
  },
  'Qatar': {
    name: 'Qatar',
    languages: ['Arabic', 'English']
  },
  'Saudi Arabia': {
    name: 'Saudi Arabia',
    languages: ['Arabic', 'English']
  },
  'Sudan': {
    name: 'Sudan',
    languages: ['Arabic', 'English']
  },
  'Syria': {
    name: 'Syria',
    languages: ['Arabic', 'Kurdish', 'English', 'French']
  },
  'Tunisia': {
    name: 'Tunisia',
    languages: ['Arabic', 'French', 'English']
  },
  'United Arab Emirates': {
    name: 'United Arab Emirates',
    languages: ['Arabic', 'English', 'Hindi', 'Urdu']
  },
  'Yemen': {
    name: 'Yemen',
    languages: ['Arabic', 'English']
  },

  // European countries
  'Austria': {
    name: 'Austria',
    languages: ['German', 'English']
  },
  'Belgium': {
    name: 'Belgium',
    languages: ['Dutch', 'French', 'German', 'English']
  },
  'Bulgaria': {
    name: 'Bulgaria',
    languages: ['Bulgarian', 'English', 'Russian']
  },
  'Croatia': {
    name: 'Croatia',
    languages: ['Croatian', 'English', 'German']
  },
  'Czech Republic': {
    name: 'Czech Republic',
    languages: ['Czech', 'English', 'German']
  },
  'Denmark': {
    name: 'Denmark',
    languages: ['Danish', 'English', 'German']
  },
  'Finland': {
    name: 'Finland',
    languages: ['Finnish', 'Swedish', 'English']
  },
  'France': {
    name: 'France',
    languages: ['French', 'English', 'German']
  },
  'Germany': {
    name: 'Germany',
    languages: ['German', 'English', 'French']
  },
  'Greece': {
    name: 'Greece',
    languages: ['Greek', 'English', 'German']
  },
  'Hungary': {
    name: 'Hungary',
    languages: ['Hungarian', 'English', 'German']
  },
  'Ireland': {
    name: 'Ireland',
    languages: ['English', 'Irish', 'French']
  },
  'Italy': {
    name: 'Italy',
    languages: ['Italian', 'English', 'French', 'German']
  },
  'Netherlands': {
    name: 'Netherlands',
    languages: ['Dutch', 'English', 'German']
  },
  'Norway': {
    name: 'Norway',
    languages: ['Norwegian', 'English', 'German']
  },
  'Poland': {
    name: 'Poland',
    languages: ['Polish', 'English', 'German']
  },
  'Portugal': {
    name: 'Portugal',
    languages: ['Portuguese', 'English', 'Spanish']
  },
  'Romania': {
    name: 'Romania',
    languages: ['Romanian', 'English', 'French']
  },
  'Slovakia': {
    name: 'Slovakia',
    languages: ['Slovak', 'English', 'German']
  },
  'Slovenia': {
    name: 'Slovenia',
    languages: ['Slovenian', 'English', 'German']
  },
  'Spain': {
    name: 'Spain',
    languages: ['Spanish', 'Catalan', 'English', 'French']
  },
  'Sweden': {
    name: 'Sweden',
    languages: ['Swedish', 'English', 'German']
  },
  'Switzerland': {
    name: 'Switzerland',
    languages: ['German', 'French', 'Italian', 'English']
  },
  'United Kingdom': {
    name: 'United Kingdom',
    languages: ['English', 'Welsh', 'Scottish Gaelic', 'French']
  },
  // Americas
  'United States': {
    name: 'United States',
    languages: ['English', 'Spanish']
  },
  'Canada': {
    name: 'Canada',
    languages: ['English', 'French']
  },
  'Mexico': {
    name: 'Mexico',
    languages: ['Spanish', 'English']
  },
  'Brazil': {
    name: 'Brazil',
    languages: ['Portuguese', 'English', 'Spanish']
  },
  'Argentina': {
    name: 'Argentina',
    languages: ['Spanish', 'English']
  },
  'Chile': {
    name: 'Chile',
    languages: ['Spanish', 'English']
  },
  // Asia
  'India': {
    name: 'India',
    languages: ['Hindi', 'English']
  },
  'South Korea': {
    name: 'South Korea',
    languages: ['Korean', 'English']
  },
  'Turkey': {
    name: 'Turkey',
    languages: ['Turkish', 'English']
  },
  'China': {
    name: 'China',
    languages: ['Mandarin', 'English']
  },
  'Japan': {
    name: 'Japan',
    languages: ['Japanese', 'English']
  },
  'Singapore': {
    name: 'Singapore',
    languages: ['English', 'Mandarin', 'Malay', 'Tamil']
  },
  'Thailand': {
    name: 'Thailand',
    languages: ['Thai', 'English']
  },
};

// Static list of world regions
const staticRegions = [
  'Africa',
  'Middle East',
  'Asia',
  'Europe',
  'Americas',
];

const regionCountryMap: { [region: string]: string[] } = {
  'Africa': ['Algeria', 'Egypt', 'Libya', 'Morocco', 'Sudan', 'Tunisia'],
  'Middle East': [
    'Bahrain', 'Iraq', 'Jordan', 'Kuwait', 'Lebanon', 'Oman', 'Qatar', 'Saudi Arabia', 'Syria', 'United Arab Emirates', 'Yemen'
  ],
  'Asia': [
    'India', 'China', 'Japan', 'South Korea', 'Singapore', 'Thailand'
  ],
  'Europe': [
    'Austria','Belgium','Bulgaria','Croatia','Czech Republic','Denmark','Finland','France','Germany','Greece','Hungary','Ireland','Italy','Netherlands','Norway','Poland','Portugal','Romania','Slovakia','Slovenia','Spain','Sweden','Switzerland','United Kingdom'
  ],
  'Americas': [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'
  ],
};

const regions: { [key: string]: string[] } = {
  'Africa & Middle East': [
    'Algeria', 'Bahrain', 'Egypt', 'Iraq', 'Jordan', 'Kuwait', 'Lebanon', 'Libya',
    'Morocco', 'Oman', 'Qatar', 'Saudi Arabia', 'Sudan', 'Syria', 'Tunisia',
    'United Arab Emirates', 'Yemen', 'Nigeria', 'South Africa'
  ],
  'Europe': [
    'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark',
    'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy',
    'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia',
    'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'
  ],
  'Americas': [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'
  ],
  'Asia & Oceania': [
    'India', 'China', 'Japan', 'South Korea', 'Turkey', 'Australia', 'New Zealand'
  ]
};

const Landing = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Force the landing page to always be in English
    // so users can understand the selection options.
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  // Filter countries by selected region
  useEffect(() => {
    if (selectedRegion) {
      setSelectedCountry(null);
    }
  }, [selectedRegion]);

  // Update available languages when country changes
  useEffect(() => {
    if (selectedCountry) {
      setAvailableLanguages(countryLanguageMap[selectedCountry]?.languages || []);
      setSelectedLanguage(null); // Reset language when country changes
    } else {
      setAvailableLanguages([]);
    }
  }, [selectedCountry]);

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCountry && selectedLanguage) {
      const langCode = languageNameToCode[selectedLanguage] || 'en';
      await i18n.changeLanguage(langCode);
      localStorage.setItem('i18nextLng', langCode);
      localStorage.setItem('selectedCountry', selectedCountry);
      localStorage.setItem('selectedLanguage', selectedLanguage);
      navigate('/home');
    }
  };

  const filteredRegions = staticRegions.filter(region =>
    region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center w-full max-w-lg">
        <img src="/images/HE_Carr_text.png" alt="HORIZOP ENERGY Logo with text" className="h-24 mb-8" />
        <h1 className="text-4xl font-bold mb-2 text-center text-horizop-navy">{t('landing.title')}</h1>
        <p className="mb-8 text-center text-gray-700 font-medium">{t('landing.subtitle')}</p>
        
        <form onSubmit={handleAccess} className="w-full flex flex-col gap-4 items-center">
          {/* Simplified selectors for now */}
          <div className="w-full">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              {t('landing.worldRegions')}
            </label>
            <select
              id="region"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={selectedRegion || ''}
              onChange={e => setSelectedRegion(e.target.value)}
              required
            >
              <option value="" disabled>{t('landing.selectRegion')}</option>
              {staticRegions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              {t('landing.selectCountry')}
            </label>
            <select
              id="country"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={selectedCountry || ''}
              onChange={e => setSelectedCountry(e.target.value)}
              required
              disabled={!selectedRegion}
            >
              <option value="" disabled>{selectedRegion ? t('landing.selectCountryPlaceholder') : t('landing.selectRegionFirst')}</option>
              {selectedRegion && regionCountryMap[selectedRegion].map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              {t('landing.selectLanguage')}
            </label>
            <select
              id="language"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={selectedLanguage || ''}
              onChange={e => setSelectedLanguage(e.target.value)}
              required
              disabled={!selectedCountry}
            >
              <option value="" disabled>
                {selectedCountry ? t('landing.selectLanguagePlaceholder') : t('landing.selectCountryFirst')}
              </option>
              {availableLanguages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-horizop-gold hover:bg-horizop-gold/90 text-black font-semibold rounded-lg py-3 px-8 text-lg transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedCountry || !selectedLanguage}
          >
            {t('landing.continue')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing; 