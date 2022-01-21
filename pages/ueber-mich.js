import ImageSquare from "../components/utils/ImageSquare";
import InfoBox from "../components/utils/InfoBoxSquare";
import Headline from "../components/utils/Headline";
import Text from "../components/utils/Text";

// style
import style from "../styles/AboutMe.module.css";

const AboutMe = () => {
  const data = {
    imageOne: {
      src: "/images/teresa-jaeger-about-me-one.jpg",
      alt: "Pädagogin, B.A. transdisziplinäre Frühförderin und Gründerin von Petite Coaching",
    },

    imageTwo: {
      src: "/images/teresa-jaeger-about-me-two.jpg",
      alt: "Pädagogin, B.A. transdisziplinäre Frühförderin und Gründerin von Petite Coaching",
    },

    infoBox: {
      title: "Teresa Jäger",
      text: "Ich bin Pädagogin, B.A. transdisziplinäre Frühförderin und Gründerin von Petite Coaching Hamburg.",
    },

    infoBoxTwo: {
      title: "Mein Herz schlägt für Babys und Kleinkinder",
      paragraphOne:
        "in Ihren unterschiedlichen kleinen Persönlichkeiten, ihrer Neugier und Begeisterungsfähigkeit für die kleinen Dinge, sowie der Toleranz für Vielfalt und Einzigartigkeit bereichern sie doch unser Leben.",
      paragraphTwo:
        "So ist Petite Coaching Hamburg ein Herzensprojekt, mit dem ich Sie und Ihr Kind dabei unterstütze, ein erfülltes Familienleben zu führen: durch mehr Achtsamkeit, echte Wertschätzung, Freude und Leichtigkeit, sowie durch eine individuelle Frühförderung und Familiencoaching.",
    },

    imageThree: {
      src: "/images/teresa-jaeger-about-me-four.jpg",
      alt: "Pädagogin, B.A. transdisziplinäre Frühförderin und Gründerin von Petite Coaching",
    },

    infoBoxThree: {
      paragraphOne:
        "Ich bin selbst ehemaliges Frühförderkind. Was sich meine Mama damals gewünscht hat? Echtes Verständnis. Ein Gegenüber, das ihr zuhört. Ein Gegenüber, das die Probleme und Verzweiflung ernst nimmt. Ein Gegenüber, das sagt: „Es ist nicht Ihre Schuld.“ Und ein Gegenüber, das dann mit Fachwissen und Herzlichkeit Wegbegleiter ist, wenn das Familienleben auf wackeligen Füßen steht und die Sorge um das eigene Kind groß ist.",
      paragraphTwo:
        "Nun möchte ich Frühförderung und Familiencoaching auf eine neue, zeitgemäße Ebene bringen. Angepasst an einen modernen Lifestyle, mit viel Liebe zum Detail und auch digital auf dem neuesten Stand. Mein pädagogisches Wissen von fachlich bester Qualität ist dabei unerlässlich.",
    },

    infoBoxFour: {
      box: {
        title: "„Es muss von Herzen kommen, was auf Herzen wirken soll“",
        text: "– Johann Wolfgang von Goethe",
      },
      paragraphOne:
        "Nach meiner Ausbildung zur Erzieherin, welche ich am wunderschönen Bodensee abschließen durfte, führte mein Weg zum Tor zur Welt – nach Hamburg. Durch mein Bachelorstudium in Transdisziplinärer Frühförderung und meine mehrjährigen Erfahrungen mit Kitas, Frühförderstellen und Familien wuchs der Wunsch, meine eigenen Visionen in der pädagogischen Arbeit zu verwirklichen.",
    },

    imageFour: {
      src: "/images/theresa-jaeger-about-me-three.jpg",
      alt: "Pädagogin, B.A. transdisziplinäre Frühförderin und Gründerin von Petite Coaching",
    },

    infoBoxFive: {
      paragraphOne:
        "Mit großer Leidenschaft darf ich also nun schon seit vielen Jahren so wertvolle Erfahrungen in der Arbeit mit Kleinkindern und jungen Familien machen und mein fachliches Wissen mit Ihnen teilen.",
      paragraphTwo:
        "Petite Coaching Hamburg steht für ein exzellentes Gesamtkonzept der Frühförderung: eine wertschätzende Haltung zum Kind, die partnerschaftliche Kommunikation mit dir, sowie der Einsatz von zertifiziertem, entwicklungsförderndem Spielmaterial.",
      paragraphThree:
        "Auf eine gemeinsame Reise mit Ihnen und Ihren Kindern freue ich mich sehr.",
    },
  };

  return (
    <>
      <section className={style.landingContainer}>
        <div className={style.imageOne}>
          <ImageSquare
            src={data.imageOne.src}
            alt={data.imageOne.alt}
            pos={65}
          />
        </div>
        <div className={style.imageTwo}>
          <ImageSquare src={data.imageTwo.src} alt={data.imageTwo.alt} />
        </div>
        <div className={style.infoBox}>
          <InfoBox title={data.infoBox.title} text={data.infoBox.text} />
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionTwo}>
        <div className={style.sectionTwoHead}>
          <Headline primary={false} wordbreak={true}>
            {data.infoBoxTwo.title}
          </Headline>
        </div>
        <div>
          <Text>{data.infoBoxTwo.paragraphOne}</Text>
          <Text>{data.infoBoxTwo.paragraphTwo}</Text>
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionThree}>
        <div>
          <Text>{data.infoBoxThree.paragraphOne}</Text>
          <Text>{data.infoBoxThree.paragraphTwo}</Text>
        </div>
        <div className={style.imageThree}>
          <ImageSquare
            src={data.imageThree.src}
            alt={data.imageThree.alt}
            pos={65}
          />
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionFour}>
        <div className={style.infoBoxTwo}>
          <InfoBox
            title={data.infoBoxFour.box.title}
            text={data.infoBoxFour.box.text}
          />
        </div>
        <div>
          <Text>{data.infoBoxFour.paragraphOne}</Text>
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionFive}>
        <div className={style.imageFour}>
          <ImageSquare
            src={data.imageFour.src}
            alt={data.imageFour.alt}
            pos={65}
          />
        </div>
        <div>
          <Text>{data.infoBoxFive.paragraphOne}</Text>
          <Text>{data.infoBoxFive.paragraphTwo}</Text>
          <Text>{data.infoBoxFive.paragraphThree}</Text>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
