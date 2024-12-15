import { Story, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export const TranslationDecorator = (
  StoryComponent: Story,
  context: StoryContext,
) => {
  const { globals } = context;
  useEffect(() => {
    i18n.changeLanguage(globals.locale);
  }, [globals.locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
