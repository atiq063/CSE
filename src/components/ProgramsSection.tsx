import { useEffect, useState } from 'react';
import { Program, programDivisions } from '../data/siteData';
import { ProgramGroups } from './ProgramGroups';
import { SectionHeader } from './SectionHeader';

type ProgramsSectionProps = {
  onOpenProgram: (program: Program) => void;
  selectedDivisionId?: string;
};

export function ProgramsSection({
  onOpenProgram,
  selectedDivisionId: requestedDivisionId,
}: ProgramsSectionProps) {
  const [selectedDivisionId, setSelectedDivisionId] = useState(
    requestedDivisionId ?? programDivisions[0].id,
  );
  const selectedDivision =
    programDivisions.find((division) => division.id === selectedDivisionId) ?? programDivisions[0];

  useEffect(() => {
    if (requestedDivisionId) {
      setSelectedDivisionId(requestedDivisionId);
    }
  }, [requestedDivisionId]);

  return (
    <section id="programs" className="section section-warm">
      <div className="container">
        <SectionHeader
          eyebrow="Explore by division"
          title="Programs"
          action="View All Programs"
        />
        <div className="division-tabs" aria-label="College divisions">
          {programDivisions.map((division) => (
            <button
              key={division.id}
              type="button"
              className={division.id === selectedDivision.id ? 'active' : ''}
              onClick={() => setSelectedDivisionId(division.id)}
            >
              <span>Division of</span>
              {division.name}
            </button>
          ))}
        </div>
        <div className="division-panel">
          <div className="division-panel-header">
            <div>
              <p className="eyebrow">Division</p>
              <h3>{selectedDivision.name}</h3>
            </div>
            <p>{selectedDivision.summary}</p>
          </div>

          <ProgramGroups
            programs={selectedDivision.programs}
            emptyText={selectedDivision.summary}
            onLearnMore={onOpenProgram}
          />
        </div>
      </div>
    </section>
  );
}
