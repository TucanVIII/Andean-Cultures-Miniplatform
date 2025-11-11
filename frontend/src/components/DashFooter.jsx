import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const DashFooter = () => {
  const currentYear = new Date().getFullYear();
  const content = (
    <footer className="dash-footer">
      <section className="terms-grid">

        <div className="collaborators-footer">
          <div>
            <h3 className="subtitle">En asociación con:</h3>
          </div>
          <div className="icons-container">
            UEMOL
          </div>
        </div>

        <div className="social-media__container">
          <div>
            <h3 className="subtitle">Redes sociales</h3>
          </div>
          <div className="icons-container">
            <a
              href="https://www.facebook.com/EducacionQuito/posts/este-23-de-abril-la-unidad-educativa-municipal-oswaldo-lombeyda-cumple-33-a%C3%B1os-d/545157434467355/"
              target="_blank"
              className="dash-footer__button icon-button faFacebook"
            >
              <FaFacebook icon={FaFacebook} />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/1016636274/unidad-educativa-municipal-oswaldo-lombeida/"
              target="_blank"
              className="dash-footer__button icon-button faInstagram"
            >
              <FaInstagram icon={FaInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@unidadeducativamunicipalos5089/featured"
              target="_blank"
              className="dash-footer__button icon-button faYoutube"
            >
              <FaYoutube icon={FaYoutube} />
            </a>
          </div>
        </div>

      </section>

      <div className="footer-line"></div>

      <section className="terms-footer">
        <div className="app-logo">
          <h1>YACHAY</h1>
        </div>
        <div className="footer-text">
          <p>© {currentYear} YACHAY</p>
        </div>
      </section>

    </footer>
  );
  return content;
};

export default DashFooter;
