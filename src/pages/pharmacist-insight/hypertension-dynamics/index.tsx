import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';
import { PHARMACIST_INSIGHT_DATA } from '@/utils/constants';

export default function () {
  const cards = PHARMACIST_INSIGHT_DATA.dynamics['hypertension-dynamics'].data;

  return (
    <>
      <Head>
        <title>SONUS Pharmacist Insight</title>
      </Head>

      <h1 className="mb-7">Pharmacist Insight - Hypertension Dynamics</h1>

      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-2 px-4 py-3 bg-white rounded-lg">
          <p>
            The Pharmacist Insight platform curates data from interviews of pharmacists following administration of
            critical questions that unveil opportunities in hospital and community pharmacies, as seen from trend of
            reported prescriptions and items dispensed, believes and behaviours regarding product switch, product
            stocking, patient encounters and demands, criteria for brand selection, barriers to accessing medicines,
            preferred digital channels, assessment of value of company field force and scientific engagement.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-7">
        {Object.values(cards ?? []).map(({ to, title, description, bg, color }) => (
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
