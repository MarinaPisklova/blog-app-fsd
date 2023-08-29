import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
const BugButton = () => {
  const [error, setError] = useState(false);

  const onTrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onTrow}>throw error</Button>;
};

export default BugButton;
