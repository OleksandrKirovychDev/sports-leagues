import { Outlet } from 'react-router';
import { PageHeader } from 'ui/components/Header';

export const RootLayout = () => {
  return (
    <div>
      <PageHeader />
      <Outlet />
    </div>
  );
};
