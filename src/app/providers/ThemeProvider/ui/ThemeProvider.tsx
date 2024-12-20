import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT,
  );

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
  }, [theme]);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
