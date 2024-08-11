import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CascaderPage } from './pages/cascader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cascader',
    element: <CascaderPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
