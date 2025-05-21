import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  }
};

const Landing = () => {
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  // Update available languages when country changes
  useEffect(() => {
    if (country) {
      setAvailableLanguages(countryLanguageMap[country].languages);
      setLanguage(''); // Reset language when country changes
    } else {
      setAvailableLanguages([]);
    }
  }, [country]);

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('selectedCountry', country);
    localStorage.setItem('selectedLanguage', language);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-horizop-navy to-horizop-navy/90">
      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center w-full max-w-lg">
        <img src="/images/HE_Carr_text.png" alt="HORIZOP ENERGY Logo with text" className="h-24 mb-8" />
        <h1 className="text-4xl font-bold mb-2 text-center text-horizop-navy">Get in charge</h1>
        <p className="mb-8 text-center text-gray-700 font-medium">Select your Country and Language</p>
        <form onSubmit={handleAccess} className="w-full flex flex-col gap-4 items-center">
          <div className="w-full">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
            >
              <option value="" disabled>Select a country</option>
              {Object.values(countryLanguageMap).map(country => (
                <option key={country.name} value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              id="language"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              required
              disabled={!country}
            >
              <option value="" disabled>
                {country ? 'Select a language' : 'Select a country first'}
              </option>
              {availableLanguages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-horizop-gold hover:bg-horizop-gold/90 text-black font-semibold rounded-lg py-3 px-8 text-lg transition w-full"
            disabled={!country || !language}
          >
            Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing; 