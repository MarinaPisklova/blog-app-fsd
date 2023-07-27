import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageerror, {}, [])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export default PageError;
