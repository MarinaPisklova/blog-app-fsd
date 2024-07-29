import { FC, useMemo, useState } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
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
