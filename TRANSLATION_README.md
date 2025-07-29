# Translation System Documentation

## Overview

This project integrates a free translation API (LibreTranslate) to automatically translate website content based on user language selection. The system translates all visible text content including titles, paragraphs, buttons, and other UI elements.

## Features

- **Free API**: Uses LibreTranslate API (no authentication required)
- **Automatic Translation**: Translates all visible text content on page load
- **Language Persistence**: Remembers user's language choice across sessions
- **Caching**: Caches translations to improve performance
- **Fallback**: Returns original text if translation fails
- **Language Switcher**: Easy-to-use dropdown in the header

## How It Works

### 1. Translation Service (`src/services/translationService.ts`)
- Handles API calls to LibreTranslate
- Manages translation caching
- Provides methods to translate individual elements or entire pages
- Maps language names to API language codes

### 2. Translation Hook (`src/hooks/useTranslation.ts`)
- React hook for managing translation state
- Handles language persistence in localStorage
- Provides translation functions for components

### 3. Translation Context (`src/context/TranslationContext.tsx`)
- Global context provider for translation state
- Automatically applies saved language on app load
- Available throughout the application

### 4. Language Switcher (`src/components/LanguageSwitcher.tsx`)
- Dropdown component for language selection
- Shows current language with flag
- Displays translation status

## Usage

### Basic Usage

The translation system works automatically once integrated. Users can:

1. **Select Language on Landing Page**: Choose country and language
2. **Use Language Switcher**: Change language from any page using the header dropdown
3. **Automatic Translation**: All visible text is automatically translated

### For Developers

#### Adding Translation to New Components

```tsx
import { useTranslationContext } from '../context/TranslationContext';

const MyComponent = () => {
  const { currentLanguage, isTranslating } = useTranslationContext();
  
  return (
    <div>
      <h1>This text will be automatically translated</h1>
      {isTranslating && <div>Translating...</div>}
    </div>
  );
};
```

#### Using TranslatableText Component

```tsx
import TranslatableText from '../components/TranslatableText';

const MyComponent = () => {
  return (
    <div>
      <TranslatableText tag="h1" className="text-2xl">
        This text will be translated
      </TranslatableText>
    </div>
  );
};
```

#### Excluding Elements from Translation

Add the `data-no-translate` attribute to elements you don't want translated:

```tsx
<div data-no-translate>
  This text will not be translated
</div>
```

Or use the `no-translate` CSS class:

```tsx
<div className="no-translate">
  This text will not be translated
</div>
```

## Supported Languages

The system supports 40+ languages including:

- English, French, German, Arabic
- Spanish, Italian, Portuguese, Dutch
- Polish, Russian, Japanese, Korean
- Chinese, Hindi, Turkish, and many more

## API Details

### LibreTranslate API
- **Base URL**: https://libretranslate.de
- **Free Tier**: No authentication required
- **Rate Limits**: Reasonable limits for free usage
- **Supported Languages**: 100+ languages

### API Endpoints Used
- `POST /translate` - Translate text
- `GET /languages` - Get supported languages

## Performance Considerations

1. **Caching**: Translations are cached to avoid repeated API calls
2. **Batch Translation**: Multiple elements are translated in parallel
3. **Fallback**: Original text is preserved if translation fails
4. **Loading States**: UI shows translation progress

## Error Handling

- Network errors are handled gracefully
- Failed translations return original text
- Console warnings for debugging
- User-friendly error states

## Browser Compatibility

- Modern browsers with ES6+ support
- Requires fetch API support
- Works with React 18+

## Troubleshooting

### Common Issues

1. **Translations not working**
   - Check browser console for errors
   - Verify internet connection
   - Ensure LibreTranslate API is accessible

2. **Language not persisting**
   - Check localStorage permissions
   - Verify TranslationProvider is wrapping the app

3. **Performance issues**
   - Check translation cache
   - Monitor API response times
   - Consider reducing translation scope

### Debug Mode

Enable debug logging by adding to browser console:
```javascript
localStorage.setItem('translationDebug', 'true');
```

## Future Enhancements

- [ ] Add translation memory for better accuracy
- [ ] Implement offline translation capabilities
- [ ] Add translation quality feedback
- [ ] Support for RTL languages (Arabic, Hebrew)
- [ ] Machine learning-based translation improvements 