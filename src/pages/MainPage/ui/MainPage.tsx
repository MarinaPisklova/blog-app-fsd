import { BugButton } from 'app/providers/ErrorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
