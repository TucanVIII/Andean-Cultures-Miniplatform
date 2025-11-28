import { useEffect, useState } from "react";

import AccordionSections from "../../features/sections/AccordionSections";

import CulturaCaral from "../sectionsComponents/CulturaCaral.jsx";
import CulturaWari from "../sectionsComponents/CulturaWari.jsx";
import CulturaTiawanaku from "../sectionsComponents/CulturaTiawanaku.jsx";
import CulturaInca from "../sectionsComponents/CulturaInca.jsx";

import "../../styles/sectionsLayout.css";

const cultureComponents = {
  CARAL: CulturaCaral,
  WARI: CulturaWari,
  TIAWANAKU: CulturaTiawanaku,
  INCA: CulturaInca,
};

const SectionsLayout = () => {
  const [selectedCulture, setSelectedCulture] = useState(null);
  const [pendingSectionId, setPendingSectionId] = useState(null);

  const handleSelectedCulture = (cultureTitle) => {
    setSelectedCulture(cultureTitle);
    setPendingSectionId(null);
  };

  const handleScrollToItemId = (itemId) => {
    setPendingSectionId(itemId);
  };

  const handleScroll = (itemId) => {
    const titleId = document.getElementById(itemId);
    if (titleId) {
      titleId.scrollIntoView();
      setPendingSectionId(null);
    }
  };

  useEffect(() => {
    if (pendingSectionId) handleScroll(pendingSectionId);
  }, [pendingSectionId, selectedCulture]);

  const CultureComponent = cultureComponents[selectedCulture];

  const content = (
    <main className="main-container">
      <div className="accordion-container">
        <AccordionSections
          selectedCulture={selectedCulture}
          onSelectedCulture={handleSelectedCulture}
          onScrollSection={handleScrollToItemId}
        />
      </div>

      <div className="article-container">
        <div className="culture-container">
          {CultureComponent ? (
            <CultureComponent />
          ) : (
            <h2>Seleccione una cultura del acordeón para comenzar</h2>
          )}
        </div>
      </div>
    </main>
  );
  return content;
};

export default SectionsLayout;
