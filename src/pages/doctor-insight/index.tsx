import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';

type TCard = {
  title: string;
  description: string;
  action: string;
  bg: string;
  color: string;
};

export default function DoctorInsight() {
  const dynamics: TCard[] = [
    {
      to: '/doctor-insight/diabetes-dynamics',
      title: 'Diabetes Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C74D',
      color: '#674775',
    },
    {
      to: '/doctor-insight/hypertension-dynamics',
      title: 'Hypertension Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
    },
    {
      to: '/doctor-insight/oncology-dynamics',
      title: 'Oncology Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF95054D',
      color: '#8F5200',
    },
  ];

  const analyses: TCard[] = [
    {
      to: '/doctor-insight/competitive-landscape',
      title: 'Competitive Landscape Analysis',
      description:
        'This analysis provides insight on doctors’ feedback regarding value added by company scientific engagement and sales representative visits. Insights from the analysis could be a useful metric for benchmarking your company’s scientific and salesforce engagement towards seeking areas of improvement whilst also assessing impact of investment in these activities.',
      bg: '#CBEEF34D',
      color: '#289DAE',
    },
    {
      to: '/doctor-insight/digital-preference',
      title: 'Digital Preference Analysis',
      description:
        'This analysis provides insight on openness of doctors to be engaged virtually and most preferred digital channel for engagement by companies. Insight from this analytics enables planning and execution of multi-channel engagement as use of mobile devices, internet penetration, and use of social media as source of disease and therapeutic information evolves within the industry.',
      bg: '#E7DDDD4D',
      color: '#986D6D',
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
        <Link href="/doctor-insight/more" className="bg-[#96C9D3]">
          Explore other Therapy area
        </Link>
      </div>

      <div className="grid grid-cols-3 mb-12">
        {analyses.map(({ to, title, description, bg, color }) => (
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
