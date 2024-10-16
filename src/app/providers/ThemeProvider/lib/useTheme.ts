import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.PURPLE;
      break;
    case Theme.PURPLE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
      break;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
  };

  return { theme: Theme.LIGHT, toggleTheme };
}
