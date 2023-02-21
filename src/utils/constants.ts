import type { Cards } from '@/utils/interfaces';

export const ROUTES = [
  {
    to: '/',
    label: 'Dashboard',
    icon: '/dashboard.svg',
  },
  {
    to: '/doctor-insight',
    label: 'Doctor Insight',
    icon: '/doctor.svg',
  },
  {
    to: '/pharmacist-insight',
    label: 'Pharmacist Insight',
    icon: '/pharmacist.svg',
  },
];

export const THERAPY_AREAS = [
  {
    to: '/oncology',
    label: 'Oncology',
    icon: '/therapy/oncology.svg',
  },
  {
    to: '/hypertension',
    label: 'Hypertension',
    icon: '/therapy/hypertension.svg',
  },
  {
    to: '/diabetes',
    label: 'Diabetes',
    icon: '/therapy/diabetes.svg',
  },
  {
    to: '/respiratory',
    label: 'Respiratory',
    icon: '/therapy/respiratory.svg',
  },
  {
    to: '/anti-infectives',
    label: 'Anti-infectives',
    icon: '/therapy/anti-infectives.svg',
  },
  {
    to: '/vitamins',
    label: 'Vitamins',
    icon: '/therapy/vitamins.svg',
  },
];

export const REFERENCE_MAP = [
  {
    title: 'Digital Preference',
    description: 'Preferred channel of engagement by companies',
    icon: '/reference/digital-preference.svg',
  },
  {
    title: 'Salesforce Assessment',
    description: 'Ranking of companies by value added by sales representatives',
    icon: '/reference/salesforce-assessment.svg',
  },
  {
    title: 'Ranking: Most Engaging Companies',
    description: 'Respondents&apos; ranking of companies by value of scientific and pharmacy engagement',
    icon: '/reference/most-engaging-companies.svg',
  },
];

