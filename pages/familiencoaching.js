// data
import { data, meta } from "../data/familyCoachingData";

// components
import ImageSquare from "../components/utils/ImageSquare";
import Headline from "../components/utils/Headline";
import Text from "../components/utils/Text";
import InfoBox from "../components/utils/InfoBox";
import InfoBoxSquare from "../components/utils/InfoBoxSquare";
import SEO from "../components/SEO";

// style
import style from "../styles/ProductPage.module.css";

const fruehfoerderung = () => {
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
      <section className={style.landingSectionContainer}>
        <div className={style.landingImageContainer}>
          <ImageSquare
            src={data.LandingSection.imageOne.src}
            alt={data.LandingSection.imageOne.alt}
            pos={65}
          />
        </div>
        <div className={style.infoBoxOne}>
          <Headline primary={false}>{data.LandingSection.title}</Headline>
          <Text center={true}>{data.LandingSection.introText}</Text>
        </div>
      </section>
      <section className={style.sectionTwoContainer}>
        <InfoBox
          color="blue"
          title={data.sectionTwo.title}
          text={data.sectionTwo.text}
          wordbreak={true}
        />
      </section>
      <section className={style.sectionThreeContainer}>
        <div className={style.sectionThreeInfoBox}>
          <InfoBoxSquare color="blue" text={data.sectionThree.infoBox.text} />
        </div>
        <div className={style.sectionThreeImage}>
          <ImageSquare
            src={data.sectionThree.imageTwo.src}
            alt={data.sectionThree.imageTwo.alt}
          />
        </div>
      </section>
    </>
  );
};

export default fruehfoerderung;
