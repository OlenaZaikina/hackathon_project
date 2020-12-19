import Goal from "./Goal";
import "./index.scss";

function UserGoalsContainer() {
  const goals = [
    { percentage: 10, goal: "quite smoke", category: "health" },
    { percentage: 50, goal: "walk with dog", category: "other" },
    { percentage: 100, goal: "dring water", category: "health" },
    { percentage: 10, goal: "quite smoke2", category: "health" },
    { percentage: 50, goal: "walk with dog2", category: "other" },
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
