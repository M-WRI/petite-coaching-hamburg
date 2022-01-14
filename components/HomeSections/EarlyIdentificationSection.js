import ImageSquare from "../utils/ImageSquare";
import InfoBoxSquare from "../utils/InfoBoxSquare";

const EarlyIdentification = () => {
  const data = {
    imageOne: {
      src: "/images/start-frühförderung-1.jpg",
      alt: "teresa jäger frühförderung hamburg",
      type: "early-image-one",
    },
    imageTwo: {
      src: "/images/start-frühförderung-2.jpg",
      alt: "teresa jäger frühförderung hamburg",
      type: "early-image-two",
    },
    infoBox: {
      title: "Frühförderung",
      text: "Jedes Kind entwickelt sich einzigartig. Wir entwickeln eine einzigartige Förderung",
    },
  };

  return (
    <section className="early-container">
      <ImageSquare
        src={data.imageOne.src}
        alt={data.imageOne.alt}
        type={data.imageOne.type}
        pos={65}
      />
      <div className="early-content-box">
        <div className="early-infobox">
          <InfoBoxSquare
            color="blue"
            title={data.infoBox.title}
            text={data.infoBox.text}
          />
        </div>
        <ImageSquare
          src={data.imageTwo.src}
          alt={data.imageTwo.alt}
          type={data.imageTwo.type}
        />
      </div>
      {/* <div className={style.contentContainer}>
        <motion.div
          className={style.contentInformation}
          // initial={{ opacity: 0 }}
          animate={contBox}
          variants={animation}
        >
          <h2 className={style.contentHead}>Frühförderung</h2>
          <p className={style.contentText}>
            Jedes Kind entwickelt sich einzigartig Wir entwickeln eine
            einzigartige Förderung
          </p>
          <Image
            src="/images/arrow-down.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </motion.div>
        <motion.div
          className={style.contentImage}
          // initial={{ opacity: 0, y: "100%" }}
          animate={imgTwo}
          variants={animation}
        >
          <Image
            src="/images/start-frühförderung-2.jpg"
            alt="Frühförderung"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </motion.div>
      </div> */}
    </section>
  );
};

export default EarlyIdentification;
