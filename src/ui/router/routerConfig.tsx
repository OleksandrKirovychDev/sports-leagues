import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from 'ui/Layout/Layout';
import { AllLeagues } from 'ui/Pages/AllLeagues/AllLeagues';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <AllLeagues /> }],
  },
]);
