export type Center = {
  id: string;
  name: string;
  shortName: string;
  focus?: string;
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
    name: 'The Autism Sensing Center of Excellence (A-Sense)',
    shortName: 'A-Sense',
    description:
      'The Autism Sensing Center of Excellence (A-Sense) is a world-class center that aims to contribute to innovative technology enhancement in the field of autism spectrum disorder (ASD) assessment and intervention. The center aims to deliver impactful technologies through multidisciplinary research in AI, computing, medicine, and education to support autistic children and their families.',
    themes: [
      'AI-enabled Sensing',
      'Personalized assessment and intervention',
      'Autism-focused Technology',
    ],
    highlights: [
      'Developing intelligent technology to support autism care',
      'Engages clinicians, educators, parents, advocacy groups, and technology partners',
      'Advances user-centric research and development',
    ],
    officialUrl: 'https://www.hbku.edu.qa/en/cse/a-sense',
  },
  {
    id: 'unesco-chair',
    name: 'UNESCO Chair on Governance and Social Responsibility in Sport',
    shortName: 'UNESCO Chair',
    focus: 'Sport governance, social responsibility, education, and international cooperation',
    description:
      'The UNESCO Chair on Governance and Social Responsibility in Sport operates under joint leadership between UCLan Cyprus and HBKU’s College of Science and Engineering. Its primary objective is to promote research, training, public dialogue, and international cooperation focused on enhancing organizational sport governance and implementing social responsibility programs with sport as a central component.',
    themes: [
      'Sport governance',
      'Social responsibility in sport',
      'Research and training',
      'Public dialogue',
      'International cooperation',
    ],
    highlights: [
      'Good governance enhancement through e-learning for sport volunteer board members',
      'Sport Good Governance Game',
      'Governance Sport Codification Convergence',
      'Corporate social responsibility through sport and the Qatar Stock Exchange',
      'Sport Transparency Index',
    ],
    officialUrl: 'https://www.hbku.edu.qa/en/cse/unesco-chair',
  },
  {
    id: 'i-solouk',
    name: 'The i-Solouk Group',
    shortName: 'i-Solouk',
    focus: 'Technology, behavior, wellbeing, inclusion, and digital literacy',
    description:
      'The i-Solouk Group studies the use of technology in interpreting and modifying humans’ attitude and behavior. Its research addresses Qatar National Vision 2030 priorities and contributes to UN Sustainable Development Goals related to good health and wellbeing, and quality education.',
    themes: [
      'Human-computer interaction',
      'Persuasive technology',
      'Social and cyberpsychology',
      'Inclusiveness and UX',
      'Multimodal sensing',
      'Intelligent behavior analytics',
      'Social informatics',
    ],
    highlights: [
      'Researches better relationships between people and technology',
      'Develops inclusive technology and inclusion-native design processes',
      'Uses technology solutions for positive behavioral change',
      'Creates methods and tools for critical digital literacy',
      'Combines social and technical expertise through interdisciplinary research',
    ],
    officialUrl: 'https://www.hbku.edu.qa/en/cse/i-solouk',
  },
];
