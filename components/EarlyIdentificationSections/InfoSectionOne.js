import InfoBox from "../utils/InfoBox";

const InfoSectionOne = () => {
  const data = {
    title: `Jedes Kind  kann Teilhaben`,
    text: "Die Entwicklung Ihres Kindes - in den ersten drei Lebensjahren, mit und ohne Entwicklungsschwierigkeiten oder Behinderung - liegt mir am Herzen Mit Petite Coaching Hamburg erhalten Sie nur das Beste für Ihr Kind.",
  };
  return (
    <section className="ealry-info-section-container">
      <InfoBox
        color="blue"
        title={data.title}
        text={data.text}
        wordbreak={true}
      />
    </section>
  );
};

export default InfoSectionOne;
