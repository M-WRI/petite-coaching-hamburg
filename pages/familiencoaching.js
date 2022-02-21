// data
import { data, meta } from "../data/familyCoachingData";

// components
import ImageSquare from "../components/utils/ImageSquare";
import Headline from "../components/utils/Headline";
import Text from "../components/utils/Text";
import InfoBoxSquare from "../components/utils/InfoBoxSquare";
import SEO from "../components/SEO";

// style
import style from "../styles/ProductPage.module.css";
import Script from "next/script";

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
      <section className={style.sectionTwoContainerFam}>
        <div className={style.serviceWrapper}>
          <div className={style.square}></div>
          <h3>Kindliches Verhalten & Entwicklung</h3>
        </div>

        <div className={style.serviceWrapper}>
          <div className={style.square}></div>
          <h3>Ein- & Durchschlafen</h3>
        </div>

        <div className={style.serviceWrapper}>
          <div className={style.square}></div>
          <h3>Vermehrtes Weinen</h3>
        </div>

        <div className={style.serviceWrapper}>
          <div className={style.square}></div>
          <h3>Strukturen im Familienalltag</h3>
        </div>

        <div className={style.serviceWrapper}>
          <div className={style.square}></div>
          <h3>Bindung & Bedürfnisorientierung</h3>
        </div>
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
