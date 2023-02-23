import Head from 'next/head';
import Link from 'next/link';
import ContentHeader from '@/components/ContentHeader';
import { APP_DATA } from '@/helpers/constants';

export default function () {
  const {
    data: {
      hypertension: {
        to,
        data: {
          doctor: {
            header: { title },
            description,
            data,
          },
        },
      },
    },
  } = APP_DATA;

  return (
    <>
      <Head>
        <title>SONUS {title}</title>
      </Head>

      <ContentHeader title={title} description={description} to={to} />

      <div className="grid grid-cols-3 gap-5 mb-20">
        {Object.values(data).map(({ to, title, description, bg, color }) => (
          <div key={to} className="card" style={{ backgroundColor: bg }}>
            <h3 style={{ color }}>{title}</h3>
            <p>{description}</p>
            <Link href={to}>View more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
