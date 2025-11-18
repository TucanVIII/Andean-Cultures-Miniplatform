import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../../styles/sectionsLayout.css"

const SectionsLayout = () => {
  
  const content = (
    <main className="main-container">
      <div className="accordion-container">

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor
          </AccordionDetails>
        </Accordion>

      </div>

      <div className="article-container">
        <h2>AQUI VA LA CULTURA</h2>
      </div>
    </main>
  );
  return content;
};

export default SectionsLayout;
