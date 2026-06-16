import { useState } from 'react';
import { ProgramDetail } from '../data/divisionDetails';

type ProgramDetailPageProps = {
  divisionName: string;
  program: ProgramDetail;
  onBackToDivision: () => void;
  onBackToPrograms: () => void;
};

const programDetailTabs = [
  'Overview',
  'Curriculum',
  'Outcomes',
  'Admissions',
  'Funding',
  'Accreditation',
] as const;

type ProgramDetailTab = (typeof programDetailTabs)[number];

export function ProgramDetailPage({
  divisionName,
  program,
  onBackToDivision,
  onBackToPrograms,
}: ProgramDetailPageProps) {
  const [selectedTab, setSelectedTab] = useState<ProgramDetailTab>('Overview');

  return (
    <article className="program-detail-page">
      <section className="section division-program-detail-section">
        <div className="container">
          <div className="program-detail-hero">
            <div>
              <p className="eyebrow">Program details</p>
              <h1>{program.degreeTitle}</h1>
              <p>{program.tagline}</p>
              <div className="program-detail-actions">
                <button type="button" className="section-action" onClick={onBackToDivision}>
                  Back to Division
                </button>
                <button type="button" className="section-action" onClick={onBackToPrograms}>
                  View All Programs
                </button>
              </div>
            </div>
            <div className="program-fact-grid" aria-label={`${program.name} key facts`}>
              <div>
                <span>Division</span>
                <strong>{divisionName}</strong>
              </div>
              <div>
                <span>Level</span>
                <strong>{program.level}</strong>
              </div>
              <div>
                <span>Duration</span>
                <strong>{program.duration}</strong>
              </div>
              <div>
                <span>Credits</span>
                <strong>{program.credits}</strong>
              </div>
              <div>
                <span>Study mode</span>
                <strong>{program.studyMode}</strong>
              </div>
              <div>
                <span>Start term</span>
                <strong>{program.startTerms}</strong>
              </div>
            </div>
          </div>

          <div className="program-detail-tabs" aria-label={`${program.name} detail sections`}>
            {programDetailTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={tab === selectedTab ? 'active' : ''}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="program-detail-panel">
            {selectedTab === 'Overview' && (
              <div className="program-detail-grid">
                <div>
                  <h2>Program Overview</h2>
                  {program.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="program-detail-card">
                  <h3>Program Mission</h3>
                  <ul>
                    {program.mission.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'Curriculum' && (
              <div className="program-detail-grid">
                <div>
                <h2>Program Structure</h2>
                {program.structure.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <h3>Academic Requirements</h3>
                {program.requirements.academic.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <h3>Learning Pathways</h3>
                <div className="program-pathways">
                    {program.pathways.map((pathway) => (
                      <article key={pathway.title}>
                        <h4>{pathway.title}</h4>
                        <p>{pathway.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="program-detail-card">
                  <h3>Curriculum Overview</h3>
                  <p>{program.curriculum.intro}</p>
                  <ul>
                    {program.curriculum.categories.map((category) => (
                      <li key={category.title}>
                        <strong>{category.title}</strong>
                        {category.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'Outcomes' && (
              <div className="program-detail-grid">
                <div>
                  <h2>Program Educational Objectives</h2>
                  <ol>
                    {program.educationalObjectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ol>
                </div>
                <div className="program-detail-card">
                  <h3>Student Outcomes</h3>
                  <ol>
                    {program.studentOutcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {selectedTab === 'Admissions' && (
              <div className="program-detail-grid">
                <div>
                  <h3>Admission Requirements</h3>
                  <p>
                    <strong>Required Field of Study: </strong>
                    {program.requirements.admission.requiredFieldOfStudy}
                  </p>
                  <p>
                    <strong>Minimum GPA: </strong>
                    {program.requirements.admission.minimumGpa}
                  </p>
                  <h3>English Language Requirements</h3>
                  {program.requirements.english.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <h3>Standardized Tests</h3>
                  <p>{program.requirements.standardizedTests}</p>
                </div>
                <div className="program-detail-card">
                  <h3>Required Documents</h3>
                  <ul>
                    {program.requirements.documents.map((document) => (
                      <li key={document}>{document}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'Funding' && (
              <div className="program-detail-grid">
                <div>
                  <h2>Student Funding</h2>
                  <ul>
                    {program.funding.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="program-detail-card">
                  <h3>Program Coordinator</h3>
                  <p>
                    {program.coordinator.name}
                    <br />
                    <a href={`mailto:${program.coordinator.email}`}>{program.coordinator.email}</a>
                  </p>
                  {program.links && (
                    <>
                      <h3>Program Links</h3>
                      <div className="program-links">
                        {program.links.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {selectedTab === 'Accreditation' && (
              <div className="program-detail-grid">
                <div>
                  <h2>Accreditation and Quality</h2>
                  <p>
                    The program is supported by HBKU’s institutional quality assurance processes
                    and operates within a research-intensive academic environment under Qatar
                    Foundation.
                  </p>
                </div>
                <div className="program-detail-card">
                  {program.accreditation.map((item) => (
                    <article key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
