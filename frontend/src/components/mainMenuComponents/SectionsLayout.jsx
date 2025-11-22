import { useState } from "react";

import AccordionSections from "../../features/sections/AccordionSections";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import "../../styles/sectionsLayout.css";

const SectionsLayout = () => {
  const [isActive, setIsActive] = useState(null);
  const accordionData = [
    { title: "TITULO I", content: "CONTENIDO I" },
    { title: "TITULO II", content: "CONTENIDO II" },
    { title: "TITULO III", content: "CONTENIDO III" },
    { title: "TITULO IV", content: "CONTENIDO IV" }
  ];

  const content = (
    <main className="main-container">

      <div className="accordion-container">

        <AccordionSections />
        {accordionData.map((item, index) => (
          <div className="accordion" key={index}>
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() =>
                  setIsActive(isActive === index ? null : index)
                }
              >
                <h3>{item.title}</h3>
                <div>
                  {isActive === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>

              {isActive === index && (
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="article-container">
        <div className="culture-container">
          <h2>AQUÍ VA LA CULTURA</h2>
        </div>
      </div>

    </main>
  );
  return content;
};

export default SectionsLayout;
