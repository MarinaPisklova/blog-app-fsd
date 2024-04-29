import { BugButton } from 'app/providers/ErrorBoundary';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
