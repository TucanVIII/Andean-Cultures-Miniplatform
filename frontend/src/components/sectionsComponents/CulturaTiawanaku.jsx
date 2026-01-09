import { useGetAllSectionsQuery } from "../../features/sections/sectionsApiSlice.js";
import VideoSection from "../../features/sections/VideoSection.jsx";
import QuestionsTest from "../../features/questions/QuestionsTest.jsx";

import "../../styles/culturesArticle.css";

import placeholderJPG from "../../assets/react.svg";
import CronologiaTiawanaku from "../../assets/CronologiaTiawanaku.png";

const CulturaCaral = ({ sectionId }) => {
  const { data: sections } = useGetAllSectionsQuery();

  const section = sections?.entities?.[sectionId];

  if (!section) return null;
  return (
    <section className="main-culture__container">
      <div className="main-title__container">
        <h1>Cultura Caral</h1>
      </div>

      <div className="video__container">
        <h2 id="video-tiawanaku">Video</h2>
        <VideoSection sectionId={sectionId} videoUrl={section.videoUrl} />
      </div>

      <div className="background__container">
        <h2 className="background__title" id="antecedentes-tiawanaku">
          Antecedentes
        </h2>
        <p className="background__description">
          La sociedad tiwanaku fue una civilización pre incaica desarrollada en
          el altiplano andino de sudamérica con base en la capital Tiwanaku uno
          de los más grandes estados aborígenes de la antigua América y que la
          sociedad que allí surgió en los primeros siglos de nuestra era, fue,
          durante casi un milenio, la potencia más influyente de los Andes.
        </p>
      </div>

      <div className="geographical-location__container">
        <h2 className="geographical-location__title" id="ubicacion-tiawanaku">
          Ubicación geográfica
        </h2>
        <div className="geographical-location__subcontainer">
          <p className="geographical-location__description">
            El territorio natal de Tiwanaku se encuentra en el suroeste del
            Titikaka, allí donde las aguas lacustres y las estribaciones de la
            Cordillera Real se funden y entrelazan, producto de un milenario
            combate entre sequías e inundaciones, que en ciertos períodos
            hicieron retroceder drásticamente las orillas del lago y en otros,
            las llevaron tierra adentro por varios kilómetros. Es el paisaje de
            la creación andina, donde el dios Wirakocha emergió de las
            profundidades del Lago Sagrado para crear el cielo y la tierra, el
            sol, la luna, las estrellas y el día.
          </p>
          <img
            className="geographical-location__img"
            src={placeholderJPG}
            alt=""
          />
        </div>
      </div>

      <div className="history__container">
        <h2 className="history-title" id="historia-tiawanaku">
          Historia
        </h2>
        <p className="history-description">
          Indudablemente, el altiplano peruano-boliviano ha sido uno de los
          escenarios más significativos donde se gestaron los procesos
          económicos, sociales e ideológicos más complejos, de profunda y
          dramática repercusión en las formaciones sociales andinas, desde los
          inicios de nuestra era hasta la época inkaica, en la cual los
          soberanos inkas reclamaban ser descendientes de fundadores procedentes
          de estas tierras cercanas al “ritisuyu” o región de nevados.
        </p>
        <h2>Etapas de desarrollo</h2>
        <ul className="ul-culture__list">
          <li>
            <b>Fases I y II</b> - La fría crónica de los acontecimientos dice
            que, durante la mayor parte de las Fases I y II (400 AC - 100 DC),
            el sitio fue una aldea más entre muchas otras de la región. Las
            culturas Wankarani en el altiplano de Oruro, Chiripa en la orilla
            sur del lago Titikaka y Pukara en el norte de la cuenca, lideraban
            entonces el desarrollo cultural en el altiplano. De ellas los
            habitantes de Tiwanaku heredaron diversas tecnologías, instituciones
            y formas simbólicas.
          </li>
          <li>
            <b>Fase III</b> - La transformación de la aldea de Tiwanaku en un
            centro político y ritual de primer orden ocurrió en algún momento de
            la Fase III (100 - 400 DC), con la construcción de las primeras
            estructuras propiamente monumentales de la cuenca del Titikaka. En
            esta fase el asentamiento creció hasta convertirse en una ciudad y
            la sociedad que residía en ella pasó a organizarse en un Estado de
            inf luencia regional
          </li>
          <li>
            <b>Fase IV</b> - Promediando la Fase IV, Tiwanaku pasó a ser también
            la Capital de un imperio en expansión, que comenzó a enviar colonos
            a las tierras bajas situadas a ambos lados de los Andes y a
            establecer enclaves comerciales en puntos distante
          </li>
          <li>
            <b>Fase V</b> - En el curso de la Fase V (800-1100 DC), el Estado
            consolidó sus dominios fuera del lago, organizando varias regiones
            como provincias. En su clímax, el Imperio abarcaba amplias porciones
            de territorio del extremo sur del Perú, el altiplano de Bolivia, el
            extremo norte de Chile, incluso algunas localidades septentrionales
            del noroeste de Argentina. Gradualmente, sin embargo, comenzó a
            declinar, hasta desintegrarse en algún momento del siglo XI DC, por
            circunstancias vinculadas a una desastrosa y larga sequía.
          </li>
        </ul>
        <img
          className="chronology__img"
          src={CronologiaTiawanaku}
          alt="CronologiaTiawanaku"
        />
      </div>

      <div className="organization__container">
        <h2 className="organization__title" id="organizacion-tiawanaku">
          Organización
        </h2>

        <div className="social-organization__container">
          <h3 className="social-organization__subtitle">Organización social</h3>
          <p className="social-organization__description">
            Tiwanaku, como entidad política, representa un estado en manos de
            una teocracia pacífica que no habría apelado en sus conquistas a la
            modalidad militar, de acuerdo a la información que a la fecha
            existe, aunque parece que esta idea contradice las experiencias
            registradas por la historia universal, que no evidencian teocracias
            pacíficas.
          </p>
        </div>

        <div className="economic-organization__container">
          <h3 className="economic-organization__subtitle">
            Organización económica
          </h3>
          <p className="economic-organization__description">
            La diversificación de la economía Tiwanaku se expresa en las
            actividades agrícolas, ganaderas y artesanales. La importancia, el
            volumen y el consumo asignados o logrados en estas actividades
            varían sustantivamente y ayudan, a su vez, a entender la naturaleza
            política o doméstica de su sistema económico. En la agricultura
            manejaron diversas regiones, sobre todo la cuenca sur del lago
            Titicaca, aunque la presencia de sitios Tiwanaku en el lado norte
            sugiere algún tipo de aprovechamiento agrícola. En segundo lugar,
            las zonas intermedias de los valles serranos, como Cochabamba, y en
            tercer lugar los valles occidentales de la costa del área centro
            sur.
          </p>
        </div>

        <div className="politic-organization__container">
          <h3 className="politic-organization__subtitle">
            Organización política
          </h3>
          <p className="politic-organization__description">
            La diferenciación de las clases sociales estuvo marcada en la
            civilización Tiawanaku por una dualidad gobernante por un lado los
            kuracas con el chamanismo en las antiguas culturas del Titikaka
            estuvo estrechamente relacionado con los sacrificios humanos y
            Tiwanaku no fue una excepción. Algunos de estos chamanes figuran
            prominentemente en los dinteles y escalinatas que marcan el ingreso
            o el pasaje a los espacios sagrados más antiguos de la urbe. Y por
            el otro lado de la estructura piramidal administradores y artesanos
            especializados, con una gran base de agricultores y pastores.
          </p>
        </div>

        <img className="organization__img" src={placeholderJPG} alt="" />
      </div>

      <div className="cultural-achievements__container">
        <div className="cultural-achievements__subcontainer">
          <h2 className="cultural-achievements__title" id="logros-tiawanaku">
            Logros Culturales
          </h2>
          <p className="cultural-achievements__description">
            El sitio de Tiwanaku se encuentra en el lado sur del lago Titicaca,
            a 3 840 msnm, con un promedio poblacional que según algunos no
            excedía los 20 mil habitantes y un área aproximada de 300 ha. A la
            fecha sabemos que se componía de un conjunto de sectores
            diferenciados entre sí, tanto por sus funciones como por su
            estructura formal. Cada uno de ellos es percibido como estructuras
            independientes, en algunos casos definidas como conjuntos
            amurallados, y en otros como montículos artificiales. Akapana
            sobresale por su mayor dimensión y altura frente a los otros
            conjuntos y quizás haya sido el centro ceremonial más importante de
            Tiwanaku. Tiene 203 m de largo por 192 m de ancho y 16,50 m de
            altura. Investigaciones llevadas a cabo en la década de los 80 por
            Manzanilla y Kolata demostraron que se trata de un montículo
            artificial, construido sobre la base de 7 plataformas aterrazadas y
            superpuestas, cuyos muros tienen cada cierto tramo a manera de
            enchapes o muros de revestimiento, piedras labradas como pilares,
            que funcionan como soportes estructurales. Levantamientos
            topográficos, magnéticos y electrónicos realizados
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
          <h2 className="beliefs__title" id="creencias-tiawanaku">
            Creencias
          </h2>
          <p className="beliefs__description">
            La deidad principal de Tiwanaku es aquella conocida como la “Deidad
            de los Báculos”, que representaría a un dios celestial que podría
            ser el Tunupa de los aymaras tardíos, asociado al rayo y al trueno,
            según Conrad y Demarest. Otros investigadores ven en dicha imagen a
            la deidad solar, y otros más creen que sería la primigenia imagen de
            Wiracocha, tema que hemos referido al abordar la religión Wari. La
            representación más lograda aparece en la llamada Portada del Sol,
            donde la imagen principal aparece en alto relieve, rodeada de 3
            hileras de seres alados en bajo relieve. De su cabeza salen cabellos
            a manera de rayos y es la misma figura que los wari captan,
            transforman y difunden.
          </p>
        </div>
        <img className="beliefs__img" src={placeholderJPG} alt="" />
      </div>

      <div className="art__container">
        <div className="art__subcontainer">
          <h2 className="art__title" id="arte-tiawanaku">
            Arte
          </h2>
          <p className="art__description">
            Varios mitos recogidos por los españoles en el siglo XVI ubican el
            origen de los pueblos andinos en el sitio de Tiwanaku. Sostienen que
            de las profundidades del lago Titikaka emergió el dios Wirakocha,
            quien hizo salir el sol y la luna, y fue secando a la humanidad
            anterior hasta convertirla en piedra. En Tiwanaku dio nombres y
            trajes a cada nación y les ordenó poblar nuevamente el mundo. Como
            no había en los Andes otro objeto de mayor prestigio y, por lo
            tanto, más útil en el manejo del poder que los tejidos, en algún
            momento la elite convirtió el privilegio divino de regalar ropa en
            un privilegio de los gobernantes.
          </p>
        </div>
        <img className="art__img" src={placeholderJPG} alt="" />
      </div>

      <div className="questions-container">
        <QuestionsTest sectionId={sectionId} />
      </div>
    </section>
  );
};

export default CulturaCaral;
