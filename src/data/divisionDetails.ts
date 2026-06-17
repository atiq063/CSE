import aliGhrayebImage from '../assets/hbku/faculty/ali-ghrayeb.jpg';
import aliSafaImage from '../assets/hbku/faculty/ali-safa.png';
import amineBermakImage from '../assets/hbku/faculty/amine-bermak.jpg';
import boWangImage from '../assets/hbku/faculty/bo-wang.jpg';
import denaAlThaniImage from '../assets/hbku/faculty/dena-al-thani.jpg';
import gabrieleOligeriImage from '../assets/hbku/faculty/gabriele-oligeri.jpg';
import haithamAbuRubImage from '../assets/hbku/faculty/haitham-abu-rub.jpeg';
import hasanKurbanImage from '../assets/hbku/faculty/hasan-kurban.jpg';
import hazemNounouImage from '../assets/hbku/faculty/hazem-nounou.jpg';
import husseinAlnuweiriImage from '../assets/hbku/faculty/hussein-alnuweiri.jpg';
import jensSchneiderImage from '../assets/hbku/faculty/jens-schneider.jpg';
import khalidQaraqeImage from '../assets/hbku/faculty/khalid-qaraqe.jpg';
import marcoAgusImage from '../assets/hbku/faculty/marco-agus.jpg';
import marwaQaraqeImage from '../assets/hbku/faculty/marwa-qaraqe.jpg';
import mohamedAbdallahImage from '../assets/hbku/faculty/mohamed-abdallah.jpg';
import mowafaHousehImage from '../assets/hbku/faculty/mowafa-househ.jpg';
import muhammadZilanyImage from '../assets/hbku/faculty/muhammad-zilany.jpg';
import othmaneBouhaliImage from '../assets/hbku/faculty/othmane-bouhali.jpg';
import raianAliImage from '../assets/hbku/faculty/raian-ali.jpg';
import saifAlKuwariImage from '../assets/hbku/faculty/saif-al-kuwari.jpg';
import samirBelhaouariImage from '../assets/hbku/faculty/samir-belhaouari.png';
import selmaAwadallahImage from '../assets/hbku/faculty/selma-awadallah.png';
import tanvirAlamImage from '../assets/hbku/faculty/tanvir-alam.jpg';
import yinYangImage from '../assets/hbku/faculty/yin-yang.jpg';

export type ProgramDetail = {
  id: string;
  name: string;
  degreeTitle: string;
  level: string;
  duration: string;
  credits: string;
  studyMode: string;
  startTerms: string;
  tagline: string;
  overview: string[];
  mission: string[];
  structure: string[];
  curriculum: {
    intro: string;
    categories: {
      title: string;
      description: string;
    }[];
  };
  pathways: {
    title: string;
    description: string;
  }[];
  educationalObjectives: string[];
  studentOutcomes: string[];
  requirements: {
    admission: {
      requiredFieldOfStudy: string;
      minimumGpa: string;
    };
    academic: string[];
    english: string[];
    standardizedTests: string;
    documents: string[];
  };
  funding: string[];
  accreditation: {
    title: string;
    description: string;
  }[];
  coordinator: {
    name: string;
    email: string;
  };
  links?: {
    label: string;
    url: string;
  }[];
};

export type DivisionDetail = {
  intro: string[];
  focusAreas: string[];
  studentsAndAlumni?: {
    title: string;
    intro: string[];
    careerPaths: string[];
  };
  research?: {
    intro: string;
    areas: {
      id: string;
      title: string;
      topics: string[];
    }[];
  };
  faculty?: {
    intro: string;
    members: {
      name: string;
      email: string;
      title: string;
      image?: string;
      profileUrl?: string;
    }[];
  };
  programDetails?: ProgramDetail[];
};

