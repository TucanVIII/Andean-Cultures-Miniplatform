import { Link } from "react-router-dom";

import DashNavbar from "./dashboardComponents/DashNavbar.jsx";
import DashHero from "./dashboardComponents/DashHero.jsx";
import DashLearnMoreButton from "./dashboardComponents/DashMoreButton.jsx";
import DashFooter from "./dashboardComponents/DashFooter.jsx";
import DashSection from "./dashboardComponents/DashLearnSection.jsx";

const Public = () => {
  return (
    <>
      <DashNavbar />
      <DashHero />
      <DashLearnMoreButton />
      <DashSection />
      <DashFooter />
    </>
  )
}

export default Public;