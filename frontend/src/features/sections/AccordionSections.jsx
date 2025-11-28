import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const AccordionSections = ({selectedCulture, onSelectedCulture, onScrollSection}) => {

  const [isActive, setIsActive] = useState(null);
  const accordionContent = [
    "Video",    
    "Antecedentes",
    "Ubicación geográfica",
    "Historia",
    "Organización",
    "Logros culturales",
    "Creencias",
    "Arte"
  ];

  const accordionData = [
    { title: "CARAL", content: accordionContent },
    { title: "WARI", content: accordionContent },
    { title: "TIAWANAKU", content: accordionContent },
    { title: "INCA", content: accordionContent },
  ];

  const handleTitleClick = (index,title) => {
    setIsActive(isActive === index ? null : index)
    onSelectedCulture(title)
  }

  const handleScrollItem = itemTitle => {
  if(!selectedCulture) return;

  const cleanTitle = itemTitle
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
    .replace(/\s+/g, "-");

  const cultureId = selectedCulture.toLowerCase();

  const fullId = `${cleanTitle}-${cultureId}`;

  onScrollSection(fullId);
}

  const content = (
    accordionData.map((item, index) => (
      <div className="accordion" key={index}>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleTitleClick(index, item.title)}
          >
            <h3>{item.title}</h3>
            <div>{isActive === index ? <FaAngleUp /> : <FaAngleDown />}</div>
          </div>

          {isActive === index && (
            <div className="accordion-content">
              <ul>
                {item.content.map((c,i) => (
                  <li 
                    key={i}
                    onClick={()=> handleScrollItem(c)}
                    >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    ))
  );

  return content;
};

export default AccordionSections;
