import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RouteLink from '@/components/RouteLink';
import { ROUTES } from '@/utils/constants';

export default function Sidebar() {
  const router = useRouter();
  const isDashboard = router.asPath === '/';

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log('logout');
  };

  return (
    <aside className="flex flex-col shrink-0 w-60 h-screen py-8">
      <h1 className="mx-auto mb-8 text-white">
        SONUS<sup>TM</sup>
      </h1>

      <ul className="mb-40">
        {ROUTES.map(({ to, label, icon }) => (
          <li key={to} className="flex mb-2">
            <RouteLink to={to} style={{ background: router.asPath === to ? '#56BDD3' : null }}>
              <Image className="mr-2" src={icon} alt="dashboard" width="24" height="24" />
              <span>{label}</span>
            </RouteLink>
          </li>
        ))}
      </ul>

      <div className="px-4">
        <hr />
      </div>

      <ul className="mt-auto mb-30">
        {!isDashboard && (
          <li className="flex items-center">
            <RouteLink to="/support">
              <Image className="mr-2" src="/support.svg" alt="support" width="24" height="24" />
              <span>Support</span>
            </RouteLink>
          </li>
        )}

        <li className="flex items-center">
          <RouteLink to="/auth/logout" onClick={handleLogout}>
            <Image className="mr-2" src="/logout.svg" alt="logout" width="24" height="24" />
            <span>Logout</span>
          </RouteLink>
        </li>
      </ul>

      <div className="w-fit px-7 py-4 mx-auto mt-auto bg-white">
        <Image src="/pbr.svg" alt="pbr" width="100" height="45" />
      </div>
    </aside>
  );
}
