import Head from 'next/head';
import Link from 'next/link';
import ContentHeader from '@/components/ContentHeader';
import Icon from '@/components/Icon';
import { APP_DATA } from '@/helpers/constants';

export default function () {
  const {
    to,
    data: {
      diabetes: {
        header: { title },
        description,
        data,
      },
    },
  } = APP_DATA;

  return (
    <>
      <Head>
        <title>SONUS {title}</title>
      </Head>

      <ContentHeader title={title} description={description} to={to} />

      <div className="grid grid-cols-3 gap-x-14 mb-20">
        {Object.values(data).map(({ to, title, description, icon, span = 1, bg, color }) => (
          <div key={to} className="card" style={{ backgroundColor: bg, gridColumn: `span ${span} / span ${span}` }}>
            <div>
              <Icon style={{ color }}>{icon}</Icon>
              <h3 style={{ color }}>{title}</h3>
            </div>
            <p>{description}</p>
            <Link href={to}>View more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
