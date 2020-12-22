import Goal from "./Goal";
import "./index.scss";

function GoalsContainer({ goals }) {
  console.log(goals);

  return (
    <div className="goals-container">
      {/* {goals.map((el) => (
        <Goal key={`${el.goal}`} config={el} />
      ))} */}
    </div>
  );
}

export default GoalsContainer;
