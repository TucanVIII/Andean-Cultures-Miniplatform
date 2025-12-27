import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Loader from "../../features/ui/Loader.jsx"

import { sectionsObject } from "../../components/sectionsComponents/sectionsObject.jsx";
import { useGetAllSectionsQuery } from "./sectionsApiSlice.js";

const AccordionSections = ({ selectedCulture, onSelectedCulture, onScrollSection }) => {
  const { data: sections, isLoading, isError } = useGetAllSectionsQuery();

  const [isActive, setIsActive] = useState(null);

  const accordionContent = [
    "Video",
    "Antecedentes",
    "Ubicación geográfica",
    "Historia",
    "Organización",
    "Logros culturales",
    "Creencias",
    "Arte",
  ];

  const sectionsArray = sections?.ids
    ? sections.ids.map((id) => sections.entities[id])
    : [];

  const normalizeString = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  const handleTitleClick = (index, section) => {
    setIsActive(isActive === index ? null : index);
    const comp = sectionsObject[section.sectionTitle.toUpperCase()];
    const staticContent = comp ? React.cloneElement(comp, { sectionId: section._id }) : null;
    if (onSelectedCulture) {
      onSelectedCulture({
        ...section,
        staticComponent: staticContent,
      });
    }
  };

  const handleScrollItem = (section, itemTitle) => {
    if (!section) return;

    const cleanTitle = normalizeString(itemTitle);
    const cultureId = normalizeString(section.sectionTitle);
    const fullId = `${cleanTitle}-${cultureId}`;

    if (onScrollSection) onScrollSection(fullId);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className="errmsg">Error cargando secciones</p>;
  }

  return sectionsArray.map((section, index) => (
    <div className="accordion" key={section._id}>
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => handleTitleClick(index, section)}
        >
          <h3>{section.sectionTitle}</h3>
          <div>{isActive === index ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>

        {isActive === index && (
          <div className="accordion-content">
            <ul>
              {accordionContent.map((c, i) => (
                <li key={i} onClick={() => handleScrollItem(section, c)}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  ));
};

export default AccordionSections;
