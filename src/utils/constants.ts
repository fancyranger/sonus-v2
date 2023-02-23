export const ROUTES = [
  {
    to: '/',
    label: 'Dashboard',
    icon: 'dashboard',
  },
  {
    to: '/doctor',
    label: 'Doctor Insight',
    icon: 'doctor',
  },
  {
    to: '/pharmacist',
    label: 'Pharmacist Insight',
    icon: 'pharmacist',
  },
];

export const THERAPY_AREAS = [
  {
    to: '/oncology',
    label: 'Oncology',
    icon: 'oncology',
  },
  {
    to: '/hypertension',
    label: 'Hypertension',
    icon: 'hypertension',
  },
  {
    to: '/diabetes',
    label: 'Diabetes',
    icon: 'diabetes',
  },
  {
    to: '/respiratory',
    label: 'Respiratory',
    icon: 'respiratory',
  },
  {
    to: '/anti-infectives',
    label: 'Anti-infectives',
    icon: 'anti-infectives',
  },
  {
    to: '/vitamins',
    label: 'Vitamins',
    icon: 'vitamins',
  },
];

export const REFERENCE_MAP = [
  {
    title: 'Digital Preference',
    description: 'Preferred channel of engagement by companies',
    icon: 'digital',
  },
  {
    title: 'Salesforce Assessment',
    description: 'Ranking of companies by value added by sales representatives',
    icon: 'salesforce',
  },
  {
    title: 'Ranking: Most Engaging Companies',
    description: "Respondents' ranking of companies by value of scientific and pharmacy engagement",
    icon: 'ranking',
  },
];

export const INSIGHT_MAP = [
  {
    to: '/doctor',
    title: 'Diabetes Doctor Insight',
    description:
      'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors, motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution and performance assessment.',
    icon: 'doctor',
    span: 1,
    bg: '#BCA3C74D',
    color: '#674775',
  },
  {
    to: '/pharmacist',
    title: 'Diabetes Pharmacist Insight',
    description:
      'The Pharmacist Insight platform curates data from interviews of pharmacists following administration of critical questions that unveil opportunities in hospital and community pharmacies, as seen from trend of reported prescriptions and items dispensed, believes and behaviours regarding product switch, product stocking, patient encounters and demands, criteria for brand selection, barriers to accessing medicines, preferred digital channels, assessment of value of company field force and scientific engagement.',
    icon: 'pharmacist',
    span: 2,
    bg: '#5FAD564D',
    color: '#3B6E35',
  },
];
