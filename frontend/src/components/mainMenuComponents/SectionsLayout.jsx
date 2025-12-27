import { useEffect, useState } from "react";

import AccordionSections from "../../features/sections/AccordionSections";

import IntroSections from "../sectionsComponents/IntroSections.jsx";

import "../../styles/sectionsLayout.css";

const SectionsLayout = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [pendingSectionId, setPendingSectionId] = useState(null);

  const handleSelectedCulture = (cultureTitle) => {
    setSelectedSection(cultureTitle);
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
  }, [pendingSectionId]);

  const generateId = (subtitle) => {
    if (!subtitle) return "";
    const cleanSubtitle = subtitle
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    const culture = selectedSection?.sectionTitle
      ? selectedSection.sectionTitle
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-")
      : "";
    return `${cleanSubtitle}-${culture}`;
  };

  const content = (
    <main className="main-container">
      <div className="accordion-container">
        <AccordionSections
          onScrollSection={handleScrollToItemId}
          onSelectedCulture={handleSelectedCulture}
          selectedCulture={selectedSection?.sectionTitle}
        />
      </div>

      <div className="article-container">
        <div className="culture-container">
          {selectedSection ? (
            <>
              {selectedSection.staticComponent}
              {selectedSection.contentBlocks?.map((block, index) => (
                <div key={index} id={generateId(block.subtitle)}>
                  <h2>{block.subtitle}</h2>
                  <p>{block.content}</p>
                </div>
              ))}
            </>
          ) : (
            <IntroSections />
          )}
        </div>
      </div>
    </main>
  );
  return content;
};

export default SectionsLayout;
