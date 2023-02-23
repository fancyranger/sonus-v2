import Head from 'next/head';
import Link from 'next/link';
import { APP_DATA } from '@/utils/constants';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Diabetes Dynamics - Doctor Insight</title>
      </Head>

      <div className="content-header">
        <h1>Diabetes Dynamics - Doctor Insight</h1>

        <div>
          The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors,
          motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution
          and performance assessment.
        </div>

        <Link href={APP_DATA.diabetes.to}>Back</Link>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-10">
        {Object.values(APP_DATA.diabetes.data.doctor.data).map(({ to, title, description, bg, color }) => (
          <div key={to} className="card" style={{ backgroundColor: bg }}>
            <h3 style={{ color }}>{title}</h3>
            <p>{description}</p>
            <Link href={to}>View more</Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-30">
        {Object.values(APP_DATA.diabetes.data.doctor.analyses).map(({ to, title, description, bg, color }) => (
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
