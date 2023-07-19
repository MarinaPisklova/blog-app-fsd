import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = (props) => {
  const { t } = useTranslation('about');

  return <div>{t('О сайте')}</div>;
};

export default AboutPage;
