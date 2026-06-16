import { CSSProperties, useEffect, useState } from 'react';
import { divisionDetails } from '../data/divisionDetails';
import { Program, ProgramDivision } from '../data/siteData';
import { ProgramGroups } from './ProgramGroups';

type DivisionPageProps = {
  division: ProgramDivision;
  onBackToDivisions: () => void;
  onOpenProgram: (program: Program) => void;
  onViewAllPrograms: () => void;
};

type DivisionResearchProps = {
  research: NonNullable<(typeof divisionDetails)[string]['research']>;
};

type DivisionFacultyProps = {
  faculty: NonNullable<(typeof divisionDetails)[string]['faculty']>;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function DivisionResearchAreas({ research }: DivisionResearchProps) {
  const [selectedAreaId, setSelectedAreaId] = useState(research.areas[0]?.id);
  const selectedArea =
    research.areas.find((area) => area.id === selectedAreaId) ?? research.areas[0];

  useEffect(() => {
    setSelectedAreaId(research.areas[0]?.id);
  }, [research]);

  if (!selectedArea) {
    return null;
  }

  return (
    <section className="section division-research">
      <div className="container">
        <div className="division-research-header">
          <div>
            <p className="eyebrow">Research</p>
            <h2>Research Areas</h2>
          </div>
          <p>{research.intro}</p>
        </div>

        <div className="division-research-layout">
          <div className="division-research-tabs" aria-label="Division research areas">
            {research.areas.map((area) => (
              <button
                key={area.id}
                type="button"
                className={area.id === selectedArea.id ? 'active' : ''}
                onClick={() => setSelectedAreaId(area.id)}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="division-research-panel">
            <p className="eyebrow">Focused area</p>
            <h3>{selectedArea.title}</h3>
            <ul>
              {selectedArea.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DivisionFaculty({ faculty }: DivisionFacultyProps) {
  return (
    <section className="section division-faculty">
      <div className="container">
        <div className="division-faculty-header">
          <div>
            <p className="eyebrow">Faculty</p>
            <h2>Faculty Profiles</h2>
          </div>
          <p>{faculty.intro}</p>
        </div>

        <div className="division-faculty-grid">
          {faculty.members.map((member) => (
            <article className="division-faculty-card" key={member.email}>
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="faculty-initials" aria-hidden="true">
                  {getInitials(member.name)}
                </div>
              )}
              <div>
                <p>{member.title}</p>
                <h3>{member.name}</h3>
                <a href={`mailto:${member.email}`}>{member.email}</a>
                {member.profileUrl && (
                  <a className="faculty-profile-link" href={member.profileUrl} target="_blank" rel="noreferrer">
                    View profile
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DivisionPage({
  division,
  onBackToDivisions,
  onOpenProgram,
  onViewAllPrograms,
}: DivisionPageProps) {
  const detail = divisionDetails[division.id];
  const heroStyle = division.heroImage
    ? ({ '--division-hero-image': `url("${division.heroImage}")` } as CSSProperties)
    : undefined;

  return (
    <article className="division-page">
      <section className="division-hero" style={heroStyle}>
        <div className="container division-hero-layout">
          <div>
            <p className="eyebrow">Division of</p>
            <h1>{division.name}</h1>
            <p>{division.summary}</p>
          </div>
          <div className="division-hero-panel">
            <span>{division.programs.length}</span>
            <p>{division.programs.length === 1 ? 'Program' : 'Programs'}</p>
          </div>
        </div>
      </section>

      <section className="section division-page-intro">
        <div className="container division-page-intro-layout">
          <div>
            <h2>About the Division</h2>
            {detail ? (
              <>
                <div className="division-intro-copy">
                  {detail.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="division-focus-list" aria-label={`${division.name} focus areas`}>
                  {detail.focusAreas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </>
            ) : (
              <p>
                This page is prepared for a detailed introduction to the Division of {division.name}.
                We will add the division’s full academic profile, research focus, people, and related
                details in the next steps.
              </p>
            )}
          </div>
          <div className="division-actions">
            <button type="button" className="section-action" onClick={onBackToDivisions}>
              Back to Divisions
            </button>
            <button type="button" className="section-action" onClick={onViewAllPrograms}>
              View Programs
            </button>
          </div>
        </div>
      </section>

      {detail?.studentsAndAlumni && (
        <section className="section division-students">
          <div className="container division-students-layout">
            <div>
              <p className="eyebrow">Students and alumni</p>
              <h2>{detail.studentsAndAlumni.title}</h2>
              <div className="division-intro-copy">
                {detail.studentsAndAlumni.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="division-careers-card">
              <h3>Graduate pathways</h3>
              <ul>
                {detail.studentsAndAlumni.careerPaths.map((careerPath) => (
                  <li key={careerPath}>{careerPath}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {detail?.research && <DivisionResearchAreas research={detail.research} />}

      {detail?.faculty && <DivisionFaculty faculty={detail.faculty} />}

      <section className="section section-warm division-page-programs">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Programs</p>
              <h2>{division.name}</h2>
            </div>
          </div>
          <ProgramGroups
            programs={division.programs}
            emptyText={division.summary}
            onLearnMore={onOpenProgram}
          />
        </div>
      </section>
    </article>
  );
}
