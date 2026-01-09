import CulturaCaral from "./CulturaCaral.jsx";
import CulturaWari from "./CulturaWari.jsx";
import CulturaTiawanaku from "./CulturaTiawanaku.jsx";
import CulturaInca from "./CulturaInca.jsx";

{/* 
    The main goal of implementing this architecture was 
    to simplify the management in the ADMIN panel and avoid increasing
    the complexity of the section database schema
*/}
export const sectionsObject = {
    "CARAL": <CulturaCaral />,
    "WARI": <CulturaWari />,
    "TIAWANAKU": <CulturaTiawanaku />,
    "INCA": <CulturaInca />
};