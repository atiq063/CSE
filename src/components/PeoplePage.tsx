import { CSSProperties } from 'react';
import { divisionDetails } from '../data/divisionDetails';
import { programDivisions } from '../data/siteData';

type PeoplePageProps = {
  selectedDivisionId?: string;
  onSelectDivision: (divisionId: string) => void;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export function PeoplePage({ selectedDivisionId, onSelectDivision }: PeoplePageProps) {
  const selectedDivision =
    programDivisions.find((division) => division.id === selectedDivisionId) ?? programDivisions[0];
  const faculty = divisionDetails[selectedDivision.id]?.faculty;
  const heroStyle = selectedDivision.heroImage
    ? ({ backgroundImage: `url("${selectedDivision.heroImage}")` } as CSSProperties)
    : undefined;

  return (
    <article className="people-page">
      <section className="inner-hero people-hero" style={heroStyle}>
        <div className="inner-hero-overlay">
          <div className="container">
            <p className="eyebrow">People</p>
            <h1>Faculty Profiles</h1>
          </div>
        </div>
      </section>

      <section className="section division-faculty people-faculty-section">
        <div className="container">
          <div className="division-tabs people-tabs" aria-label="Faculty profiles by division">
            {programDivisions.map((division) => (
              <button
                key={division.id}
                type="button"
                className={division.id === selectedDivision.id ? 'active' : ''}
                onClick={() => onSelectDivision(division.id)}
              >
                <span>Division</span>
                {division.name}
              </button>
            ))}
          </div>

          <div className="division-faculty-header">
            <div>
              <p className="eyebrow">Faculty</p>
              <h2>{selectedDivision.name}</h2>
            </div>
            <p>
              {faculty?.intro ??
                `Faculty profiles for the Division of ${selectedDivision.name} will be added here as the division page is expanded.`}
            </p>
          </div>

          {faculty ? (
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
                      <a
                        className="faculty-profile-link"
                        href={member.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View profile
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="people-empty-state">
              <p>Faculty profiles for this division are being prepared.</p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
