import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface MainPageProps {}

const MainPage: FC<MainPageProps> = (props) => {
  const { t } = useTranslation();

  return <div>{t('Главная страница')}</div>;
};

export default MainPage;
