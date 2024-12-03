import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../layouts';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
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
    ],
  },
]);

export default router; 