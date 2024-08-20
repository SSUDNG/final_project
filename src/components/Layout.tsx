import { Outlet } from 'react-router-dom';
import GNB from './GNB/GNB';

function Layout() {
  return (
    <>
      <GNB />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
