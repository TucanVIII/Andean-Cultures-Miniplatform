import CaralQuestions from "../../features/questions/CaralQuestions.jsx";

import "../../styles/culturesArticle.css";

import placeholderJPG from "../../assets/react.svg";
import CronologiaInca from "../../assets/CronologiaInca.png";

const CulturaCaral = () => {
  const content = (
    <section className="main-culture__container">
      <div className="main-title__container">
        <h1>Cultura Inca</h1>
      </div>

      <div className="background__container">
        <h2 className="background__title" id="antecedentes-inca">
          Antecedentes
        </h2>
        <p className="background__description">
          El llamado Estado inca tuvo un tardío desenvolvimiento en el concierto
          de las altas culturas prehispánicas; milenios lo separan de los
          inicios de la civilización. Los arqueólogos inician la clasificación
          del surgimiento de las culturas andinas con una época Lítica, de
          recolectores y cazadores; continúan con la introducción de la
          agricultura en la época Arcaica; sostienen luego que durante la época
          Formativa se inician las sociedades y los señoríos teocráticos que se
          extienden en el tiempo hasta después de la era cristiana y que dan
          origen a los Desarrollos Regionales Tempranos, seguidos a su vez por
          la última etapa, llamada de los Estados Militaristas.
        </p>
      </div>

      <div className="geographical-location__container">
        <h2 className="geographical-location__title" id="ubicacion-inca">
          Ubicación geográfica
        </h2>
        <div className="geographical-location__subcontainer">
          <p className="geographical-location__description">
            Su control se extendió sobre gran parte de los andes centrales desde
            el norte en el sur de Colombia lo que hoy es Pasto, controlando la
            sierra y costa de Ecuador, la sierra y costa de Perú, los andes de
            Bolivia y parte de Chile hasta el río Maule. En su periodo de máximo
            apogeo llegó a controlar casi 2.5 millones de kilómetros cuadrados.
          </p>
          <img
            className="geographical-location__img"
            src={placeholderJPG}
            alt=""
          />
        </div>
      </div>

      <div className="history__container">
        <h2 className="history-title" id="historia-inca">
          Historia
        </h2>
        <p className="history-description">
          El inicio de la civilización incaica se remontaría aproximadamente al
          año 1100 de nuestra era, aunque este supuesto inicio, está basado,
          como suele ser habitual, en una leyenda. La tradición cuenta que un
          héroe civilizador llamado Manco Cápac, hijo del sol, fundó la ciudad
          del Cuzco en un valle entre la confluencia de dos ríos. Éste había
          sido enviado por el sol junto a su hermana y esposa Mamá Ocllo, con el
          objeto de que reuniesen a los naturales en poblaciones y los
          convirtieran en seres civilizados, debido a que el astro rey se había
          compadecido del estado de barbarie y abandono en el que estaban
          viviendo los hombres. Las circunscripciones territoriales y
          administrativas del imperio denominadas suyos eran cuatro,
          Chinchaysuyo, Collasuyo, Antisuyo y Contisuyo.
        </p>
        <h2>Cronología de los incas</h2>
        <ul className="ul-culture__list">
          <li>
            Se sabe que durante mucho tiempo, existió en la zona una intensa
            rivalidad entre los descendientes de Manco Cápac y el pueblo de los
            Chancas. El final de este enfrentamiento daría al triunfador la
            posibilidad de lograr la hegemonía sobre el valle y lanzarse a una
            aventura expansionista. Aproximadamente en el año 1438 se dio este
            final, con el triunfo definitivo de los Incas sobre sus aguerridos
            rivales.
          </li>
          <li>
            Durante el gobierno de Pachacútec correino junto a él su hijo Túpac
            Yupanqui, que continuo la expansión cuando su padre se centró en la
            administración del Cuzco. Túpac Yupanqui no solo reafirmará las
            fronteras, sino que logrará una de las grandes conquistas del
            Tahuantinsuyo, el reino Chimú.
          </li>
          <li>
            Túpac Yupanqui prosiguió con la conquista del Collasuyo hasta llegar
            al río Maipú, a 35º latitud sur, en el actual Chile.
          </li>
          <li>
            Túpac Yupanqui había tenido un hijo llamado Tito Cusi Huallpa, quien
            le sucederá con el nombre de Huayna Cápac. Su gobierno comenzó
            cuando aún era bastante joven y por ello tuvo unos inicios
            turbulentos. Su preocupación inicial fue la de mantener a raya las
            rebeliones, para lo cual tuvo tanto que reforzar la presencia inca
            allí donde fuera necesario
          </li>
          <li>
            Lograda la estabilidad en el imperio se dispuso a terminar la
            conquista del norte. Como primer paso estableció en Tomebamba, su
            lugar de nacimiento, el centro de operaciones. Esta localidad era un
            importante centro religioso para los cañaris, que, en gran parte,
            fueron trasladados al valle de Yucay, que Huayna Cápac había mandado
            acondicionar y poblar
          </li>
          <li>
            Tras un breve retorno al Cuzco y dejar de sucesor a su hijo Huáscar,
            partió a la conquista definitiva del norte junto a un gran número de
            nobles tanto Hanan como Hurin, además de otro de sus hijos,
            Atahualpa.
          </li>
          <li>
            Huayna Cápac, al disponerse a partir de nuevo al Cuzco, se contagió
            de una enfermedad extraña, que incluso ya hacía estragos en la
            propia capital 24 . La muerte súbita del Sapa Inca provocó una
            sucesión complicada
          </li>
          <li>
            La tensión existente terminó desembocando en una guerra sucesoria
            entre Huáscar y Atahualpa, que sin embargo no era una simple lucha
            entre dos hermanos, sino entre los representantes de dos bandos
            opuestos de la elite. Aunque fueran hermanos, no compartían madre
          </li>
          <li>
            Huáscar durante su cautiverio será asesinado por orden de Atahualpa,
            quien en esos momentos ya se encontraba en su propio cautiverio en
            Cajamarca, tras ser apresado por los hombres de Pizarro.
          </li>
          <li>
            Atahualpa fue ejecutado por los españoles y con el murió el
            Tahuantinsuyo. Aunque, en un primer momento, los españoles alzasen
            en el poder a dos hijos de Huayna Capac, a Túpac Hualpa, que murió
            rápidamente, y a Mango Inca, éstos no fueron más que marionetas en
            manos de los nuevos soberanos de los Andes.
          </li>
        </ul>
        <img
          className="chronology__img"
          src={CronologiaInca}
          alt="CronologiaInca"
        />
      </div>

      <div className="organization__container">
        <h2 className="organization__title" id="organizacion-inca">
          Organización
        </h2>

        <div className="social-organization__container">
          <h3 className="social-organization__subtitle">Organización social</h3>
          <p className="social-organization__description">
            Este estado estuvo dirigido por una etnia convertida en elite, la
            inca, cuyo mayor exponente era el Sapa Inca. Su poder, sin embargo,
            no fue absoluto, ya que en su contra estaban tanto la extensión del
            imperio como el principio en el que se basó su rápida expansión, la
            tolerancia al orden social y político preexistente en las
            poblaciones subyugadas. De esta forma, la autoridad del Sapa Inca no
            se hacía presente a nivel local sino a través de una serie de
            intermediarios, es decir, ejercía un gobierno indirecto.
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
            <ul className="ul-culture__list">
              <li>
                <b>Curacas.-</b> Autoridad de actividades administrativas,
                agrarias, económicas, constructivas y religiosas de las
                pachacas. Este es el nivel donde se encontraban los
                intelectuales o científicos y sacerdotes
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
          </p>
        </div>

        <img className="organization__img" src={placeholderJPG} alt="" />
      </div>

      <div className="cultural-achievements__container">
        <div className="cultural-achievements__subcontainer">
          <h2 className="cultural-achievements__title" id="logros-inca">
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
          <h2 className="beliefs__title" id="creencias-inca">
            Creencias
          </h2>
          <p className="beliefs__description">
            Todas las actividades de esta civilización estaban imbuidas de
            religión, todo era místico y, de una forma u otra, todo tenía origen
            o destino divino. El espíritu profundamente religioso del pueblo era
            exacerbado por la acción del Estado para que constantemente se
            profundizara aún más y más, diseñando una intrincada parafernalia de
            dioses, ritos y ofrendas sin los cuales era imposible llevar
            adelante la vida sin verse afectado por poderosas fuerzas
            sobrenaturales. El temor a lo desconocido promovido en el pueblo por
            la religión oficial, operaba como elemento fundamental para la
            unidad del imperio y la dominación de las enormes masas que lo
            conformaban.
          </p>
        </div>
        <img className="beliefs__img" src={placeholderJPG} alt="" />
      </div>

      <div className="art__container">
        <div className="art__subcontainer">
          <h2 className="art__title" id="arte-inca">
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

      <div className="video__container">
        <h2 id="video-inca">Video</h2>
        <img src="" alt="" />
      </div>

      <div className="questions-container">
        <CaralQuestions />
      </div>
    </section>
  );

  return content;
};

export default CulturaCaral;
