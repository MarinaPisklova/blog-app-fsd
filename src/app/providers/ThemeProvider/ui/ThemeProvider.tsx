import {
  FC, ReactNode, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const defaultTheme = (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
