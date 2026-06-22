import { localAssets } from './localAssets';

export const assets = {
  cseWhiteLogo: localAssets.cseWhiteLogo,
  cseBlackLogo: localAssets.cseBlackLogo,
  hero: localAssets.homeHero,
  deanVideo: localAssets.deanVideoPreview,
};

export const topLinks = ['News', 'Events', 'Careers', 'Contact us'];

export const mainNav = [
  'Home',
  'About',
  'Divisions',
  'Admissions',
  'Programs',
  'People',
  'Publications',
  'Centers',
];

export type ProgramLevel = 'Undergraduate' | 'Graduate';

export type Program = {
  detailId?: string;
  level: ProgramLevel;
  title: string;
  image: string;
};

export type ProgramDivision = {
  heroImage?: string;
  id: string;
  name: string;
  summary: string;
  programs: Program[];
};

export const programDivisions: ProgramDivision[] = [
  {
    id: 'cee',
    heroImage: localAssets.programElectricalEngineering,
    name: 'Computing and Electrical Engineering',
    summary:
      'Programs in computing, electrical engineering, cybersecurity, data science, and health management.',
    programs: [
      {
        level: 'Undergraduate',
        title: 'BSc in Computer Engineering',
        image: localAssets.programComputerEngineering,
      },
      {
        level: 'Undergraduate',
        title: 'BSc in Electrical Engineering',
        image: localAssets.programElectricalEngineering,
      },
      {
        level: 'Graduate',
        title: 'MSc in Cybersecurity',
        image: localAssets.programCybersecurity,
      },
      {
        level: 'Graduate',
        title: 'MSc in Data Science and Engineering',
        image: localAssets.programDataScience,
        detailId: 'msc-data-science-engineering',
      },
      {
        level: 'Graduate',
        title: 'MIS in Health Management',
        image: localAssets.programHealthInformationSystems,
      },
      {
        level: 'Graduate',
        title: 'MDA in Health Management',
        image: localAssets.programHealthDataAnalytics,
      },
      {
        level: 'Graduate',
        title: 'PhD in Computer Science and Engineering',
        image: localAssets.programPhdComputerScience,
      },
    ],
  },
  {
    id: 'mie',
    heroImage: localAssets.programMechanicalEngineering,
    name: 'Mechanical and Industrial Engineering',
    summary:
      'Programs in mechanical engineering, logistics, supply chain systems, industrial operations, and decision-focused engineering practice.',
    programs: [
      {
        level: 'Undergraduate',
        title: 'BSc in Mechanical Engineering',
        image: localAssets.programMechanicalEngineering,
      },
      {
        level: 'Graduate',
        title: 'MSc in Logistics and Supply Chain Management',
        image: localAssets.programLogisticsMs,
      },
      {
        level: 'Graduate',
        title: 'PhD in Logistics and Supply Chain Management',
        image: localAssets.programLogisticsPhd,
      },
    ],
  },
  {
    id: 'chse',
    heroImage: localAssets.programChemicalEngineering,
    name: 'Chemical and Sustainability Engineering',
    summary:
      'Programs in chemical engineering, sustainable energy, sustainable environment, and engineering solutions for climate, water, and resource challenges.',
    programs: [
      {
        level: 'Undergraduate',
        title: 'BSc in Chemical Engineering',
        image: localAssets.programChemicalEngineering,
      },
      {
        level: 'Graduate',
        title: 'MSc in Sustainable Energy',
        image: localAssets.programSustainableEnergyMs,
      },
      {
        level: 'Graduate',
        title: 'MSc in Sustainable Environment',
        image: localAssets.programSustainableEnvironmentMs,
      },
      {
        level: 'Graduate',
        title: 'PhD in Sustainable Energy',
        image: localAssets.programSustainableEnergyPhd,
      },
      {
        level: 'Graduate',
        title: 'PhD in Sustainable Environment',
        image: localAssets.programSustainableEnvironmentPhd,
      },
    ],
  },
  {
    id: 'science',
    heroImage: localAssets.aboutHero,
    name: 'Science',
    summary:
      'Service division supporting the undergraduate programs. No specific degree is currently offered under this division.',
    programs: [],
  },
];

export const newsItems = [
  {
    title: 'Experts Examine Important AI Solutions in Building Resilient and Sustainable Power Systems',
    date: '28 Jan 2026',
    image: localAssets.newsAiPowerSystems,
    feature: true,
  },
  {
    title: 'Hamad Bin Khalifa University Symposium Explores Flow Assurance',
    date: '18 Jan 2026',
    image: localAssets.newsFlowAssurance,
  },
  {
    title: 'HBKU and ACCIONA Symposium Explores Water Resilience Through Desalination',
    date: '26 Nov 2025',
    image: localAssets.newsWaterResilience,
  },
  {
    title: 'HBKU Signs Agreement to Drive Industrial Innovation',
    date: '11 Nov 2025',
    image: localAssets.newsIndustrialInnovation,
  },
];

export const testimonials = [
  {
    quote:
      'My supervisor supported me throughout my PhD journey at HBKU. The knowledge I gained pushed me closer to becoming an expert in my field.',
    name: 'Jaber Sadiqe Al-Khori',
    role: 'PhD Student',
    image: localAssets.testimonialJaber,
  },
  {
    quote:
      'Studying at HBKU has benefitted me tremendously as there are no disciplinary boundaries. We were able to explore fields closest to our strengths and interests.',
    name: 'Waqas Nawaz',
    role: 'PhD Student',
  },
];

export const footerGroups = [
  {
    heading: 'Colleges and Schools',
    links: [
      'College of Islamic Studies',
      'College of Humanities and Social Sciences',
      'College of Science and Engineering',
      'College of Law',
      'College of Health and Life Sciences',
      'College of Public Policy',
    ],
  },
  {
    heading: 'Research Institutes and Centers',
    links: [
      'Qatar Biomedical Research Institute (QBRI)',
      'Qatar Computing Research Institute (QCRI)',
      'Qatar Environment and Energy Research Institute (QEERI)',
      'Global Institute for Strategic Research (GISR)',
    ],
  },
  {
    heading: 'Useful Links',
    links: ['About HBKU', 'University Policies', 'Academics', 'Research', 'HBKU Press', 'Careers'],
  },
];
