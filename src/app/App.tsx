import { FC, Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { initAuthData, useUserInited } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/widgets/PageLoader';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useUserInited();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
