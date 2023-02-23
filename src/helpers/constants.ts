export const ROUTES = [
  {
    to: '/diabetes',
    label: 'Diabetes',
  },
  {
    to: '/hypertension',
    label: 'Hypertension',
  },
  {
    to: '/oncology',
    label: 'Oncology',
  },
  {
    to: '/anti-infectives',
    label: 'Anti-infectives',
  },
  {
    to: '/vitamins',
    label: 'Vitamins',
  },
  {
    to: '/respiratory',
    label: 'Respiratory',
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

export const APP_DATA = {
  to: '/',
  header: {
    title: 'Welcome to SONUS™',
    sub: 'Helping you uncover new opportunities from insight on doctors and pharmacists knowledge and behaviours.',
    description:
      'SONUS™ provides access to unprecedented data and insight captured from face-to-face interview of doctors and pharmacists in major disease diagnosis, treatment, and dispensing centres in the country.',
  },
  data: {
    diabetes: {
      to: '/diabetes',
      title: 'Diabetes Dynamics',
      description:
        'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctors’ behaviors, motivations, unmet patient needs and other critical information to aid strategic planning, tactical execution and performance assessment.',
      bg: '#BCA3C7',
      color: '#674775',
      header: {
        title: 'Diabetes Dynamics Therapy Area Insight',
      },
      data: {
        doctor: {
          to: '/diabetes/doctor',
          title: 'Diabetes Doctor Insight',
          description:
            'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors, motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution and performance assessment.',
          icon: 'doctor',
          span: 1,
          bg: '#BCA3C7',
          color: '#674775',
          header: {
            title: 'Diabetes Dynamics - Doctor Insight',
          },
          data: {
            'patient-opportunity-analysis': {
              to: '/diabetes/doctor/patient-opportunity-analysis',
              title: 'Patient Opportunity Analysis',
              description:
                'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'prescription-dynamics': {
              to: '/diabetes/doctor/prescription-dynamics',
              title: 'Prescription Dynamics',
              description:
                'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
            'brand-preference-and-recall': {
              to: '/diabetes/doctor/brand-preference-and-recall',
              title: 'Brand Preference and Recall',
              description:
                'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
              bg: '#FF950580',
              color: '#995800',
            },
            'unmet-treatment-objectives': {
              to: '/diabetes/doctor/unmet-treatment-objectives',
              title: 'Unmet Treatment Objectives',
              description:
                'This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes as treated with oral antidiabetics and insulins.',
              bg: '#CBEEF34D',
              color: '#289DAE',
            },
            'barriers-to-treatment': {
              to: '/diabetes/doctor/barriers-to-treatment',
              title: 'Barriers to Treatment',
              description:
                'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
              bg: '#E7DDDD',
              color: '#986D6D',
            },
          },
          analyses: {
            'competitive-landscape-analysis': {
              to: '/diabetes/doctor/competitive-landscape-analysis',
              title: 'Competitive Landscape Analysis',
              description:
                'This analysis provides insight on doctors’ feedback regarding value added by company scientific engagement and sales representative visits. Insights from the analysis could be a useful metric for benchmarking your company’s scientific and salesforce engagement towards seeking areas of improvement whilst also assessing impact of investment in these activities.',
              bg: '#048A8138',
              color: '#036D66',
            },
            'digital-preference-analysis': {
              to: '/diabetes/doctor/digital-preference-analysis',
              title: 'Digital Preference Analysis',
              description:
                'This analysis provides insight on openness of doctors to be engaged virtually and most preferred digital channel for engagement by companies. Insight from this analytics enables planning and execution of multi-channel engagement as use of mobile devices, internet penetration, and use of social media as source of disease and therapeutic information evolves within the industry.',
              bg: '#DDAEA4',
              color: '#834646',
            },
          },
        },
        pharmacist: {
          to: '/diabetes/pharmacist',
          title: 'Diabetes Pharmacist Insight',
          description:
            'The Pharmacist Insight platform curates data from interviews of pharmacists following administration of critical questions that unveil opportunities in hospital and community pharmacies, as seen from trend of reported prescriptions and items dispensed, believes and behaviours regarding product switch, product stocking, patient encounters and demands, criteria for brand selection, barriers to accessing medicines, preferred digital channels, assessment of value of company field force and scientific engagement.',
          icon: 'pharmacist',
          span: 2,
          bg: '#5FAD564D',
          color: '#3B6E35',
          header: {
            title: 'Diabetes Dynamics - Pharmacist Insight',
          },
          data: {
            'pharmacist-insight': {
              to: '/diabetes/pharmacist/pharmacist-insight',
              title: 'Pharmacist Insight',
              description:
                'This analysis provides insight on factors driving stocking of oral antidiabetics and insulins, and factors that motivates pharmacists to stock the two classes of drugs.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'prescription-dynamics-insulin': {
              to: '/diabetes/pharmacist/prescription-dynamics-insulin',
              title: 'Prescription Dynamics (Insulin)',
              description:
                'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
            'prescription-dynamics-oral-antidiabetics': {
              to: '/diabetes/pharmacist/prescription-dynamics-oral-antidiabetics',
              title: 'Prescription Dynamics (Oral Antidiabetics)',
              description:
                'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
              bg: '#FF95054D',
              color: '#995800',
            },
            'switch-analytics': {
              to: '/diabetes/pharmacist/switch-analytics',
              title: 'Switch Analytics',
              description:
                'This analysis provides insight on trend of oral antidiabetic brand switches by pharmacists in hospital and community pharmacies respectively, and also reason for the switch.',
              bg: '#CBEEF34D',
              color: '#289DAE',
            },
            'patient-insight': {
              to: '/diabetes/pharmacist/patient-insight',
              title: 'Patient Insight',
              description:
                'This analysis provides insight on patients’ loyalty and insistence on brands when prescribed oral antidiabetics.',
              bg: '#E7DDDD',
              color: '#986D6D',
            },
            'barriers-to-access': {
              to: '/diabetes/pharmacist/barriers-to-access',
              title: 'Barriers to Access',
              description:
                'This analysis provides insight on barriers of patients to accessing insulins and oral antidiabetic products when prescribed by doctors in both hospitals and community pharmacies respectively.',
              bg: '#048A814D',
              color: '#036D66',
            },
          },
          analyses: {
            'competitive-landscape-analysis': {
              to: '/diabetes/pharmacist/competitive-landscape-analysis',
              title: 'Competitive Landscape Analysis',
              description:
                'This analysis provides insight on pharmacists’ feedback on companies with the most value-adding field force and scientific engagement.',
              bg: '#048A8138',
              color: '#036D66',
            },
            'digital-preference-analysis': {
              to: '/diabetes/pharmacist/digital-preference-analysis',
              title: 'Digital Preference Analysis',
              description:
                'This analysis provides insight on openness of pharmacists’ to be engaged virtually and most preferred digital channel for engagement by companies.',
              bg: '#DDAEA4',
              color: '#834646',
            },
          },
        },
      },
    },
    hypertension: {
      to: '/hypertension',
      title: 'Hypertension Dynamics',
      description:
        'The Hypertension Dynamics enables exploration of the behaviors, preferences, and knowledge of doctors regarding patient numbers, unmet needs, and therapeutics in the management of hypertension.',
      bg: '#5FAD564D',
      color: '#3B6E35',
      header: {
        title: 'Hypertension Dynamics Therapy Area Insight',
      },
      data: {
        doctor: {
          to: '/hypertension/doctor',
          title: 'Hypertension Doctor Insight',
          description:
            'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors, motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution and performance assessment.',
          icon: 'doctor',
          span: 1,
          bg: '#BCA3C7',
          color: '#674775',
          header: {
            title: 'Diabetes Dynamics - Doctor Insight',
          },
          data: {
            'patient-opportunity-analysis': {
              to: '/hypertension/doctor/patient-opportunity-analysis',
              title: 'Patient Opportunity Analysis',
              description:
                'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'prescription-dynamics': {
              to: '/hypertension/doctor/prescription-dynamics',
              title: 'Prescription Dynamics',
              description:
                'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
            'unmet-treatment-objectives': {
              to: '/hypertension/doctor/unmet-treatment-objectives',
              title: 'Unmet Treatment Objectives',
              description:
                'This analysis provides insight on unmet treatment objectives for patients with type 1 and type 2 diabetes as treated with oral antidiabetics and insulins.',
              bg: '#CBEEF34D',
              color: '#289DAE',
            },
            'barriers-to-treatment': {
              to: '/hypertension/doctor/barriers-to-treatment',
              title: 'Barriers to Treatment',
              description:
                'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
              bg: '#E7DDDD',
              color: '#986D6D',
            },
          },
        },
        pharmacist: {
          to: '/hypertension/pharmacist',
          title: 'Hypertension Pharmacist Insight',
          description:
            'The Pharmacist Insight platform curates data from interviews of pharmacists following administration of critical questions that unveil opportunities in hospital and community pharmacies, as seen from trend of reported prescriptions and items dispensed, believes and behaviours regarding product switch, product stocking, patient encounters and demands, criteria for brand selection, barriers to accessing medicines, preferred digital channels, assessment of value of company field force and scientific engagement.',
          icon: 'pharmacist',
          span: 2,
          bg: '#5FAD564D',
          color: '#3B6E35',
          header: {
            title: 'Pharmacist Insight - Hypertension Dynamics',
          },
          data: {
            'pharmacist-insight': {
              to: '/hypertension/pharmacist/pharmacist-insight',
              title: 'Pharmacist Insight',
              description:
                'This analysis provides insight on factors driving stocking of oral antidiabetics and insulins, and factors that motivates pharmacists to stock the two classes of drugs.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'prescription-dynamics': {
              to: '/hypertension/pharmacist/prescription-dynamics',
              title: 'Prescription Dynamics',
              description:
                'This analysis provides insight on product prescription and demand trends for oral antidiabetics and insulins including volume of prescriptions, prescription refills, pack purchase analytics, most prescribed molecules, most prescribed brands, doctors’ prescription by brand and generics, and impact of doctors prescription.',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
            'switch-analytics': {
              to: '/hypertension/pharmacist/switch-analytics',
              title: 'Switch Analytics',
              description:
                'This analysis provides insight on trend of oral antidiabetic brand switches by pharmacists in hospital and community pharmacies respectively, and also reason for the switch.',
              bg: '#CBEEF34D',
              color: '#289DAE',
            },
            'patient-insight': {
              to: '/hypertension/pharmacist/patient-insight',
              title: 'Patient Insight',
              description:
                'This analysis provides insight on patients’ loyalty and insistence on brands when prescribed oral antidiabetics.',
              bg: '#E7DDDD',
              color: '#986D6D',
            },
            'barriers-to-access': {
              to: '/hypertension/pharmacist/barriers-to-access',
              title: 'Barriers to Access',
              description:
                'This analysis provides insight on barriers of patients to accessing insulins and oral antidiabetic products when prescribed by doctors in both hospitals and community pharmacies respectively.',
              bg: '#048A814D',
              color: '#036D66',
            },
          },
          analyses: {
            'competitive-landscape-analysis': {
              to: '/hypertension/pharmacist/competitive-landscape-analysis',
              title: 'Competitive Landscape Analysis',
              description:
                'This analysis provides insight on pharmacists’ feedback on companies with the most value-adding field force and scientific engagement.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'digital-preference-analysis': {
              to: '/hypertension/pharmacist/digital-preference-analysis',
              title: 'Digital Preference Analysis',
              description:
                'This analysis provides insight on openness of pharmacists’ to be engaged virtually and most preferred digital channel for engagement by companies.',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
          },
        },
      },
    },
    oncology: {
      to: '/oncology',
      title: 'Oncology Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF950566',
      color: '#8F5200',
      header: {
        title: 'Oncology Dynamics Therapy Area Insight',
      },
      data: {
        doctor: {
          to: '/oncology/doctor',
          title: 'Oncology Doctor Insight',
          description:
            'The Diabetes Dynamics offers insight on Type 1 and Type 2 diabetes, specifically on doctor’s behaviors, motivations, unmet patient needs and other critical informationto aid strategic plaaning, tactical exxecution and performance assessment.',
          icon: 'doctor',
          span: 1,
          bg: '#BCA3C7',
          color: '#674775',
          header: {
            title: 'Diabetes Dynamics - Doctor Insight',
          },
          data: {
            'patient-opportunity-analysis': {
              to: '/oncology/doctor/patient-opportunity-analysis',
              title: 'Patient Opportunity Analysis',
              description:
                'This analysis provides insight on number of patients encountered, newly diagnosed patients, number of patients encountered, newly diagnosed patients, and patients with uncontrolled type 1 and 2 diabetes respectively.',
              bg: '#BCA3C7',
              color: '#674775',
            },
            'prescription-dynamics': {
              to: '/oncology/doctor/prescription-dynamics',
              title: 'Prescription Dynamics',
              description:
                'This analysis provides insight on Oral Antidiabetics and Insulin class preference for uncontrolled diabetes, molecule preference, choice of brands and generics, reported outcomes, FBG or HBA1c control, brand selection criteria, population on insulin and oral antidiabetics',
              bg: '#5FAD564D',
              color: '#3B6E35',
            },
            'brand-preference-and-recall': {
              to: '/oncology/doctor/brand-preference-and-recall',
              title: 'Brand Preference and Recall',
              description:
                'This analysis provides insight on brand top-of-mind audit and brand preference for both oral antidiabetics and insulins for treatment of type 2 and type 1 diabetes respectively.',
              bg: '#FF950580',
              color: '#995800',
            },
            'barriers-to-treatment': {
              to: '/oncology/doctor/barriers-to-treatment',
              title: 'Barriers to Treatment',
              description:
                'This analysis provides insight on barriers to treatment for patients with type 1 and type 2 diabetes respectively in treatment with oral antidiabetics and insulins.',
              bg: '#E7DDDD',
              color: '#986D6D',
            },
          },
        },
        pharmacist: {
          to: '/oncology/pharmacist',
          title: 'Oncology Pharmacist Insight',
          description:
            'The Pharmacist Insight platform curates data from interviews of pharmacists following administration of critical questions that unveil opportunities in hospital and community pharmacies, as seen from trend of reported prescriptions and items dispensed, believes and behaviours regarding product switch, product stocking, patient encounters and demands, criteria for brand selection, barriers to accessing medicines, preferred digital channels, assessment of value of company field force and scientific engagement.',
          icon: 'pharmacist',
          span: 2,
          bg: '#5FAD564D',
          color: '#3B6E35',
          header: {
            title: 'Oncology Dynamics - Pharmacist Insight',
          },
          data: {},
        },
      },
    },
  },
  references: [
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
  ],
};
