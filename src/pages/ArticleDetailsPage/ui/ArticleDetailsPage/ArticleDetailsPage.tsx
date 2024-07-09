import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ARTICLE Details
    </div>
  );
};

export default memo(ArticleDetailsPage);
