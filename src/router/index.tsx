import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/404';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router; 