import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';
import type { TCard } from '@/utils/interface';

export default function DoctorInsight() {
  const dynamics: TCard[] = [
    {
      to: '/doctor-insight/respiratory-dynamics',
      title: 'Respiratory Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C74D',
      color: '#674775',
    },
    {
      to: '/doctor-insight/anti-infectives-dynamics',
      title: 'Anti-infectives Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
    },
    {
      to: '/doctor-insight/vitamins-dynamics',
      title: 'Vitamins Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF95054D',
      color: '#8F5200',
    },
  ];

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
        {dynamics.map(({ to, title, description, bg, color }) => (
          <Card key={to} className="mr-5 mb-5" style={{ background: bg }}>
            <h3 className="mb-5" style={{ color }}>
              {title}
            </h3>
            <p className="mb-2">{description}</p>
            <Link href={to}>View more</Link>
          </Card>
        ))}
      </div>

      <div className="flex mb-12">
        <Link href="/doctor-insight" className="bg-[#96C9D3]">
          Back
        </Link>
      </div>
    </>
  );
}
