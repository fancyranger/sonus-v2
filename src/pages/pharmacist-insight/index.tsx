import Head from 'next/head';
import Link from 'next/link';
import { PHARMACIST_INSIGHT_DATA } from '@/utils/constants';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Pharmacist Insight</title>
      </Head>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content-header mb-7">
            <h1 className="mb-7">
              SONUS<sup>TM</sup> Pharmacist Insight Platform
            </h1>

            <p className="mb-7">
              Helping you uncover new opportunities from insight on doctors’ knowledge and behaviours
            </p>

            <div>
              The SONUS<sup>TM</sup> Doctor Insight platform curates data from interviews of doctors following
              administration of medical and commercially critical questions that unveil opportunities in hospitals, as
              seen from doctors’ behaviours when treating patients with diabetes, hypertension, or cancer. The scope
              include diagnosed patient counts, criteria for brand selection, unmet needs, brand preference and recall,
              barriers to treatment, preferred digital channels, assessment of value of company field force and
              scientific engagement. SONUS<sup>TM</sup> survey is conducted annually. The first syndicated research was
              completed November 2021.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-7">
        {Object.values(PHARMACIST_INSIGHT_DATA.dynamics).map(({ to, title, description, bg, color }) => (
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
