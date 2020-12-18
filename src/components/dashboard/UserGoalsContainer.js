import Goal from "./Goal";
import "./index.scss";

function UserGoalsContainer() {
  const goals = [
    { percentage: 10, goal: "quite smoke" },
    { percentage: 50, goal: "walk with dog" },
    { percentage: 100, goal: "dring water" },
  ];

  return (
    <div className="goals-container">
      {goals.map((el) => (
        <Goal key={`${el.goal}`} config={el} />
      ))}
    </div>
  );
}

export default UserGoalsContainer;
