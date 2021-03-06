// data
import { data, meta } from "../data/aboutMeData";

// conponents
import ImageSquare from "../components/utils/ImageSquare";
import InfoBox from "../components/utils/InfoBoxSquare";
import Headline from "../components/utils/Headline";
import Text from "../components/utils/Text";
import SEO from "../components/SEO";

// style
import style from "../styles/AboutMe.module.css";
import Script from "next/script";

const AboutMe = () => {
  const {
    imageOne,
    imageTwo,
    imageGal,
    imageFour,
    infoBox,
    infoBoxTwo,
    infoBoxThree,
    infoBoxFour,
    infoBoxFive,
  } = data;
  const { title, description, link, img, imgTwitter } = meta;

  return (
    <>
      <SEO
        title={title}
        description={description}
        link={link}
        img={img}
        imgTwitter={imgTwitter}
      />
      <section className={style.landingContainer}>
        <div className={style.imageOne}>
          <ImageSquare src={imageOne.src} alt={imageOne.alt} pos={65} />
        </div>
        <div className={style.imageTwo}>
          <ImageSquare src={imageTwo.src} alt={imageTwo.alt} />
        </div>
        <div className={style.infoBox}>
          <InfoBox title={infoBox.title} text={infoBox.text} />
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionTwo}>
        <div className={style.sectionTwoHead}>
          <Headline primary={false} wordbreak={true}>
            {infoBoxTwo.title}
          </Headline>
        </div>
        <div>
          <Text>{infoBoxTwo.paragraphOne}</Text>
          <Text>{infoBoxTwo.paragraphTwo}</Text>
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionThree}>
        <div>
          <Text>{infoBoxThree.paragraphOne}</Text>
          <Text>{infoBoxThree.paragraphTwo}</Text>
        </div>
        <div className={style.imageThree}>
          <ImageSquare
            src={imageGal.imageOne.src}
            alt={imageGal.imageOne.alt}
          />
          <ImageSquare
            src={imageGal.imageTwo.src}
            alt={imageGal.imageTwo.alt}
          />
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionFour}>
        <div className={style.infoBoxTwo}>
          <InfoBox title={infoBoxFour.box.title} text={infoBoxFour.box.text} />
        </div>
        <div>
          <Text>{infoBoxFour.paragraphOne}</Text>
        </div>
      </section>
      {/* ==== */}
      <section className={style.sectionFive}>
        <div className={style.imageFour}>
          <ImageSquare src={imageFour.src} alt={imageFour.alt} pos={65} />
        </div>
        <div>
          <Text>{infoBoxFive.paragraphOne}</Text>
          <Text>{infoBoxFive.paragraphTwo}</Text>
          <Text>{infoBoxFive.paragraphThree}</Text>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
