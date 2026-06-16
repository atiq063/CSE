import { useEffect, useState } from 'react';
import { AboutPage } from '../components/AboutPage';
import { CentersPage } from '../components/CentersPage';
import { DivisionPage } from '../components/DivisionPage';
import { DivisionsOverview } from '../components/DivisionsOverview';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { NewsSection } from '../components/NewsSection';
import { ProgramDetailPage } from '../components/ProgramDetailPage';
import { ProgramsSection } from '../components/ProgramsSection';
import { QuoteSection } from '../components/QuoteSection';
import { divisionDetails } from '../data/divisionDetails';
import { Program, programDivisions } from '../data/siteData';

export function App() {
  const [activePage, setActivePage] = useState('Home');
  const [selectedDivisionId, setSelectedDivisionId] = useState<string | undefined>();
  const [selectedProgramDetailId, setSelectedProgramDetailId] = useState<string | undefined>();
  const showProgramsPage = activePage === 'Programs';
  const showAboutPage = activePage === 'About';
  const showCentersPage = activePage === 'Centers';
  const showDivisionsPage = activePage === 'Divisions';
  const showDivisionPage = activePage === 'Division';
  const showProgramDetailPage = activePage === 'ProgramDetail';
  const selectedDivision =
    programDivisions.find((division) => division.id === selectedDivisionId) ?? programDivisions[0];
  const selectedProgramDetail = selectedProgramDetailId
    ? divisionDetails[selectedDivision.id]?.programDetails?.find(
        (program) => program.id === selectedProgramDetailId,
      )
    : undefined;

  useEffect(() => {
    if (activePage === 'Home') {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [activePage, selectedDivisionId, selectedProgramDetailId]);

  const openProgramsForDivision = (divisionId?: string) => {
    setSelectedDivisionId(divisionId);
    setActivePage('Programs');
  };

  const openDivisionPage = (divisionId: string) => {
    setSelectedDivisionId(divisionId);
    setActivePage('Division');
  };

  const openProgramDetail = (program: Program) => {
    if (!program.detailId) {
      return;
    }

    const parentDivision = programDivisions.find((division) =>
      division.programs.some((divisionProgram) => divisionProgram.detailId === program.detailId),
    );

    setSelectedDivisionId(parentDivision?.id);
    setSelectedProgramDetailId(program.detailId);
    setActivePage('ProgramDetail');
  };

  return (
    <div className="site-shell">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>
        {showAboutPage ? (
          <AboutPage />
        ) : showCentersPage ? (
          <CentersPage />
        ) : showDivisionsPage ? (
          <DivisionsOverview
            onExplorePrograms={openProgramsForDivision}
            onOpenDivision={openDivisionPage}
          />
        ) : showProgramDetailPage && selectedProgramDetail ? (
          <ProgramDetailPage
            divisionName={selectedDivision.name}
            program={selectedProgramDetail}
            onBackToDivision={() => setActivePage('Division')}
            onBackToPrograms={() => openProgramsForDivision(selectedDivision.id)}
          />
        ) : showDivisionPage ? (
          <DivisionPage
            division={selectedDivision}
            onBackToDivisions={() => setActivePage('Divisions')}
            onOpenProgram={openProgramDetail}
            onViewAllPrograms={() => openProgramsForDivision(selectedDivision.id)}
          />
        ) : showProgramsPage ? (
          <ProgramsSection onOpenProgram={openProgramDetail} selectedDivisionId={selectedDivisionId} />
        ) : (
          <>
            <Hero />
            <DivisionsOverview
              onExplorePrograms={openProgramsForDivision}
              onOpenDivision={openDivisionPage}
            />
            <NewsSection />
            <QuoteSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
