export type Center = {
  id: string;
  name: string;
  shortName: string;
  focus: string;
  description: string;
  themes: string[];
  highlights: string[];
  officialUrl: string;
};

export const centers: Center[] = [
  {
    id: 'qc2',
    name: 'Qatar Center for Quantum Computing',
    shortName: 'QC2',
    focus: 'Quantum research, computing, communication, and sensing',
    description:
      'A newly established HBKU center positioned at the nexus of theoretical and experimental quantum research, with a mission to advance quantum research in Qatar and the wider region.',
    themes: ['Quantum communication', 'Quantum computing', 'Quantum sensing'],
    highlights: [
      'Partners with academic and industry peers',
      'Contributes to the global quantum technology ecosystem',
      'Welcomes PhD, postdoctoral, scientist, and visiting researcher engagement',
    ],
    officialUrl: 'https://www.hbku.edu.qa/en/cse/qc2',
  },
  {
    id: 'a-sense',
    name: 'Autism Sensing Center of Excellence',
    shortName: 'A-Sense',
    focus: 'Autism-focused sensing, AI, assessment, and intervention',
    description:
      'A world-class center developing impactful technologies for autism spectrum disorder assessment and intervention through multidisciplinary research in computing, medicine, and education.',
    themes: ['AI-enabled sensing', 'ASD assessment', 'Personalized intervention'],
    highlights: [
      'Supports autistic children and their families',
      'Engages clinicians, educators, parents, advocacy groups, and technology partners',
      'Advances human-centered digital health innovation',
    ],
    officialUrl: 'https://www.hbku.edu.qa/en/cse/a-sense',
  },
];
