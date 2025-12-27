import QuestionsTest from "../../features/questions/QuestionsTest.jsx";

import "../../styles/culturesArticle.css";

import placeholderJPG from "../../assets/react.svg";
import CronologiaWari from "../../assets/CronologiaWari.png";

const CulturaCaral = ({ sectionId }) => {
  const content = (
    <section className="main-culture__container">
      <div className="main-title__container">
        <h1>Cultura Wari</h1>
      </div>

      <div className="background__container">
        <h2 className="background__title" id="antecedentes-wari">
          Antecedentes
        </h2>
        <p className="background__description">
          Los orígenes Wari pueden explicarse entonces por la interacción
          diversa y recíproca de tres áreas de mucho prestigio y de desarrollo
          coetáneos como la región ayacuchana, la costa sur peruana y el
          altiplano peruano-boliviano, representadas por Warpa, Nazca y Tiwanaku
          Temprano.
        </p>
      </div>

      <div className="geographical-location__container">
        <h2 className="geographical-location__title" id="ubicacion-wari">
          Ubicación geográfica
        </h2>
        <div className="geographical-location__subcontainer">
          <p className="geographical-location__description">
            Floreció en los andes centrales del actual Perú se expandió en la
            costa central de Perú hasta la ceja de selva llegando a expandirse
            hasta los actuales departamentos peruanos de Lambayeque por el
            norte, Arequipa por el sur y hasta la ceja-selva del Cusco por el
            este. El centro principal era Caral, con grandes estructuras,
            pirámides, plazas circulares, templos, viviendas y sectores
            administrativos.
          </p>
          <img
            className="geographical-location__img"
            src={placeholderJPG}
            alt=""
          />
        </div>
      </div>

      <div className="history__container">
        <h2 className="history-title" id="historia-wari">
          Historia
        </h2>
        <p className="history-description">
          Wari es un fenómeno político estatal que sucede durante el Horizonte
          Medio entre los años 550 y 900 d.C. aproximadamente y para su estudio
          fue dividido en etapas de desarrollo
        </p>
        <h2 className="history-title">Etapas de desarrollo</h2>
        <ul className="ul-culture__list">
          <li>
            <b>Horizonte Medio 1A</b> - La época 1A se caracteriza por la
            aparición del estado y la ciudad asociados a la presencia de
            elementos míticos altiplánicos plasmados en las grandes vasijas
            ornamentales halladas en Qonchopata (Ayacucho), en las décadas de
            los 40 y los 70. El tema central mítico tiene semejanza con la
            imagen de la Portada del Sol de Tiwanaku.
          </li>
          <li>
            <b>Horizonte Medio 1B</b> - En la época 1B, los cambios son
            dramáticos y la población de la ciudad crece merced al flujo
            migratorio rural. El estado Wari es más fuerte, poderoso y maduro y
            empieza la primera expansión por la sierra norte hasta el callejón
            de Huaylas (Honqo Pampa y Willcawaín) y Huamachuco, por la sierra
            sur hasta Cuzco (Pikillaqta), y consolida sus posiciones en la costa
            central y sur.
          </li>
          <li>
            <b>Horizonte Medio 2A</b> - En la época 2A, el estado Wari pasó por
            una reestructuración política y experimentó una segunda expansión,
            que le permitió ocupar nuevas regiones del área andina central,
            resultando más poderoso y centralizado. La ciudad de Wari alcanza su
            máxima extensión y su máximo crecimiento poblacional.
          </li>
          <li>
            <b>Horizonte Medio 2B</b> - Durante la época 2B la expansión Wari
            alcanza hasta Cajamarca, La Libertad, Moquegua y Sicuani en el
            Cuzco.
          </li>
          <li>
            <b>Horizonte Medio 3</b>- Luego de la época 2B, Wari colapsa y se
            abandona la ciudad, perdiendo toda significación en las épocas 3 y
            4. Esta última coincidiría con un período de desecamiento de las
            tierras serranas producto de un cambio climático.
          </li>
          <li>
            <b>Horizonte Medio 4</b> - Colapsan también los centros
            provinciales. Desaparece la experiencia más significativa en el
            nivel político como estado panandino y como ciudad prístina en los
            Andes en el nivel urbanístico.
          </li>
        </ul>
        <img
          className="chronology__img"
          src={CronologiaWari}
          alt="CronologiaWari"
        />
      </div>

      <div className="organization__container">
        <h2 className="organization__title" id="organizacion-wari">
          Organización
        </h2>

        <div className="social-organization__container">
          <h3 className="social-organization__subtitle">Organización social</h3>
          <p className="social-organization__description">
            Descripciones iconográficas muestran a distinguidos miembros de la
            sociedad ataviados con ropajes ceremoniales quiene pueden ser
            considerados como lideres o guerreros. Ciertos restos de vasijas
            cerámicas representan a hombres con llamas de carga que pueden ser
            comerciantes. Solo se cuenta con pocas vasijas representando mujeres
            a quienes se muestran cargando niños y carga atadas a su espalda.
          </p>
        </div>

        <div className="economic-organization__container">
          <h3 className="economic-organization__subtitle">
            Organización económica
          </h3>
          <p className="economic-organization__description">
            La organización económica sustancialmente se basa en agricultura de
            subsistencia por terrazas que están determinadas por la proximidad
            de muchos de los asentamientos Hauri. Entre los cultivos producidos
            destacan: la quinua, tarwi, ullucu, oca , papa y maíz.
          </p>
        </div>

        <div className="politic-organization__container">
          <h3 className="politic-organization__subtitle">
            Organización política
          </h3>
          <p className="politic-organization__description">
            Los textiles tan exquisitamente elaborados and la cerámica
            documentan la identidad de diferentes individuos Huari o grupos
            étnicos en roles de confrontación dual y liderazgo religioso
            jerárquico. El control social, la arquitectura planificada en los
            sitios administrativos Huari muestran una política de control sobre
            los recursos y poblaciones en distantes centros de control
            regionales
          </p>
        </div>

        <img className="organization__img" src={placeholderJPG} alt="" />
      </div>

      <div className="cultural-achievements__container">
        <div className="cultural-achievements__subcontainer">
          <h2 className="cultural-achievements__title" id="logros-wari">
            Logros Culturales
          </h2>
          <p className="cultural-achievements__description">
            Entre sus logros destacan la producción de micro herramientas para
            el trabajo en las canteras de piedra. Mazos de piedra, azadones y
            herramientas de combate defensivas para el trabajo en el campo y
            procesamiento de los alimentos. Además del trabajo en artesanía de
            numerosas cuentas de piedra, fragmentos de tortuga decoradas,
            trabajos metalúrgicos en oro,cobre y bronce de collares y aretes.
            Crearon sistemas de canalización de agua y terrazas de cultivo para
            mejorar el cmapo cultivable del cuál los incas adaptarían el diseño.
          </p>
        </div>
        <img
          className="cultural-achievements__img"
          src={placeholderJPG}
          alt=""
        />
      </div>

      <div className="beliefs__container">
        <div className="beliefs__subcontainer">
          <h2 className="beliefs__title" id="creencias-wari">
            Creencias
          </h2>
          <p className="beliefs__description">
            A través de la implantación del culto a la “Divinidad de los
            Báculos” –con seguridad, deidad agrícola– y, sobre todo, a través de
            las ofrendas y ceremonias propiciatorias, la curia Wari estaba
            segura de aplacar las catástrofes naturales, tales como sequías,
            inundaciones, heladas y epidemias, frecuentes en el mundo andino.
            Esto explicaría por qué las ofrendas Wari se difunden igual o más
            que la “Divinidad de los Báculos” en toda el área andina central.
          </p>
        </div>
        <img className="beliefs__img" src={placeholderJPG} alt="" />
      </div>

      <div className="art__container">
        <div className="art__subcontainer">
          <h2 className="art__title" id="arte-wari">
            Arte
          </h2>
          <p className="art__description">
            La naturaleza del estado Wari es un estado militarista disuasivo,
            persuasivo y conquistador por excelencia, y teocrático a posteriori.
            En Wari lo sobrenatural se combina con una jerarquía de figuras de
            elite, guerreros y cautivos
          </p>
        </div>
        <img className="art__img" src={placeholderJPG} alt="" />
      </div>

      <div className="video__container">
        <h2 id="video-wari">Video</h2>
        <img src={placeholderJPG} alt="" />
      </div>

      <div className="questions-container">
        <QuestionsTest sectionId={sectionId}/>
      </div>
    </section>
  );

  return content;
};

export default CulturaCaral;
