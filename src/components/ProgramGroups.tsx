import { Program, ProgramLevel } from '../data/siteData';

const levelOrder: ProgramLevel[] = ['Undergraduate', 'Graduate'];

type ProgramGroupsProps = {
  programs: Program[];
  emptyTitle?: string;
  emptyText?: string;
  onLearnMore?: (program: Program) => void;
};

export function ProgramGroups({
  programs,
  emptyTitle = 'No Specific Degree Offered',
  emptyText,
  onLearnMore,
}: ProgramGroupsProps) {
  const groupedPrograms = levelOrder
    .map((level) => ({
      level,
      programs: programs.filter((program) => program.level === level),
    }))
    .filter((group) => group.programs.length > 0);

  if (groupedPrograms.length === 0) {
    return (
      <div className="program-empty">
        <h4>{emptyTitle}</h4>
        {emptyText && <p>{emptyText}</p>}
      </div>
    );
  }

  return (
    <div className="program-levels">
      {groupedPrograms.map((group) => (
        <section className="program-level" key={group.level} aria-labelledby={`${group.level}-heading`}>
          <div className="program-level-heading">
            <h4 id={`${group.level}-heading`}>{group.level}</h4>
            <span>
              {group.programs.length} {group.programs.length === 1 ? 'Program' : 'Programs'}
            </span>
          </div>
          <div className="program-grid">
            {group.programs.map((program) => (
              <article className="program-card" key={program.title}>
                <img src={program.image} alt="" />
                <div>
                  <p>{program.level}</p>
                  <h3>{program.title}</h3>
                  {program.detailId && onLearnMore ? (
                    <button type="button" onClick={() => onLearnMore(program)}>
                      Learn more
                    </button>
                  ) : (
                    <a href="#">Learn more</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