export const divisionDetails: Record<string, DivisionDetail> = {
  cee: {
    intro: [
      'The Division of Computing and Electrical Engineering prepares students for fields where intelligent software, connected systems, secure infrastructure, data-driven decision-making, and advanced electrical technologies increasingly converge. Its undergraduate programs build foundations in computer engineering, artificial intelligence and data engineering, and electrical engineering, giving students multiple pathways into modern engineering practice.',
      'At the graduate level, the division extends this foundation through specialized programs in cybersecurity, data science and engineering, health management, health data analytics, and doctoral study in computer science and engineering. Together, these programs position the division as a hub for applied computing, digital transformation, intelligent systems, and technology-enabled health innovation.',
    ],
    focusAreas: [
      'Computer engineering',
      'Artificial intelligence and data engineering',
      'Electrical engineering',
      'Cybersecurity',
      'Data science and engineering',
      'Health management and analytics',
      'Computer science and engineering research',
    ],
    studentsAndAlumni: {
      title: 'Preparing innovative engineers, researchers, and technology leaders',
      intro: [
        'The CEE division’s programs attract ambitious, innovative, and high-calibre students across undergraduate and graduate levels. Applicants to the Bachelor of Science in Computer Engineering and Bachelor of Science in Electrical Engineering are expected to demonstrate a strong academic record in mathematics and the sciences, together with a genuine interest in engineering, problem-solving, and technological innovation.',
        'Master’s applicants typically hold a solid background in computer science, computer engineering, electrical engineering, or information systems for admission to the Master of Science in Data Science and Engineering, the Master of Science in Cybersecurity, the Master of Science in Integrated Circuits and Intelligent Systems Design, and the Master of Data Analytics in Health Management. A background in health-related fields, with healthcare sector experience preferred, is expected for applicants to the Master of Information Systems in Health Management. PhD applicants are expected to demonstrate strong academic and research experience, together with clear evidence of the qualities needed to become successful researchers, industry professionals, and innovators.',
      ],
      careerPaths: [
        'Academic and research careers at leading universities and research institutes',
        'Engineering roles in telecommunications, semiconductors, integrated circuit and chip design, power and energy, and embedded systems',
        'Technical careers in AI, data analytics, cybersecurity, software engineering, and health informatics',
        'Entrepreneurship and leadership in technology start-ups',
        'Public sector and policy roles in ministries, regulatory bodies, and international organisations',
      ],
    },
    research: {
      intro:
        'Faculty members in CSE’s Division of Computing and Electrical Engineering lead innovative research that addresses pressing local and global challenges and delivers large-scale research projects with significant international impact.',
      areas: [
        {
          id: 'ai-data-intelligent-systems',
          title: 'Artificial Intelligence, Data Science & Intelligent Systems',
          topics: [
            'Artificial Intelligence (AI)',
            'Machine Learning & Deep Learning',
            'Explainable AI',
            'Computer Vision & Pattern Recognition',
            'Natural Language Processing',
            'Data Science',
            'Big Data Analytics',
            'Predictive Analytics',
            'Intelligent Decision Support Systems',
            'AI for Scientific Discovery',
            'Neuromorphic Computing & Spiking Neural Networks',
          ],
        },
        {
          id: 'computing-systems-software-emerging-computing',
          title: 'Hardware Technologies, Computing Systems, & Emerging Computing',
          topics: [
            
            'Integrated circuit design and VLSI systems',
            'Mixed-signal IC design and data converters',
            'CMOS image sensors and smart sensors',
            'Wearable and printed electronics',
            'Edge intelligence and AI circuits and systems',
            'Software Engineering',
            'Software Systems & Applications',
            'Cloud Computing',
            'Distributed Computing',
            'High-Performance Computing (HPC)',
            'Specialized Computing Architectures',
            'Edge Computing',
            'Energy-efficient sensor interfaces and instrumentation amplifiers',
            'System-on-chip, integrated DC-DC converters, and RF power amplifiers',
            'Circuits for energy harvesting; environmental and biomedical sensing',
          ],
        },
        {
          id: 'communications-networks-cybersecurity',
          title: 'Communications, Networks & Cybersecurity',
          topics: [
            'Computer Networks',
            'Internet Technologies',
            'Internet of Things (IoT)',
            'Sensor Networks',
            'Wireless Communications',
            '5G/6G and Beyond',
            'Mobile Computing',
            'Cybersecurity',
            'Data Privacy',
            'Applied Cryptography',
            'Computational Forensics',
            'Blockchain Technologies',
            'Cyber-Physical Systems',
            'Adversarial Learning for Security',
          ],
        },
        {
          id: 'robotics-autonomous-systems-smart-technologies',
          title: 'Robotics, Autonomous Systems & Smart Technologies',
          topics: [
            'Robotics',
            'Autonomous Systems',
            'Intelligent Agents',
            'Human-Robot Interaction',
            'Smart Cities',
            'Intelligent Transportation Systems',
            'Digital Twins',
            'Industrial Automation',
            'UAVs and Drones',
            'Intelligent Sensing Systems',
          ],
        },
        {
          id: 'biomedical-health-life-sciences-computing',
          title: 'Biomedical, Health & Life Sciences Computing',
          topics: [
            'Health Informatics',
            'Digital Health',
            'Biomedical Informatics',
            'Computational Bioinformatics',
            'Public, population, and consumer health informatics',
            'Health informatics with machine and deep learning',
            'Designing for eHealth',
            'Mobile health and social computing',
            'Biomedical Imaging',
            'Transcription regulation and long non-coding RNA',
          ],
        },
        {
          id: 'signal-processing-sensing-applied-mathematics',
          title: 'Signal Processing, Sensing & Applied Mathematics',
          topics: [
            'Signal Processing',
            'Image Processing',
            'Radar Imaging',
            'Multimedia Processing',
            'Sensing Technologies',
            'Sensor Fusion',
            'Pattern Analysis',
            'Applied Mathematics',
            'Computational Modeling',
            'Optimization & Operations Research',
            'Scientific Computing',
          ],
        },
        {
          id: 'quantum-computing-emerging-technologies',
          title: 'Quantum Computing and Emerging Technologies',
          topics: [
            'Quantum Computing',
            'Distributed Quantum Systems',
            'Other future and emerging computing paradigms',
          ],
        },
        {
          id: 'power-energy-control-systems',
          title: 'Power, Energy, and Control Systems',
          topics: [
            'Power electronics converters',
            'Renewable energy and grid-connected systems',
            'Smart grids and grid renewable integration',
            'Electric drives and electric vehicles',
            'Transformer condition scoring and lifetime management',
            'Power system reliability, resilience, and data analytics',
            'Intelligent and adaptive control; control of time-delay systems',
            'System identification and estimation',
          ],
        },
        {
          id: 'acoustics-wave-physics',
          title: 'Acoustics and Wave Physics',
          topics: [
            'Acoustic waves and ultrasonics',
            'Phononic and photonic crystals',
            'Acoustic metamaterials',
          ],
        },
        {
          id: 'visualization-graphics-visual-computing',
          title: 'Visualization, Graphics, and Visual Computing',
          topics: [
            'Scientific and data visualization and analytics',
            'Interactive GPU-based and large-scale visualization',
            'GPU-friendly data compression and level-of-detail algorithms',
            'Computer graphics and interactive virtual reality',
            'Visual computing, haptics, and rendering for surgical simulation',
            'Light field displays and digital heritage models',
          ],
        },
        {
          id: 'human-computer-interaction-inclusive-design',
          title: 'Human-Computer Interaction and Inclusive Design',
          topics: [
            'Human-computer interaction',
            'Inclusive design, accessibility, and assistive technology',
            'AI-enabled personalized learning and intervention for children with autism',
            'Technology and human behaviour; digital addiction and digital wellbeing',
            'Persuasive technology and gamification',
          ],
        },
      ],
    },
    faculty: {
      intro:
        'The Division of Computing and Electrical Engineering brings together faculty expertise across computing, electrical engineering, cybersecurity, AI, data science, health informatics, circuits, sensing, power systems, and emerging technologies.',
      members: [
        {
          name: 'Ali Ghrayeb',
          email: 'aghrayeb@hbku.edu.qa',
          title: 'Professor',
          image: aliGhrayebImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/ali-ghrayeb',
        },
        {
          name: 'Ali Safa',
          email: 'asafa@hbku.edu.qa',
          title: 'Assistant Professor',
          image: aliSafaImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/ali-safa',
        },
        {
          name: 'Amine Bermak',
          email: 'abermak@hbku.edu.qa',
          title: 'Professor',
          image: amineBermakImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/amine-bermak',
        },
        {
          name: 'Bo Wang',
          email: 'bwang@hbku.edu.qa',
          title: 'Associate Professor',
          image: boWangImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/bo-wang',
        },
        {
          name: 'Dena Ahmed Al Thani',
          email: 'dalthani@hbku.edu.qa',
          title: 'Associate Professor',
          image: denaAlThaniImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/dena-al-thani',
        },
        {
          name: 'Abdelkrim Khelif',
          email: 'abkhelif@hbku.edu.qa',
          title: 'Professor',
        },
        {
          name: 'Gabriele Oligeri',
          email: 'goligeri@hbku.edu.qa',
          title: 'Associate Professor',
          image: gabrieleOligeriImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/gabriele-oligeri',
        },
        {
          name: 'Haitham Abu-Rub',
          email: 'haburub@hbku.edu.qa',
          title: 'Professor',
          image: haithamAbuRubImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/haitham-abu-rub',
        },
        {
          name: 'Hasan Kurban',
          email: 'hkurban@hbku.edu.qa',
          title: 'Assistant Professor',
          image: hasanKurbanImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/hasan-kurban',
        },
        {
          name: 'Hazem Numan Nounou',
          email: 'hnounou@hbku.edu.qa',
          title: 'Professor',
          image: hazemNounouImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/hazem-nounou',
        },
        {
          name: 'Hussein Alnuweiri',
          email: 'halnuweiri@hbku.edu.qa',
          title: 'Professor',
          image: husseinAlnuweiriImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/hussein-alnuweiri',
        },
        {
          name: 'Jens Schneider',
          email: 'jeschneider@hbku.edu.qa',
          title: 'Associate Professor',
          image: jensSchneiderImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/jens-schneider',
        },
        {
          name: 'Khalid Qaraqe',
          email: 'kqaraqe@hbku.edu.qa',
          title: 'Professor',
          image: khalidQaraqeImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/khalid-qaraqe',
        },
        {
          name: 'Marco Agus',
          email: 'magus@hbku.edu.qa',
          title: 'Associate Professor',
          image: marcoAgusImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/marco-agus',
        },
        {
          name: 'Marwa Khalid Qaraqe',
          email: 'mqaraqe@hbku.edu.qa',
          title: 'Associate Professor',
          image: marwaQaraqeImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/marwa-qaraqe',
        },
        {
          name: 'Mohamed Mahmoud Abdallah',
          email: 'moabdallah@hbku.edu.qa',
          title: 'Professor',
          image: mohamedAbdallahImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/mohamed-abdallah',
        },
        {
          name: 'Mohammed A. El-Tanani',
          email: 'meltanani@hbku.edu.qa',
          title: 'Assistant Professor',
        },
        {
          name: 'Mowafa Househ',
          email: 'mhouseh@hbku.edu.qa',
          title: 'Professor',
          image: mowafaHousehImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/mowafa-househ',
        },
        {
          name: 'Muhammad Shamsul Zilany',
          email: 'mzilany@hbku.edu.qa',
          title: 'Assistant Professor of Practice',
          image: muhammadZilanyImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/muhammad-shamsul-arefeen-zilany',
        },
        {
          name: 'Othmane Bouhali',
          email: 'obouhali@hbku.edu.qa',
          title: 'Professor',
          image: othmaneBouhaliImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/othmane-bouhali',
        },
        {
          name: 'Raian Ali',
          email: 'raali2@hbku.edu.qa',
          title: 'Professor',
          image: raianAliImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/raian-ali',
        },
        {
          name: 'Saif Mohammed S A Al-Kuwari',
          email: 'smalkuwari@hbku.edu.qa',
          title: 'Associate Professor',
          image: saifAlKuwariImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/saif-al-kuwari',
        },
        {
          name: 'Samir Brahim Belhaouari',
          email: 'sbelhaouari@hbku.edu.qa',
          title: 'Associate Professor',
          image: samirBelhaouariImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/samir-brahim-belhaouari',
        },
        {
          name: 'Selma Khalid Elhaj Awadallah',
          email: 'sawadallah@hbku.edu.qa',
          title: 'Assistant Professor',
          image: selmaAwadallahImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/selma-awadallah',
        },
        {
          name: 'Tanvir Alam',
          email: 'talam@hbku.edu.qa',
          title: 'Associate Professor',
          image: tanvirAlamImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/tanvir-alam',
        },
        {
          name: 'Yin Yang',
          email: 'yyang@hbku.edu.qa',
          title: 'Professor',
          image: yinYangImage,
          profileUrl: 'https://www.hbku.edu.qa/en/staff/david-yin-yang',
        },
      ],
    },
    programDetails: [
      {
        id: 'msc-data-science-engineering',
        name: 'Data Science and Engineering',
        degreeTitle: 'Master of Science in Data Science and Engineering',
        level: 'Master’s',
        duration: '2 years',
        credits: '33 credit hours',
        studyMode: 'Full-time',
        startTerms: 'Fall',
        tagline:
          'Preparing future data scientists to design scalable solutions and extract knowledge from complex real-world data systems.',
        overview: [
          'The Master of Science in Data Science and Engineering prepares students with a strong foundation in data engineering, big data science, and advanced data analytics across disciplines. The program integrates expertise from HBKU and its research institutes to address the full lifecycle of data, including collection, management, and scalable knowledge discovery.',
          'Students develop fundamental knowledge in applied statistics, machine learning, and modern technological tools, including cloud platforms for large-scale data analysis. The program emphasizes hands-on experience through real-world projects focused on big data storage, processing, and mining, enabling students to extract meaningful insights from complex datasets.',
          'Graduates complete either a research thesis or an industrial project, working on original contributions under the supervision of world-class faculty and in collaboration with leading research environments.',
        ],
        mission: [
          'Provide students with a strong foundation in data science, engineering, and analytics to address complex real-world challenges.',
          'Equip graduates with advanced knowledge and practical skills in big data technologies, machine learning, and scalable data-driven systems.',
          'Foster innovation, research excellence, and interdisciplinary collaboration through engagement with HBKU researchers, research institutes, and industry partners.',
          'Prepare graduates to design, develop, and deploy data-driven solutions that contribute to societal and economic impact in Qatar and globally.',
          'Support the development of ethical, responsible, and lifelong learners capable of advancing the state of the art in data science and engineering.',
        ],
        structure: [
          'The MSc in Data Science and Engineering is a 33-credit program delivered over approximately two years, with options for an accelerated pathway.',
          'The program provides a balanced combination of foundational knowledge, advanced specialization, and practical experience through core courses, electives, research seminars, and a thesis or industrial project.',
          'Students build a coherent foundation in applied statistics, applied data analytics, research methods, and advanced data management systems, then specialize through electives in machine learning, cloud computing, health informatics, bioinformatics, and emerging data science areas.',
        ],
        curriculum: {
          intro:
            'The curriculum is designed to shape data scientists and engineers who can drive innovation in a data-driven world through strong theory, modern technical tools, and applied project experience.',
          categories: [
            {
              title: 'Core Courses',
              description:
                '12 CH covering statistics, data analytics, research methods, and advanced data management systems.',
            },
            {
              title: 'Elective Courses',
              description:
                '12 CH across specialized topics such as machine learning, deep learning, cloud computing, bioinformatics, health informatics, and emerging data science areas.',
            },
            {
              title: 'Graduate Research Seminars',
              description:
                'Seminar series exposing students to current research trends, industry practices, and interdisciplinary topics.',
            },
            {
              title: 'Thesis or Industrial Project',
              description:
                '9 CH capstone experience through a research thesis or a practical industrial project combined with an elective.',
            },
            {
              title: 'Non-Course Requirements',
              description:
                'Thesis defense and research dissemination, including preparation of a high-quality publication.',
            },
          ],
        },
        pathways: [
          {
            title: 'Research Pathway',
            description:
              'Students complete a Master’s Thesis (ICT 695) and produce scientifically sound research, typically leading to a publication where possible.',
          },
          {
            title: 'Professional Pathway',
            description:
              'Students complete an Industrial Project (ICT 698) combined with an elective, focusing on real-world, applied data science problems.',
          },
        ],
        educationalObjectives: [
          'Apply advanced knowledge and skills in data science, machine learning, and data engineering to solve complex real-world problems across diverse domains.',
          'Design and implement scalable data-driven systems using modern tools and technologies for data collection, processing, and intelligent decision-making.',
          'Conduct impactful research and innovation through publications, applied projects, or the development of novel methodologies.',
          'Collaborate effectively in interdisciplinary and professional environments across academia, industry, and research institutes.',
          'Demonstrate ethical responsibility and lifelong learning while adapting to emerging technologies in a rapidly evolving data-driven world.',
        ],
        studentOutcomes: [
          'Apply advanced knowledge of mathematics, statistics, and computing to model, analyze, and solve complex data-driven problems.',
          'Design and develop scalable, efficient data-driven systems and solutions that meet specified requirements and real-world constraints.',
          'Conduct experiments, analyze and interpret data, and draw meaningful conclusions to support informed decision-making.',
          'Communicate effectively with technical and non-technical audiences through reports, presentations, and data visualizations.',
          'Function effectively in multidisciplinary teams in academic, industrial, and research environments.',
          'Apply ethical and professional principles while considering societal, environmental, and economic impacts of data science technologies.',
          'Recognize the need for continuous learning and adapt to emerging technologies in data science and engineering.',
        ],
        requirements: {
          admission: {
            requiredFieldOfStudy:
              'Computer science, information systems, engineering, mathematics and related fields.',
            minimumGpa: '3.00 on a scale of 4.',
          },
          academic: [
            'Students must complete 33 CH, including core courses, electives, and a capstone experience.',
            'The program requires 12 CH of core courses, 12 CH of electives, and successful completion of the Graduate Research Seminar (0 CH).',
            'Students complete either a 9 CH research thesis or an industrial project route consisting of a 6 CH project combined with an elective, followed by a thesis or project defense.',
            'Students are expected to produce a high-quality research output, such as a conference or journal publication, as part of graduation requirements.',
          ],
          english: [
            'Applicants whose first language is not English must demonstrate English proficiency through a valid standardized test score.',
            'The minimum required score is typically IELTS Academic 6.5 or TOEFL iBT 79 or above.',
            'Applicants may be exempt if they provide official documentation confirming that their undergraduate degree was completed at an institution where the language of instruction is English.',
          ],
          standardizedTests:
            'GRE or GMAT scores may be encouraged for some applicants to strengthen an application, but they are generally not mandatory for admission.',
          documents: [
            'Completed online application form',
            'Official academic transcripts from all previous institutions',
            'Bachelor’s degree certificate or equivalent qualification',
            'Curriculum vitae or resume',
            'Statement of purpose',
            'Two letters of recommendation',
            'Proof of English language proficiency, if applicable',
            'Valid passport or identification document',
          ],
        },
        funding: [
          'HBKU offers competitive funding opportunities for admitted students, including full or partial tuition waivers subject to availability and merit.',
          'Eligible students may receive monthly stipend support to assist with living expenses during their studies.',
          'Research and conference funding may be provided for research activities, publications, and participation in international conferences.',
          'Students are encouraged to apply for external awards such as the Qatar Graduate Sponsorship Research Award (GSRA), which may offer tuition and research funding.',
        ],
        accreditation: [
          {
            title: 'Institutional Accreditation',
            description:
              'HBKU is officially licensed and recognized by Qatar’s Ministry of Education and Higher Education, ensuring that degrees meet national standards and are internationally recognized.',
          },
          {
            title: 'Quality Assurance and Continuous Improvement',
            description:
              'The university maintains rigorous academic standards through internal quality assurance processes led by its Office of Institutional Effectiveness.',
          },
          {
            title: 'International Alignment',
            description:
              'HBKU operates within a global academic ecosystem under Qatar Foundation, with strong research collaborations and partnerships with leading international institutions.',
          },
        ],
        coordinator: {
          name: 'Dr. Samir Brahim Belhaouari',
          email: 'sbelhaouari@hbku.edu.qa',
        },
        links: [
          {
            label: 'Official program page',
            url: 'https://www.hbku.edu.qa/en/cse/ms-data-science-engineering',
          },
          {
            label: 'Study plan',
            url: 'https://drive.google.com/open?id=1rhXwngNa00yifVAglWkk4mR-AMD6Zw8b',
          },
        ],
      },
    ],
  },
  mie: {
    intro: [
      'The Division of Mechanical and Industrial Engineering provides a multidisciplinary academic environment that prepares students for leadership roles in mechanical engineering, technology, management, logistics, and innovation-driven sectors.',
      'The division connects mechanical engineering foundations with industrial systems, logistics, supply chain management, sport and entertainment management, and decision-focused engineering practice. Its academic and research activities emphasize technical depth, industry relevance, sustainability, digital transformation, and applied innovation.',
    ],
    focusAreas: [
      'Mechanical engineering',
      'Logistics and supply chain management',
      'Sport and entertainment management',
      'Smart and sustainable manufacturing',
      'Energy systems and thermo-fluids',
      'Operations research and optimization',
      'Data analytics and decision-making',
    ],
    studentsAndAlumni: {
      title: 'Preparing leaders in mechanical systems, logistics, operations, and innovation',
      intro: [
        'The Division of Mechanical and Industrial Engineering provides a multidisciplinary academic environment that prepares students for leadership roles in mechanical engineering, technology, management, logistics, and innovation-driven sectors. The division offers the BSc in Mechanical Engineering, MSc in Logistics and Supply Chain Management, PhD in Logistics and Supply Chain Management, and MSc in Sport and Entertainment Management.',
        'Mechanical engineering students gain strong technical foundations through core courses, laboratory training, design projects, internships, and industry-linked learning. Key areas include energy systems, thermo-fluids, mechanical design, smart manufacturing, robotics, automation, materials, biomedical engineering, human-augmented engineering, and digital twins.',
        'Industrial engineering graduate programs prepare students in logistics, supply chain management, operations, decision sciences, data analytics, optimization, sport and entertainment management, and venue and event operations.',
      ],
      careerPaths: [
        'Energy, manufacturing, and materials sectors',
        'Logistics, supply chain management, and infrastructure systems',
        'Sport and entertainment management, venue operations, and event management',
        'Government, research, academia, and entrepreneurship',
        'Technology transfer, sustainability, energy transition, and advanced manufacturing roles',
      ],
    },
    research: {
      intro:
        'Faculty in the Division of Mechanical and Industrial Engineering bring expertise across mechanical systems, industrial systems, energy, sustainability, manufacturing, materials, logistics, supply chain management, decision sciences, and applied data analytics.',
      areas: [
        {
          id: 'manufacturing-materials-mechanics',
          title: 'Manufacturing, Materials, and Mechanics',
          topics: [
            'Smart and sustainable manufacturing',
            'Mechanics, dynamics, and metamaterials',
            'Smart materials and structures',
            'Corrosion characterization',
          ],
        },
        {
          id: 'energy-fluids-sustainability',
          title: 'Energy, Fluids, and Sustainability',
          topics: [
            'Advanced flow assurance and energy systems',
            'Multiphase flow and thermo-fluid systems',
            'CO2 and hydrogen value chains',
            'Energy transition and sustainability-focused engineering innovation',
          ],
        },
        {
          id: 'logistics-optimization-decision-sciences',
          title: 'Logistics, Optimization, and Decision Sciences',
          topics: [
            'Logistics and supply chain management',
            'Operations research and system optimization',
            'Data analytics and decision-making',
            'Digital transformation and industry-focused innovation',
          ],
        },
        {
          id: 'facilities-impact',
          title: 'Facilities and Impact',
          topics: [
            'Materials testing, energy systems, and thermo-fluid facilities',
            'Mechanical measurements, controls, machining, and rapid manufacturing',
            'Non-traditional manufacturing and senior design project facilities',
            'Workforce development, infrastructure resilience, logistics excellence, and sport and entertainment sector development',
          ],
        },
      ],
    },
  },
  science: {
    intro: [
      'The Division of Science provides strong foundations in mathematics, physics, and chemistry through multidisciplinary education that combines theory, laboratory training, and practical scientific applications.',
      'The division plays a central role in supporting engineering programs across the College of Science and Engineering. Its courses and laboratories connect foundational science with applied engineering, research, and industry needs while developing analytical thinking, quantitative reasoning, and interdisciplinary problem-solving skills.',
    ],
    focusAreas: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Laboratory-based instruction',
      'Foundational science for engineering',
      'Applied sciences and research preparation',
    ],
    studentsAndAlumni: {
      title: 'Building scientific foundations for engineering, research, and applied sciences',
      intro: [
        'The Division of Science provides students with strong foundations in mathematics, physics, and chemistry through multidisciplinary education that combines theory, laboratory training, and practical scientific applications. The division prepares students for careers and advanced studies in engineering, applied sciences, research, and industry.',
        'The division supports engineering programs through a broad range of scientific courses. Mathematics offerings include precalculus, the calculus sequence, differential equations, linear algebra, and statistics. Physics courses cover Newtonian mechanics, electricity and magnetism, and experimental laboratory training. Chemistry offerings include general chemistry, organic chemistry, analytical chemistry, polymer chemistry, and associated laboratory courses.',
        'Faculty members actively mentor students through interdisciplinary projects and research-oriented activities, creating a learning environment that connects foundational science with practical applications in engineering and applied sciences.',
      ],
      careerPaths: [
        'Advanced study in engineering, applied sciences, mathematics, physics, and chemistry',
        'Research-oriented pathways in interdisciplinary science and engineering fields',
        'Industry roles requiring analytical thinking, quantitative reasoning, and laboratory skills',
        'Scientific and technical roles connected to materials, chemistry, physics, and applied analysis',
      ],
    },
    research: {
      intro:
        'Faculty members in the Division of Science conduct interdisciplinary research across mathematics, statistics, physics, chemistry, and materials science.',
      areas: [
        {
          id: 'mathematics-statistics',
          title: 'Mathematics and Statistics',
          topics: [
            'Applied mathematics',
            'Analysis',
            'Bayesian statistics',
            'Reliability',
            'Complex analysis',
            'Differential geometry',
            'Partial differential equations',
            'Mathematical physics',
            'Statistical mechanics',
          ],
        },
        {
          id: 'chemistry-materials-catalysis',
          title: 'Chemistry, Materials, and Catalysis',
          topics: [
            'Organic polymers',
            'Semiconductor materials',
            'Catalysis',
            'Electronic skin',
            'Metal-organic framework catalysis',
            'Nanomaterials catalysis',
            'Green chemistry',
            'Polymer chemistry',
            'Olefin metathesis polymerization',
          ],
        },
        {
          id: 'physics-computational-science',
          title: 'Physics and Computational Science',
          topics: [
            'Condensed matter physics',
            'Computational materials science',
            'Nonlinear optics',
            'Nonlinear dynamics',
            'Medical physics',
            'Experimental high energy physics',
          ],
        },
        {
          id: 'science-laboratories',
          title: 'Teaching and Research Laboratories',
          topics: [
            'General Chemistry I and II laboratories',
            'Organic Chemistry I and II laboratories',
            'Analytical Chemistry Laboratory',
            'Newtonian Mechanics Laboratory',
            'Electromagnetic Physics Laboratory',
            'Experimental Inquiry Laboratory',
            'Technical Instrumentation Laboratory',
            'Scientific Research and Analysis Laboratory',
          ],
        },
      ],
    },
  },
};
