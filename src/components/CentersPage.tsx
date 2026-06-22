import { ArrowUpRight, BrainCircuit, Cpu, Sparkles } from 'lucide-react';
import { centers } from '../data/centersData';

export function CentersPage() {
  return (
    <section className="centers-page">
      <div className="centers-hero">
        <div className="container centers-hero-layout">
          <div>
            <p className="eyebrow">Research centers</p>
            <h1>Centers at CSE</h1>
            <p>
              CSE hosts specialized centers that connect advanced research, industry
              collaboration, and societal impact across strategic areas for Qatar and the region.
            </p>
          </div>
          <div className="centers-hero-card" aria-label="CSE centers count">
            <span>{centers.length}</span>
            <p>CSE Centers</p>
          </div>
        </div>
      </div>

      <div className="section centers-section">
        <div className="container">
          <div className="centers-intro">
            <p className="eyebrow">Specialized excellence</p>
            <h2>Focused platforms for high-impact research</h2>
            <p>
              These centers expand the college’s work beyond degree programs, bringing faculty,
              researchers, students, and partners together around deep technical challenges.
            </p>
          </div>

          <div className="centers-grid">
            {centers.map((center) => {
              const CenterIcon = center.id === 'qc2' ? Cpu : BrainCircuit;

              return (
                <article className="center-card" key={center.id}>
                  <div className="center-card-top">
                    <div className="center-icon">
                      <CenterIcon size={28} strokeWidth={1.7} />
                    </div>
                    <span>{center.shortName}</span>
                  </div>
                  <p className="eyebrow">CSE Center</p>
                  <h3>{center.name}</h3>
                  {center.focus && <p className="center-focus">{center.focus}</p>}
                  <p>{center.description}</p>

                  <div className="center-themes" aria-label={`${center.shortName} research themes`}>
                    {center.themes.map((theme) => (
                      <span key={theme}>{theme}</span>
                    ))}
                  </div>

                  <ul className="center-highlights">
                    {center.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Sparkles size={16} strokeWidth={1.8} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a className="center-link" href={center.officialUrl} target="_blank" rel="noreferrer">
                    Visit official center page
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
