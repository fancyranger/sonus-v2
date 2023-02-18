import Head from 'next/head';
import Link from 'next/link';
import { DOCTOR_INSIGHT_DATA } from '@/utils/constants';

export default function () {
  const cards = DOCTOR_INSIGHT_DATA.dynamics['diabetes-dynamics'].data;

  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-7">Doctor Insight - Diabetes Dynamics</h1>

            <div>
              The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors,
              motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical
              exxecution and performance assessment.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-7">
        {Object.values(cards ?? []).map(({ to, title, description, bg, color }) => (
          <div key={to} className="card" style={{ background: bg }}>
            <h3 className="mb-5" style={{ color }}>
              {title}
            </h3>
            <p className="mb-2">{description}</p>
            <Link href={to}>View more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
