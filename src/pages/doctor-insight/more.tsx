import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';
import { DOCTOR_INSIGHT_DATA } from '@/utils/constants';

export default function () {
  return (
    <>
      <Head>
        <title>SONUS Doctor Insight</title>
      </Head>

      <h1 className="mb-7">
        SONUS<sup>TM</sup> Doctor Insight Platform
      </h1>

      <p className="mb-7 text-cyan-blue-medium font-bold">
        Helping you uncover new opportunities from insight on doctors’ knowledge and behaviours
      </p>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            The SONUS™ Doctor Insight platform curates data from interviews of doctors following administration of
            medical and commercially critical questions that unveil opportunities in hospitals, as seen from doctors’
            behaviours when treating patients with diabetes, hypertension, or cancer. The scope include diagnosed
            patient counts, criteria for brand selection, unmet needs, brand preference and recall, barriers to
            treatment, preferred digital channels, assessment of value of company field force and scientific engagement.
            SONUS™ survey is conducted annually. The first syndicated research was completed November 2021.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-7">
        {Object.values(DOCTOR_INSIGHT_DATA.more).map(({ to, title, description, bg, color }) => (
          <Card key={to} className="mr-5 mb-5" style={{ background: bg }}>
            <h3 className="mb-5" style={{ color }}>
              {title}
            </h3>
            <p className="mb-2">{description}</p>
            <Link href={to}>View more</Link>
          </Card>
        ))}
      </div>
    </>
  );
}
