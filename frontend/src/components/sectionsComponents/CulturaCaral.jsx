import { useGetAllSectionsQuery } from "../../features/sections/sectionsApiSlice.js";
import { useScrollCompletion } from "../../hooks/useScrollCompletion.js";
import { useSectionTextProgress } from "../../hooks/useSectionTextProgress.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";

import VideoSection from "../../features/sections/VideoSection.jsx";
import QuestionsTest from "../../features/questions/QuestionsTest.jsx";

import "../../styles/culturesArticle.css";

import placeholderJPG from "../../assets/react.svg";
import CronologiaCaral from "../../assets/CronologiaCaral.png";

const CulturaCaral = ({ sectionId }) => {
  const { ref: textWasCompleted, completed: finishedText } =
    useScrollCompletion({ threshold: 1 });

  const { data: sections } = useGetAllSectionsQuery();
  const { data:user,isLoading } = useCurrentUser();
  const section = sections?.entities?.[sectionId];

  const userSection = user?.sections?.find(
    (s) => s.sectionId === sectionId || s.sectionId?._id === sectionId
  );

  if (!section) return null;

  useSectionTextProgress({
    section,
    sectionId,
    finishedText,
  });

  return (
    <section className="main-culture__container">
      <div className="main-title__container">
        <h1>Cultura Caral</h1>
      </div>

      <div className="video__container">
        <h2 id="video-caral">Video</h2>
        <VideoSection
          className="iframe__video"
          sectionId={section._id}
          videoUrl={section.videoUrl}
        />
      </div>

      <div className="background__container">
        <h2 className="background__title" id="antecedentes-caral">
          Antecedentes
        </h2>
        <p className="background__description">
          La civilización Caral es considerada como una de las civilizaciones
          más antiguas de Sudamérica, cuya capital es la ciudad del mismo
          nombre. El actual centro arqueológico cuenta con una superficie de 66
          hectáreas y uno de los más grandes de américa. El centro
          administrativo y de poder se enfocó en el desarrollo de un sistema
          económico y religioso para trabajos especializados en relación con su
          habitad.
        </p>
      </div>

      <div className="geographical-location__container">
        <h2 className="geographical-location__title" id="ubicacion-caral">
          Ubicación geográfica
        </h2>
        <div className="geographical-location__subcontainer">
          <p className="geographical-location__description">
            La región de Norte Chico, en la costa central de Perú, incluye los
            valles Fortaleza, Pativilca, Supe y Huaura. En esta área se han
            identificado más de 30 centros urbanos del Arcaico Tardío (3000–1800
            a.C.). El centro principal era Caral, con grandes estructuras,
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
        <h2 className="history-title" id="historia-caral">
          Historia
        </h2>
        <p className="history-description">
          Las distintas pruebas científicas de varios objetos hallados
          determinan que Caral es la ciudad más antigua de América, con cerca a
          5 mil años de antigüedad, ubicándola como la tercera más antigua del
          mundo. Caral se desarrolló una organización social con un poder
          político ausente de violencia, basada en la religión y el trabajo
          especializado
        </p>
        <h2>Cronología de Caral</h2>
        <ul className="ul-culture__list">
          <li>
            Antes de 3000 a.C. - asentamientos iniciales y agricultura básica.
          </li>
          <li>3000-2600 a.C. - construcción de edificios públicos.</li>
          <li>2300-2200 a.C. - apogeo del poder político y religioso.</li>
          <li>2200-2100 a.C. - declive y reducción del asentamiento.</li>
          <li>
            2100-1800 a.C. - abandono progresivo por crisis ecológica,
            terremotos, inundaciones por el fenómeno El Niño y cambios en la
            línea costera.
          </li>
        </ul>
        <img
          className="chronology__img"
          src={CronologiaCaral}
          alt="CronologiaCaral"
        />
      </div>

      <div className="organization__container">
        <h2 className="organization__title" id="organizacion-caral">
          Organización
        </h2>

        <div className="social-organization__container">
          <h3 className="social-organization__subtitle">Organización social</h3>
          <p className="social-organization__description">
            Investigadores como Haas y Creamer demostraron que no existían
            armas, murallas, fortalezas ni señales de conflictos. Caral no
            impuso dominación militar sobre otros asentamientos. La cohesión
            social se basaba en la religión, que cumplía la función integradora
            en lugar de la fuerza militar. La organización social de los Caral
            estuvo distribuida por labores especializadas; unas son religiosas
            con los sacerdotes que dirigían los ritos y ceremonias
            pertenecientes a una élite, otras administrativas y políticas
            destinadas a las tareas administrativas de la producción y
            organización del trabajo; otras ciencias y tecnologías, como la
            medicina, el diseño y construcción de obras públicas, la astronomía,
            la arquitectura. Por otro lado, los artesanos, músicos, los
            comerciantes, constructores, campesinos, pescadores, artesanos, y
            sirvientes de una clase social subordinada
          </p>
        </div>

        <div className="economic-organization__container">
          <h3 className="economic-organization__subtitle">
            Organización económica
          </h3>
          <p className="economic-organization__description">
            Investigadores como Haas y Creamer demostraron que no existían
            armas, murallas, fortalezas ni señales de conflictos. Caral no
            impuso dominación militar sobre otros asentamientos. La cohesión
            social se basaba en la religión, que cumplía la función integradora
            en lugar de la fuerza militar.
          </p>
        </div>

        <div className="politic-organization__container">
          <h3 className="politic-organization__subtitle">
            Organización política
          </h3>
          <p className="politic-organization__description">
            La diferenciación de las clases sociales estuvo muy marcada en la
            civilización de Caral. Los sacerdotes (curacas) y los Hunos (señor
            gobernante) se distinguían de los demás por sus peinados y tocados,
            adornos personales, dijes, collares de spondylus (concha muy
            preciada proveniente del Ecuador) valvas o choro zapato. La
            jerarquía social Huno.- Señor gobernante del valle y conductor del
            gobierno del Estado.
          </p>
          <ul className="ul-culture__list">
            <li>
              <b>Curacas.-</b> Autoridad de actividades administrativas,
              agrarias, económicas, constructivas y religiosas de las pachacas.
              Este es el nivel donde se encontraban los intelectuales o
              científicos y sacerdotes
            </li>
            <li>
              <b>Icho Huari, Allauca Huari.-</b> Primera persona y segunda
              autoridad en las pachacas y sayas.
            </li>
            <li>
              <b>Pachacas.-</b> Centro urbano conducido por una autoridad
              (Curaca). Pueblo, agricultores, pescadores, artesanos,
              constructores, sirvientes miembros de un ayllu y sayas.
            </li>
            <li>
              {" "}
              <b>Ayllu.-</b> Grupos familiares pertenecientes a una pachaca.
            </li>
            <li>
              <b>Sayas.-</b> Porción del pueblo asentados al margen del río
              tanto al lado izquierdo y derecho dirigidos por un Icho Huari o
              Allauca Huari.
            </li>
          </ul>
        </div>

        <img className="organization__img" src={placeholderJPG} alt="" />
      </div>

      <div className="cultural-achievements__container">
        <div className="cultural-achievements__subcontainer">
          <h2 className="cultural-achievements__title" id="logros-caral">
            Logros Culturales
          </h2>
          <p className="cultural-achievements__description">
            Su riqueza y prestigio prevalecieron en el área nor central por casi
            un milenio y fomentaron cambios sociales cualitativos en las
            poblaciones de otras áreas del Perú. Su organización socio política
            sirvió de modelo para las de otras nacionalidades, y sus
            conocimientos y aplicaciones tecnológicas fueron transmitidos más
            allá de su territorio. Varias de sus contribuciones en tecnología
            agraria, medición del tiempo o pre-dicción del clima, arquitectura e
            ingeniería, registro de información en quipus, como también su
            estructura organizativa en el ámbito socio político, fueron asumidas
            por sociedades de otras áreas y continuadas hasta el imperio inca.
          </p>
          <ul className="ul-culture__list">
            <li>
              El khipu más antiguo (c. 2340 a.C.), sistema de cuerdas con nudos
              para registrar información, luego usado por los incas.
            </li>
            <li>Influencia sobre el desarrollo del quechua primitivo.</li>
            <li>
              Base estructural de las sociedades andinas posteriores, incluido
              el Imperio Inca.
            </li>
          </ul>
        </div>
        <img
          className="cultural-achievements__img"
          src={placeholderJPG}
          alt=""
        />
      </div>

      <div className="beliefs__container">
        <div className="beliefs__subcontainer">
          <h2 className="beliefs__title" id="creencias-caral">
            Creencias
          </h2>
          <p className="beliefs__description">
            A la ausencia de un cuerpo militar que domine y controle el pueblo,
            los Caral lograron insertar la religión como un mecanismo de control
            y cohesión social. Se trataba de la realización de un conjunto de
            ceremonias públicas y privadas por sacerdotes en los espacios
            creados para tal fin. Los ritos y ceremonias con ofrendas diversas;
            plantas, objetos diversos como cestos, textiles, conchas, valvas,
            madera, semillas, huesos de pescado, dijes, piedras semipreciosas,
            acompañados música y danzas recreaban un espacio sacro, ideal para
            lograr la integración y subordinación de sus integrantes.
          </p>
        </div>
        <img className="beliefs__img" src={placeholderJPG} alt="" />
      </div>

      <div className="art__container">
        <div className="art__subcontainer">
          <h2 className="art__title" id="arte-caral">
            Arte
          </h2>
          <p className="art__description">
            Caral evidencia la realización de concentraciones humanas periódicas
            donde se combinaban los traba-jos colectivos en las construcciones,
            el agro, los intercambios y las ceremonias religiosas. Las
            actividades sociales, políticas, económicas e ideológicas realizadas
            de manera simultánea fortalecieron la cohesión social, así como la
            posición privilegiada y el poder de las autoridades. Se convirtió en
            el sustrato compartido y muchas de sus contribuciones fueron
            asumidas mediante el proceso cultural como los geoglifos, la
            escritura en quipus, ciertos diseños como la chacana, objetos
            denominados ojos de dios e instrumentos musicales como la quena y la
            antara.
          </p>
        </div>
        <img className="art__img" src={placeholderJPG} alt="" />
      </div>

      {/* MARCADOR DE FINAL DE LECTURA */}
      <div className="text-completed__container" ref={textWasCompleted}>
        <span className="text-completed__span"> Final de la lectura </span>
      </div>

      {/* FEEDBACK VISUAL */}
      {finishedText && (
        <div className="text-completed__div">
          ✓ Has completado la lectura del contenido teórico.
        </div>
      )}

      <div className="questions-container">
        {userSection?.quiz?.status === "completed" ? (
          <div className="quiz-completed">✅ Test completado</div>
        ) : (
          <QuestionsTest sectionId={sectionId} />
        )}
      </div>
    </section>
  );
};

export default CulturaCaral;
