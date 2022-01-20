import InfoBox from "../utils/InfoBox";

const InfoSectionOne = () => {
  const data = {
    title: `Tun Sie sich  Etwas gutes`,
    text: "Tun Sie sich etwas Gutes und buchen Sie ein individuelles Familiencoaching. Ich berate und coache Sie gerne, wenn Sie sich mit Problemen zu den Themen Schlaf, kindliche Entwicklung und Verhalten, vermehrtes Weinen, Bindung und Bedürfnisorientierung konfrontiert sehen.",
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
