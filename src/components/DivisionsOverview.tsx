import { CSSProperties } from 'react';
import { programDivisions } from '../data/siteData';
import { SectionHeader } from './SectionHeader';

type DivisionsOverviewProps = {
  onExplorePrograms: (divisionId?: string) => void;
  onOpenDivision: (divisionId: string) => void;
};

export function DivisionsOverview({ onExplorePrograms, onOpenDivision }: DivisionsOverviewProps) {
  return (
    <section className="section section-warm">
      <div className="container">
        <SectionHeader
          eyebrow="College structure"
          title="CSE is Home to Four Academic Divisions"
        />
        <div className="division-intro">
          <p>
            The College of Science and Engineering is structured around focused divisions that
            support undergraduate and graduate education, applied research, and interdisciplinary
            collaboration across engineering, computing, sustainability, and science.
          </p>
          <button type="button" className="section-action" onClick={() => onExplorePrograms()}>
            Explore Programs
          </button>
        </div>
        <div className="division-overview-grid">
          {programDivisions.map((division) => {
            const undergraduateCount = division.programs.filter(
              (program) => program.level === 'Undergraduate',
            ).length;
            const graduateCount = division.programs.filter(
              (program) => program.level === 'Graduate',
            ).length;

            return (
              <button
                type="button"
                className="division-overview-card"
                style={
                  division.heroImage
                    ? ({ '--division-card-image': `url("${division.heroImage}")` } as CSSProperties)
                    : undefined
                }
                key={division.id}
                onClick={() => onOpenDivision(division.id)}
                aria-label={`Open Division of ${division.name}`}
              >
                <p className="eyebrow">Division of</p>
                <h3>{division.name}</h3>
                <p>{division.summary}</p>
                {division.programs.length > 0 ? (
                  <dl>
                    <div>
                      <dt>Undergraduate</dt>
                      <dd>{undergraduateCount}</dd>
                    </div>
                    <div>
                      <dt>Graduate</dt>
                      <dd>{graduateCount}</dd>
                    </div>
                  </dl>
                ) : (
                  <span className="service-badge">Service Division</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
