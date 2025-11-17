import reactLogo from "../../assets/react.svg";

const DashSection = () => {
  const content = (
    <section className="section-learning__container" id="infoSection">

      <div className="learn-container">
        <h2 className="sub-title">Desarrollando aprendizajes interactivos</h2>
        <div className="learning-types">
          <div className="learn-type">
            <img src={reactLogo} alt="" className="img-type" />
            <h3 className="sub-subtitle">MOTIVADOR</h3>
            <p className="description">
              Capta <b>el interés</b> por aprender
            </p>
          </div>
          <div className="learn-type">
            <img src={reactLogo} alt="" className="img-type" />
            <h3 className="sub-subtitle">VISUAL</h3>
            <p className="description">
              Facilita la <b>compresión</b>
            </p>
          </div>
          <div className="learn-type">
            <img src={reactLogo} alt="" className="img-type" />
            <h3 className="sub-subtitle">INTERACTIVO</h3>
            <p className="description">
              Promoviendo <b>aprendizajes</b> activos
            </p>
          </div>
          <div className="learn-type">
            <img src={reactLogo} alt="" className="img-type" />
            <h3 className="sub-subtitle">PERSONALIZADO</h3>
            <p className="description">
              Adaptado a los <b>contenidos</b> temarios
            </p>
          </div>
          <div className="learn-type">
            <img src={reactLogo} alt="" className="img-type" />
            <h3 className="sub-subtitle">MULTI PLATAFORMA</h3>
            <p className="description">
              Desarrollado para todos los <b>dispositivos</b>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="study-plan__container">
        <div className="headline-container">
          <h2 className="title">Una app de aprendizaje personalizada</h2>
          <p className="headline-description">
            Yachay permite a los jóvenes el desarrollo de actividades académicas
            por medio de actividades lúdicas e interactivas
          </p>
        </div>
        <div className="card-study">
          <div className="card-description">
            <h3 className="sub-subtitle">Alegre y encantador</h3>
            <p className="card-study__description">
              Explora actividades creativas por distintas secciones narrativas para un aprendizaje divertido y estimulante
            </p>
          </div>
          <img src={reactLogo} alt="" className="img-study" />
        </div>
        <div className="card-study">
          <img src={reactLogo} alt="" className="img-study" />
          <div className="card-description">
            <h3 className="sub-subtitle">Desarrollado por expertos</h3>
            <p className="card-study__description">
              Creado en colaboración de expertos en aprendizaje de historia
              sudamericana
            </p>
          </div>
        </div>
        <div className="card-study">
          <div className="card-description">
            <h3 className="sub-subtitle">Reporte de seguimiento personalizado</h3>
            <p className="card-study__description">
              Monitorización del progreso del estudiante constante
            </p>
          </div>
          <img src={reactLogo} alt="" className="img-study" />
        </div>
      </div>
    </section>
  );

  return content;
};

export default DashSection;
