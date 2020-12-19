import Feature from "./Feature";
import './style.scss';


function FeaturesContainer() {


  const cardsData = [
    {
      title: "Set SMART goals and stay on track",
      content: "Flexible and accurate progress tracking support"
    },
    {
      title: "Build action plans",
      content: "Plan and organize the necessary steps that you need to take in order to accomplish your goals"
    }, {
      title: "Get funny and smart badges",
      content: "With each accomplishment take a step back and celebrate your success - collect our badges!"
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
