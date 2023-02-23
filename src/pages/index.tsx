import Head from 'next/head';
import Link from 'next/link';
import Icon from '@/components/Icon';
import ContentHeader from '@/components/ContentHeader';
import { APP_DATA } from '@/helpers/constants';

export default function Dashboard() {
  const {
    header: { title, sub, description },
    data,
    references,
  } = APP_DATA;

  return (
    <>
      <Head>
        <title>SONUS Dashboard</title>
      </Head>

      <h3 className="mb-7">Hi Mr. Ayodeji Alaran!</h3>

      <ContentHeader title={title} sub={sub} description={description} />

      <h2 className="mb-7">Therapy Areas</h2>

      <div className="grid grid-cols-3 gap-x-5 mb-20">
        {Object.values(data).map(({ to, title, description, bg, color }) => (
          <div key={to} className="card" style={{ backgroundColor: bg }}>
            <h3 style={{ color }}>{title}</h3>
            <p>{description}</p>
            <Link href={to}>View more</Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-x-10 mb-20">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5">
            {references.map(({ title }) => (
              <h3 key={title} className="self-center">
                {title}
              </h3>
            ))}

            {references.map(({ title, icon, description }) => (
              <div key={title} className="reference">
                <div>
                  <Icon>{icon}</Icon>
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end justify-end">
          <Link href="/support" className="support">
            <Icon className="mr-4">support</Icon>
            <span className="mr-20">Support</span>
            <Icon>right</Icon>
          </Link>
        </div>
      </div>
    </>
  );
}
