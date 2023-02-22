import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/constants';

export default function Sidebar() {
  const router = useRouter();
  const isDashboard = router.asPath === '/';

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log('logout');
  };

  return (
    <nav className="shrink-0 flex flex-col w-60 h-screen py-8">
      <div className="mx-auto mb-8 text-white text-[28px] leading-8 font-bold">
        SONUS<sup>TM</sup>
      </div>

      <ul className="mb-40">
        {ROUTES.map(({ to, label, icon }) => (
          <li key={to} className="flex mb-2">
            <Link href={to} className="route-link" style={{ background: router.asPath === to ? '#56BDD3' : undefined }}>
              <Image className="mr-2" src={icon} alt="dashboard" width="24" height="24" />
              <span className="leading-[18px]">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4">
        <hr />
      </div>

      <ul className="mt-auto mb-30">
        {!isDashboard && (
          <li className="flex items-center">
            <Link href="/support" className="route-link">
              <Image className="mr-2" src="/support.svg" alt="support" width="24" height="24" />
              <span className="leading-[18px]">Support</span>
            </Link>
          </li>
        )}

        <li className="flex items-center">
          <Link href="/auth/logout" className="route-link" onClick={handleLogout}>
            <Image className="mr-2" src="/logout.svg" alt="logout" width="24" height="24" />
            <span className="leading-[18px]">Logout</span>
          </Link>
        </li>
      </ul>

      <div className="w-fit px-7 py-4 mx-auto mt-auto">
        <Image src="/pbr.svg" alt="pbr" width="100" height="45" />
      </div>
    </nav>
  );
}