export const DOCTOR_INSIGHT_DATA = {
  dynamics: {
    'diabetes-dynamics': {
      to: '/doctor-insight/diabetes-dynamics',
      title: 'Diabetes Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C74D',
      color: '#674775',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/diabetes-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/diabetes-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'brand-preference-and-recall': {
          to: '/doctor-insight/diabetes-dynamics/brand-preference-and-recall',
          title: 'Brand Preference and Recall',
          description:
            'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'unmet-treatment-objectives': {
          to: '/doctor-insight/diabetes-dynamics/unmet-treatment-objectives',
          title: 'Unmet Treatment Objectives',
          description:
            'This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes as treated with oral antidiabetics and insulins.',
          bg: '#CBEEF34D',
          color: '#289DAE',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/diabetes-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
    'hypertension-dynamics': {
      to: '/doctor-insight/hypertension-dynamics',
      title: 'Hypertension Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/hypertension-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/hypertension-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'unmet-treatment-objectives': {
          to: '/doctor-insight/hypertension-dynamics/unmet-treatment-objectives',
          title: 'Unmet Treatment Objectives',
          description:
            'This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes as treated with oral antidiabetics and insulins.',
          bg: '#CBEEF34D',
          color: '#289DAE',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/hypertension-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
    'oncology-dynamics': {
      to: '/doctor-insight/oncology-dynamics',
      title: 'Oncology Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF95054D',
      color: '#8F5200',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/oncology-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/oncology-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'brand-preference-and-recall': {
          to: '/doctor-insight/oncology-dynamics/brand-preference-and-recall',
          title: 'Brand Preference and Recall',
          description:
            'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/oncology-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
  } as Cards,
  analyses: {
    'competitive-landscape': {
      to: '/doctor-insight/competitive-landscape-analysis',
      title: 'Competitive Landscape Analysis',
      description:
        'This analysis provides insight on doctors’ feedback regarding value added by company scientific engagement and sales representative visits. Insights from the analysis could be a useful metric for benchmarking your company’s scientific and salesforce engagement towards seeking areas of improvement whilst also assessing impact of investment in these activities.',
      bg: '#CBEEF34D',
      color: '#289DAE',
    },
    'digital-preference': {
      to: '/doctor-insight/digital-preference-analysis',
      title: 'Digital Preference Analysis',
      description:
        'This analysis provides insight on openness of doctors to be engaged virtually and most preferred digital channel for engagement by companies. Insight from this analytics enables planning and execution of multi-channel engagement as use of mobile devices, internet penetration, and use of social media as source of disease and therapeutic information evolves within the industry.',
      bg: '#E7DDDD4D',
      color: '#986D6D',
    },
  } as Cards,
  more: {
    'respiratory-dynamics': {
      to: '/doctor-insight/respiratory-dynamics',
      title: 'Respiratory Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C74D',
      color: '#674775',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/respiratory-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/respiratory-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'brand-preference-and-recall': {
          to: '/doctor-insight/respiratory-dynamics/brand-preference-and-recall',
          title: 'Brand Preference and Recall',
          description:
            'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/respiratory-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
    'anti-infectives-dynamics': {
      to: '/doctor-insight/anti-infectives-dynamics',
      title: 'Anti-infectives Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/anti-infectives-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/anti-infectives-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'brand-preference-and-recall': {
          to: '/doctor-insight/anti-infectives-dynamics/brand-preference-and-recall',
          title: 'Brand Preference and Recall',
          description:
            'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/anti-infectives-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
    'vitamins-dynamics': {
      to: '/doctor-insight/vitamins-dynamics',
      title: 'Vitamins Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF95054D',
      color: '#8F5200',
      data: {
        'patient-opportunity-analysis': {
          to: '/doctor-insight/vitamins-dynamics/patient-opportunity-analysis',
          title: 'Patient Opportunity Analysis',
          description:
            'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics': {
          to: '/doctor-insight/vitamins-dynamics/prescription-dynamics',
          title: 'Prescription Dynamics',
          description:
            'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'brand-preference-and-recall': {
          to: '/doctor-insight/vitamins-dynamics/brand-preference-and-recall',
          title: 'Brand Preference and Recall',
          description:
            'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'barriers-to-treatment': {
          to: '/doctor-insight/vitamins-dynamics/barriers-to-treatment',
          title: 'Barriers to Treatment',
          description:
            'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
      },
    },
  } as Cards,
};

export const PHARMACIST_INSIGHT_DATA = {
  dynamics: {
    'diabetes-dynamics': {
      to: '/pharmacist-insight/diabetes-dynamics',
      title: 'Diabetes Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C74D',
      color: '#674775',
      data: {
        'pharmacist-insight': {
          to: '/pharmacist-insight/diabetes-dynamics/pharmacist-insight',
          title: 'Pharmacist Insight',
          description:
            'This analysis provides insight on factors driving stocking of oral antidiabetics and insulins, and factors that motivates pharmacists to stock the two classes of drugs.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics-insulin': {
          to: '/pharmacist-insight/diabetes-dynamics/prescription-dynamics-insulin',
          title: 'Prescription Dynamics (Insulin)',
          description:
            'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'prescription-Dynamics-oral-antidiabetics': {
          to: '/pharmacist-insight/diabetes-dynamics/prescription-Dynamics-oral-antidiabetics',
          title: 'Prescription Dynamics (Oral Antidiabetics)',
          description:
            'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'switch-analytics': {
          to: '/pharmacist-insight/diabetes-dynamics/switch-analytics',
          title: 'Switch Analytics',
          description:
            'This analysis provides insight on trend of oral antidiabetic brand switches by pharmacists in hospital and community pharmacies respectively, and also reason for the switch.',
          bg: '#CBEEF34D',
          color: '#289DAE',
        },
        'patient-insight': {
          to: '/pharmacist-insight/diabetes-dynamics/patient-insight',
          title: 'Patient Insight',
          description:
            'This analysis provides insight on patients’ loyalty and insistence on brands when prescribed oral antidiabetics.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
        'barriers-to-access': {
          to: '/pharmacist-insight/diabetes-dynamics/barriers-to-access',
          title: 'Barriers to Access',
          description:
            'This analysis provides insight on barriers of patients to accessing insulins and oral antidiabetic products when prescribed by doctors in both hospitals and community pharmacies respectively.',
          bg: '#048A814D',
          color: '#036D66',
        },
        'competitive-landscape-analysis': {
          to: '/pharmacist-insight/diabetes-dynamics/competitive-landscape-analysis',
          title: 'Competitive Landscape Analysis',
          description:
            'This analysis provides insight on pharmacists’ feedback on companies with the most value-adding field force and scientific engagement.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'digital-preference-analysis': {
          to: '/pharmacist-insight/diabetes-dynamics/digital-preference-analysis',
          title: 'Digital Preference Analysis',
          description:
            'This analysis provides insight on openness of pharmacists’ to be engaged virtually and most preferred digital channel for engagement by companies.',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
      },
    },
    'hypertension-dynamics': {
      to: '/pharmacist-insight/hypertension-dynamics',
      title: 'Hypertension Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
      data: {
        'pharmacist-insight': {
          to: '/pharmacist-insight/hypertension-dynamics/pharmacist-insight',
          title: 'Pharmacist Insight',
          description:
            'This analysis provides insight on factors driving stocking of oral antidiabetics and insulins, and factors that motivates pharmacists to stock the two classes of drugs.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'prescription-dynamics-insulin': {
          to: '/pharmacist-insight/hypertension-dynamics/prescription-dynamics-insulin',
          title: 'Prescription Dynamics (Insulin)',
          description:
            'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
        'prescription-Dynamics-oral-antidiabetics': {
          to: '/pharmacist-insight/hypertension-dynamics/prescription-Dynamics-oral-antidiabetics',
          title: 'Prescription Dynamics (Oral Antidiabetics)',
          description:
            'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
          bg: '#FF95054D',
          color: '#995800',
        },
        'switch-analytics': {
          to: '/pharmacist-insight/hypertension-dynamics/switch-analytics',
          title: 'Switch Analytics',
          description:
            'This analysis provides insight on trend of oral antidiabetic brand switches by pharmacists in hospital and community pharmacies respectively, and also reason for the switch.',
          bg: '#CBEEF34D',
          color: '#289DAE',
        },
        'patient-insight': {
          to: '/pharmacist-insight/hypertension-dynamics/patient-insight',
          title: 'Patient Insight',
          description:
            'This analysis provides insight on patients’ loyalty and insistence on brands when prescribed oral antidiabetics.',
          bg: '#E7DDDD4D',
          color: '#986D6D',
        },
        'barriers-to-access': {
          to: '/pharmacist-insight/hypertension-dynamics/barriers-to-access',
          title: 'Barriers to Access',
          description:
            'This analysis provides insight on barriers of patients to accessing insulins and oral antidiabetic products when prescribed by doctors in both hospitals and community pharmacies respectively.',
          bg: '#048A814D',
          color: '#036D66',
        },
        'competitive-landscape-analysis': {
          to: '/pharmacist-insight/hypertension-dynamics/competitive-landscape-analysis',
          title: 'Competitive Landscape Analysis',
          description:
            'This analysis provides insight on pharmacists’ feedback on companies with the most value-adding field force and scientific engagement.',
          bg: '#BCA3C74D',
          color: '#674775',
        },
        'digital-preference-analysis': {
          to: '/pharmacist-insight/hypertension-dynamics/digital-preference-analysis',
          title: 'Digital Preference Analysis',
          description:
            'This analysis provides insight on openness of pharmacists’ to be engaged virtually and most preferred digital channel for engagement by companies.',
          bg: '#5FAD564D',
          color: '#3B6E35',
        },
      },
    },
  } as Cards,
};
