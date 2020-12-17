import Feature from "./Feature";
import './style.scss';


function FeaturesContainer() {


  const cardsData = [
    {
      title: "Advocate1",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis eius in? Eius, totam facilis."
    },
    {
      title: "Advocate2",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis eius in? Eius, totam facilis."
    }, {
      title: "Advocate3",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis eius in? Eius, totam facilis."
    }
  ]

  return (
    <section className="features-section">
      <h2>Best for Tracking Both Good and Bad Habits,<br /> Best for Tracking Anything You Want</h2>
      <div className="features">
        {cardsData.map((el, index) => <Feature key={el.title} title={el.title} content={el.content} />)}
      </div>
    </section>
  );
}

export default FeaturesContainer;
