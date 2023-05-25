import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/Dashboard/Dashboard';

// config
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/atom/LoadingScreen/LoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'devguide', element: <DevGuide /> },

        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import('../pages/dashboard/GeneralApp'))
);
const DevGuide = Loadable(lazy(() => import('../pages/DevGuide/DevGuide')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
