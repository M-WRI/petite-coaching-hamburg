// data
import { data, meta } from "../data/homeData";

// components
import Headline from "../components/utils/Headline";
import CoverImage from "../components/utils/CoverImage";
import ImageSquare from "../components/utils/ImageSquare";
import InfoBoxSquare from "../components/utils/InfoBoxSquare";
import LinkBox from "../components/utils/LinkBox";
import InstagramComponent from "../components/InstagramComponent";
import InfoBox from "../components/utils/InfoBox";
import SEO from "../components/SEO";

// style
import style from "../styles/Home.module.css";

export default function Home() {
  const { landingSection, sectionTwo, sectionThree, sectionFour } = data;
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
        <div className={style.headContainer}>
          <Headline>{landingSection.headline}</Headline>
          <Headline type="partII" subHead={landingSection.subHead}>
            {landingSection.headlineII}
          </Headline>
        </div>
        <div className={style.landingCoverImageContainer}>
          <CoverImage
            src={landingSection.landingImage.src}
            alt={landingSection.landingImage.alt}
            overlay={true}
            pos={40}
          />
        </div>
      </section>
      <section className={style.sectionTwoContainer}>
        <div className={style.sectionTwoImageOne}>
          <ImageSquare
            src={sectionTwo.imageOne.src}
            alt={sectionTwo.imageOne.alt}
            pos={65}
          />
        </div>
        <div className={style.sectionTwoInfoBoxContainer}>
          <div className={style.sectionTwoContentWrapper}>
            <InfoBoxSquare
              color="blue"
              data={false}
              title={sectionTwo.infoBox.title}
              text={sectionTwo.infoBox.text}
            />
          </div>
          <div className={style.sectionTwoImageTwo}>
            <ImageSquare
              src={sectionTwo.imageTwo.src}
              alt={sectionTwo.imageTwo.alt}
              type={sectionTwo.imageTwo.type}
            />
          </div>
        </div>
      </section>
      <section className={style.sectionThreeContainer}>
        <div className={style.sectionThreeInfoBox}>
          <InfoBoxSquare
            // title={sectionThree.infoBox.title}
            // text={sectionThree.infoBox.text}
            data={sectionThree.infoBox}
          />
        </div>
        {sectionThree.links.map((link) => (
          <LinkBox
            key={link.id}
            title={link.title}
            slug={link.slug}
            img={link.img}
          />
        ))}
      </section>
      {/* <InstagramComponent /> */}
      <section className={style.sectionFourContainer}>
        <div className={style.sectionFourInfoBox}>
          <InfoBox
            title={sectionFour.title}
            text={sectionFour.text}
            wordbreak={true}
          />
        </div>
        <div className={style.sectionFourImage}>
          <div className={style.sectionFourCoverImageContainer}>
            <CoverImage
              src={sectionFour.image.src}
              alt={sectionFour.image.alt}
              pos={50}
              overlay={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
