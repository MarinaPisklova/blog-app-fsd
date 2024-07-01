import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from './ThemeContext';

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
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: Theme.LIGHT, toggleTheme };
}
