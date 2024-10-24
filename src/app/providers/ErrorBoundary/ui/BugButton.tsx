import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// Компонент для тестирования ErrorBoundary
const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>{t('Прокинуть ошибку')}</Button>;
};

export default BugButton;
