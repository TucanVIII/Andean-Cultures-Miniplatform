import DashNavbar from "./publicComponents/DashNavbar.jsx";
import DashHero from "./publicComponents/DashHero.jsx";
import DashLearnMoreButton from "./publicComponents/DashMoreButton.jsx";
import DashFooter from "./publicComponents/DashFooter.jsx";
import DashSection from "./publicComponents/DashLearnSection.jsx";

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