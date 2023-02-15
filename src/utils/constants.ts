import type { Cards } from '@/utils/interfaces';

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
      to: '/doctor-insight/competitive-landscape',
      title: 'Competitive Landscape Analysis',
      description:
        'This analysis provides insight on doctors’ feedback regarding value added by company scientific engagement and sales representative visits. Insights from the analysis could be a useful metric for benchmarking your company’s scientific and salesforce engagement towards seeking areas of improvement whilst also assessing impact of investment in these activities.',
      bg: '#CBEEF34D',
      color: '#289DAE',
    },
    'digital-preference': {
      to: '/doctor-insight/digital-preference',
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
    },
    'vitamins-dynamics': {
      to: '/doctor-insight/vitamins-dynamics',
      title: 'Vitamins Dynamics',
      description:
        'The Oncology Dynamics enables a deep dive analysis of behaviours, preferences, and knowledge of oncologists as it relates to cancer patient counts, unmet needs, and therapeutics in management of prostate and breast cancer.',
      bg: '#FF95054D',
      color: '#8F5200',
    },
  } as Cards,
};
