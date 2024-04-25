import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  const { t } = useTranslation('about');

  return <div>{t('О сайте', { ns: 'about' })}</div>;
};

export default AboutPage;
