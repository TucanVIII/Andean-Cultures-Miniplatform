import { IoIosArrowDropdownCircle } from "react-icons/io";

const DashLearnMoreButton = () => {
  const target_section = "infoSection";

  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(target_section);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const content = (
    <section className="learn-more__container">
      <div className="learn-more-text">
        <h3 className="sub-subtitle">Más</h3>
      </div>
      <div className="learn-more-button">
        <a
          href={`${target_section}`}
          className="dropdown-circle"
          onClick={handleScroll}
        >
          <IoIosArrowDropdownCircle/>
        </a>
      </div>
    </section>
  );
  return content;
};

export default DashLearnMoreButton;
