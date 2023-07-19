import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
