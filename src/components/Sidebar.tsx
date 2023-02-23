import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '@/components/Icon';
import { ROUTES } from '@/helpers/constants';

export default function Sidebar() {
  const router = useRouter();
  const isDashboard = router.asPath === '/';

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="shrink-0 flex flex-col w-60 h-screen py-8">
      <Link href="/" className="mx-auto mb-8 p-0 bg-transparent text-[28px] leading-8">
        SONUS™
      </Link>

      <ul className="mb-40">
        {ROUTES.map(({ to, label, icon }) => (
          <li key={to} className="nav-link">
            <Link href={to} style={{ background: router.asPath === to ? '#56BDD3' : undefined }}>
              <Icon>{icon}</Icon>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4">
        <hr />
      </div>

      <ul className="mt-auto mb-30">
        {!isDashboard && (
          <li className="nav-link">
            <Link href="/support">
              <Icon>support</Icon>
              <span>Support</span>
            </Link>
          </li>
        )}

        <li className="nav-link">
          <Link href="/auth/logout" onClick={handleLogout}>
            <Icon>logout</Icon>
            <span>Logout</span>
          </Link>
        </li>
      </ul>

      <div className="w-fit mx-auto mt-auto">
        <Icon>pbr</Icon>
      </div>
    </nav>
  );
}
