import { assets, programDivisions } from './siteData';
import { localAssets } from './localAssets';

export const aboutPage = {
  hero: {
    title: 'About the College of Science and Engineering',
    image: localAssets.aboutHero,
    images: [
      localAssets.programComputerEngineering,
      localAssets.programMechanicalEngineering,
      localAssets.programChemicalEngineering,
      localAssets.programDataScience,
      localAssets.programSustainableEnergyMs,
    ],
  },
  factsBackground: localAssets.aboutFactsBackground,
  intro:
    'The College of Science and Engineering offers the largest selection of programs within HBKU. Its programs connect students with HBKU research institutes, expert scientists, external academics, and industry partners to align education with societal and economic needs.',
  facts: [
    { label: 'Active students in CSE', value: '890', icon: 'students' },
    { label: 'Scopus-indexed publications in 2025', value: '794', icon: 'publications' },
    { label: 'Q1 publications', value: '83%', icon: 'quality' },
    { label: 'Faculty members', value: '65', icon: 'faculty' },
    { label: 'Average h-index', value: '26.4', icon: 'impact' },
    { label: 'ARWU ranking in Computer Science & Engineering', value: '201-300', icon: 'ranking' },
  ],
  divisions: programDivisions,
  divisionHeads: [
    {
      division: 'Computing and Electrical Engineering',
      tag: 'CEE',
      head: 'Dr. Dena Al-Thani',
      image: localAssets.headCee,
    },
    {
      division: 'Mechanical and Industrial Engineering',
      tag: 'MIE',
      head: 'Dr. Marwan K. Khraisheh',
      image: localAssets.headMie,
    },
    {
      division: 'Chemical and Sustainability Engineering',
      tag: 'ChSE',
      head: 'Dr. Gordon Mckay',
      image: localAssets.headChse,
    },
    {
      division: 'Science',
      tag: 'Science',
      head: 'Dr. Hassan Said Bazzi',
      image: localAssets.headScience,
    },
  ],
  researchPillars: [
    {
      id: 'computing-ai-ict',
      name: 'Computing, AI & ICT',
      tagline: 'Intelligent systems & networks',
      icon: 'cpu',
      topics:
        'Artificial intelligence, machine learning, data science, computer vision, cybersecurity, next-generation wireless networks, quantum computing, VLSI and smart electronics, robotics and autonomous systems, human-computer interaction, health informatics and bioinformatics.',
    },
    {
      id: 'industrial-systems-engineering',
      name: 'Industrial Systems Engineering',
      tagline: 'Manufacturing & logistics',
      icon: 'factory',
      topics:
        'Smart and sustainable manufacturing, mechanics and metamaterials, flow assurance and thermo-fluid systems, CO2 and hydrogen value chains, smart materials and structures, corrosion characterization, logistics and supply chain management, operations research, sport and event management.',
    },
    {
      id: 'energy-water-environment',
      name: 'Energy, Water & Environment',
      tagline: 'Sustainability & resources',
      icon: 'leaf',
      topics:
        'Renewable energy technologies and smart power grids, oil and gas economics, energy-water-food nexus, desalination and water reuse, environmental biotechnology and air quality, green buildings and sustainable urban planning, demand-side management and policy, biomass and waste management, nanotechnology and nanomaterials.',
    },
    {
      id: 'mathematics-natural-sciences',
      name: 'Mathematics & Natural Sciences',
      tagline: 'Foundations across disciplines',
      icon: 'atom',
      topics:
        'Applied mathematics, analysis, statistics, differential equations, mathematical physics, organic and polymer chemistry, catalysis and nanomaterials, condensed matter and computational materials science, nonlinear optics and dynamics, medical and high-energy physics.',
    },
  ],
  faculty: {
    summary:
      'CSE faculty pursue research that addresses pressing challenges in Qatar, the region, and globally through large-scale projects and interdisciplinary collaboration.',
    divisions: [
      {
        id: 'cee',
        tag: 'CEE',
        name: 'Computing and Electrical Engineering',
        summary:
          'Research in CEE focuses on computing, data, cybersecurity, intelligent systems, digital health, and advanced electrical and communication technologies.',
        topics: [
          'Big data analytics and machine learning',
          'Artificial intelligence',
          'Computer vision',
          'Signal and image processing',
          'Cybersecurity, data privacy, and cyber-physical systems',
          'Applied cryptography, blockchain, and secure data management',
          'Next-generation wireless networks and mobile computing',
          'Human-computer interaction',
          'Sensors, biomedical circuits, and VLSI',
          'Social computing and multimedia',
          'Quantum computing',
          'Scientific visualization and visual computing',
          'Computational bioinformatics',
          'Digital health and health informatics',
          'Software engineering',
          'Technology and human behavior',
        ],
      },
      {
        id: 'mie',
        tag: 'MIE',
        name: 'Mechanical and Industrial Engineering',
        summary:
          'Research in MIE focuses on mechanical systems, industrial operations, logistics, supply chains, manufacturing, and data-driven engineering decisions.',
        topics: [
          'Logistics and supply chain management',
          'Industrial systems and operations research',
          'Advanced manufacturing and production systems',
          'Mechanical design and analysis',
          'Robotics and automation',
          'Energy systems and thermal sciences',
          'Optimization, simulation, and decision analytics',
          'Reliability, maintenance, and asset management',
          'Human-centered industrial engineering',
          'Sustainable operations and circular economy systems',
        ],
      },
      {
        id: 'chse',
        tag: 'ChSE',
        name: 'Chemical and Sustainability Engineering',
        summary:
          'Research in ChSE focuses on chemical engineering, sustainable energy, environmental systems, water, climate, and resource-efficient technologies.',
        topics: [
          'Sustainable energy systems',
          'Sustainable environment and climate solutions',
          'Water treatment, desalination, and reuse',
          'Chemical process design and intensification',
          'Carbon capture, utilization, and storage',
          'Renewable energy technologies',
          'Environmental monitoring and remediation',
          'Materials for energy and environmental applications',
          'Waste valorization and circular resources',
          'Process safety and sustainability assessment',
        ],
      },
    ],
  },
  dean: {
    name: 'Dr. Mounir Hamdi',
    image: localAssets.aboutDean,
    fallbackImage: assets.deanVideo,
    highlights: [
      'Welcome to the College of Science and Engineering (CSE) at Hamad Bin Khalifa University (HBKU). Our aim is to be a world-class multidisciplinary college with significant positive impact on Qatar, the region, and globally in science, engineering, and technology. This is being accomplished by advancing knowledge, technology transfer, and nurturing technically grounded leaders and innovators to serve societal needs with a focus on an integrated multi-disciplinary curriculum and multi-disciplinary research in science, engineering, and technology. The motto of our college is that we “strive for excellence” in any thing we do in a networked society and a rapidly changing world. Within a short period of time, we were able to build excellent educational and research programs, recruit world-class faculty, attract some of the best students to our college, and establish strong collaborations with world-class universities and research institutes, and a plethora of government and industrial entities.',
      'Whether you are a student aspiring to advance your career as well as the world we live in, or a faculty seeking to conduct ground-breaking research, or a government entity or an industrial company seeking mutually beneficial collaboration, there is no better place to start than the College of Science and Engineering at HBKU. I invite you to join us on this exciting and rewarding journey as we shape a better tomorrow for Qatar and the rest of the world together.'
    ],
  },
};
