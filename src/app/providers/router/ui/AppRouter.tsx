import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
