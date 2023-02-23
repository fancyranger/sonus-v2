import Head from 'next/head';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { APP_DATA } from '@/utils/constants';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Diabetes Dynamics Therapy Area Insight</title>
      </Head>

      <div className="content-header">
        <h1>Diabetes Dynamics Therapy Area Insight</h1>

        <div>
          The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors,
          motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution
          and performance assessment.
        </div>

        <Link href="/">Back</Link>
      </div>

      <div className="grid grid-cols-3 gap-x-14 mb-30">
        {Object.values(APP_DATA.diabetes.data).map(({ to, title, description, icon, span = 1, bg, color }) => (
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
