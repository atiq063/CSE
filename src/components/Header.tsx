import { mainNav, topLinks } from '../data/siteData';
import cseLogo from '../assets/cselogo.png';

type HeaderProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

const implementedPages = new Set(['Home', 'About', 'Divisions', 'Programs', 'People', 'Centers']);

export function Header({ activePage, onNavigate }: HeaderProps) {
  const activeNavPage =
    activePage === 'Division' ? 'Divisions' : activePage === 'ProgramDetail' ? 'Programs' : activePage;

  return (
    <header className="header">
      <div className="topbar container">
        <div className="topbar-start">
          <a className="hbku-main-link" href="https://www.hbku.edu.qa">
            Back to HBKU
          </a>
          <nav aria-label="CSE utility links">
            {topLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="topbar-actions">
          <button type="button">High contrast</button>
          <a href="#">العربية</a>
          <a className="apply-link" href="#">
            Apply Now
          </a>
        </div>
      </div>
      <div className="mainbar container">
        <button
          type="button"
          className="brand"
          aria-label="College of Science and Engineering, HBKU"
          onClick={() => onNavigate('Home')}
        >
          <img src={cseLogo} alt="College of Science and Engineering" />
        </button>
        <nav className="mainnav" aria-label="Main navigation">
          {mainNav.map((item) =>
            implementedPages.has(item) ? (
              <button
                key={item}
                type="button"
                className={item === activeNavPage ? 'active' : ''}
                onClick={() => onNavigate(item)}
              >
                {item}
              </button>
            ) : (
              <a key={item} href="#">
                {item}
              </a>
            ),
          )}
        </nav>
        <button className="search-button" type="button" aria-label="Search">
          Search
        </button>
      </div>
    </header>
  );
}
