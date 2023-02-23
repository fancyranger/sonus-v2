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
    <nav className="shrink-0 flex flex-col w-60 h-screen py-8 overflow-y-auto">
      <Link href="/" className="mx-auto mb-8 p-0 bg-transparent text-[28px] leading-8">
        SONUS™
      </Link>

      <ul>
        <li className="nav-link">
          <Link href="/" style={{ background: router.asPath === '/' ? '#56BDD3' : undefined }}>
            <Icon>home</Icon>
            <span>Home</span>
            <Icon className="ml-auto">down</Icon>
          </Link>
        </li>

        {ROUTES.map(({ to, label }) => (
          <li key={to} className="nav-link">
            <Link href={to} style={{ background: router.asPath.startsWith(to) ? '#56BDD3' : undefined }}>
              <span className="ml-9">{label}</span>
            </Link>
          </li>
        ))}

        <li className="nav-link">
          <Link href="/cohort" style={{ background: router.asPath === '/cohort' ? '#56BDD3' : undefined }}>
            <Icon>cohort</Icon>
            <span>Cohort</span>
            <Icon className="ml-auto">up</Icon>
          </Link>
        </li>
      </ul>

      <div className="p-4">
        <hr />
      </div>

      <ul>
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
