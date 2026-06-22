import { useEffect, useState, type CSSProperties, type ReactElement } from 'react';
import {
  Atom,
  Award,
  ChartSpline,
  Cpu,
  Factory,
  FileText,
  GraduationCap,
  Leaf,
  Trophy,
  UsersRound,
} from 'lucide-react';
import { aboutPage } from '../data/aboutData';
import { SectionHeader } from './SectionHeader';

type FactIconName =
  | 'faculty'
  | 'students'
  | 'publications'
  | 'quality'
  | 'impact'
  | 'ranking';

type FactIconProps = {
  name: FactIconName;
};

type ResearchPillarIconName = 'cpu' | 'factory' | 'leaf' | 'atom';

type ResearchPillarIconProps = {
  name: ResearchPillarIconName;
};

function FactIcon({ name }: FactIconProps) {
  const icons: Record<FactIconName, ReactElement> = {
    faculty: <UsersRound size={28} strokeWidth={1.55} />,
    students: <GraduationCap size={28} strokeWidth={1.55} />,
    publications: <FileText size={28} strokeWidth={1.55} />,
    quality: <Award size={28} strokeWidth={1.55} />,
    impact: <ChartSpline size={28} strokeWidth={1.55} />,
    ranking: <Trophy size={28} strokeWidth={1.55} />,
  };

  return (
    <span className="fact-icon" aria-hidden="true">
      {icons[name]}
    </span>
  );
}

function ResearchPillarIcon({ name }: ResearchPillarIconProps) {
  const icons: Record<ResearchPillarIconName, ReactElement> = {
    cpu: <Cpu size={30} strokeWidth={1.6} />,
    factory: <Factory size={30} strokeWidth={1.6} />,
    leaf: <Leaf size={30} strokeWidth={1.6} />,
    atom: <Atom size={30} strokeWidth={1.6} />,
  };

  return (
    <span className="research-pillar-icon" aria-hidden="true">
      {icons[name]}
    </span>
  );
}

export function AboutPage() {
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);
  const heroImages = aboutPage.hero.images ?? [aboutPage.hero.image];

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <article className="about-page">
      <section className="inner-hero about-rotating-hero">
        <div className="hero-image-rotator" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              className={`hero-rotator-image ${index === activeHeroImageIndex ? 'active' : ''}`}
              key={image}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
        <div className="inner-hero-overlay">
          <div className="container">
            <p className="eyebrow">College of Science and Engineering</p>
            <h1>{aboutPage.hero.title}</h1>
          </div>
        </div>
      </section>

      <section className="section about-intro-section">
        <div className="container about-intro">
          <p>{aboutPage.intro}</p>
        </div>
      </section>

      <section
        className="about-facts"
        style={{ '--facts-bg': `url("${aboutPage.factsBackground}")` } as CSSProperties}
      >
        <div className="facts-skyline" aria-hidden="true" />
        <div className="premium-facts-ambient" aria-hidden="true" />
        <div className="container premium-facts-content">
          <div className="premium-facts-header">
            <p>FACTS &amp; FIGURES</p>
            <h2>CSE at a Glance</h2>
          </div>
          <div className="facts-grid premium-facts-grid">
            {aboutPage.facts.map((fact) => (
              <article className={`fact-card fact-card-${fact.icon}`} key={fact.label}>
                <FactIcon name={fact.icon as FactIconName} />
                <strong>{fact.value}</strong>
                <span className="fact-label">{fact.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section division-heads-section">
        <div className="container">
          <SectionHeader
            eyebrow="College structure"
            title="Division Heads"
          />
          <p className="division-heads-intro">
            CSE’s academic divisions are led by faculty who guide teaching, research, and
            interdisciplinary collaboration across the college’s core fields.
          </p>
          <div className="division-heads-grid">
            {aboutPage.divisionHeads.map((divisionHead) => (
              <article className="division-head-card" key={divisionHead.division}>
                <img src={divisionHead.image} alt={divisionHead.head} />
                <div>
                  <span>{divisionHead.tag}</span>
                  <h3>{divisionHead.head}</h3>
                  <p>Head, Division of {divisionHead.division}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section research-pillars-section">
        <div className="container">
          <SectionHeader title="Research Pillars" />
          <p className="research-pillars-intro">
            CSE research is organized around four connected pillars that bring together computing,
            engineering, sustainability, and foundational sciences.
          </p>
          <div className="research-pillars-grid" aria-label="CSE research pillars">
            {aboutPage.researchPillars.map((pillar) => (
              <article className="research-pillar-card" key={pillar.id} tabIndex={0}>
                <ResearchPillarIcon name={pillar.icon as ResearchPillarIconName} />
                <div>
                  <h3>{pillar.name}</h3>
                  <p className="research-pillar-tagline">{pillar.tagline}</p>
                  <p className="research-pillar-topics">{pillar.topics}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-dean">
        <div className="container">
          <SectionHeader title="Dean’s Message" />
          <div className="dean-profile">
            <figure className="dean-photo">
              <img
                src={aboutPage.dean.image}
                alt={aboutPage.dean.name}
                onError={(event) => {
                  event.currentTarget.src = aboutPage.dean.fallbackImage;
                }}
              />
              <figcaption>{aboutPage.dean.name}</figcaption>
            </figure>
            <p>{aboutPage.dean.opening}</p>
            <div className="dean-message-grid">
              <div className="dean-message-card">
                <h4>Academic programs</h4>
                <div className="dean-program-groups">
                  {aboutPage.dean.programGroups.map((group) => (
                    <div key={group.division}>
                      <h5>{group.division}</h5>
                      <ul>
                        {group.programs.map((program) => (
                          <li key={program}>{program}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {aboutPage.dean.afterPrograms.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="dean-message-grid dean-pillars-grid">
              <div className="dean-message-card">
                <h4>Research pillars</h4>
                <ul className="dean-pillars-list">
                  {aboutPage.dean.researchPillars.map((pillar) => (
                    <li key={pillar}>{pillar}</li>
                  ))}
                </ul>
              </div>
            </div>
            {aboutPage.dean.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="dean-signature">
              <strong>{aboutPage.dean.signature.name}</strong>
              <span>{aboutPage.dean.signature.title}</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
