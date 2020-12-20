import { useState } from "react";
import FiltersContainer from "./FiltersContainer";
import GoalsContainer from "./GoalsContainer";
import FriendsContainer from "./FriendsContainer";

const goalsInitial = [
  { percentage: 10, goal: "quite smoke", category: "health" },
  { percentage: 50, goal: "walk with dog", category: "other" },
  { percentage: 100, goal: "dring water", category: "health" },
  { percentage: 10, goal: "quite smoke2", category: "health" },
  { percentage: 50, goal: "walk with dog2", category: "other" },
];

function DashboardFirstRow() {
  const [goals, setGoals] = useState(goalsInitial);

  const sortGoals = (categories) => {
    let newGoals = categories.map((category) =>
      goals.filter((goal) => goal.category === category)
    );
    newGoals = newGoals.reduce((acc, el) => [...acc, ...el], []);
    setGoals(newGoals);
  };

  const filterGoals = (categories) => {
    console.log(categories);
    if (!categories || !categories.length) {
      setGoals(goalsInitial);
    } else {
      let newGoals = categories.map((category) =>
        goalsInitial.filter((goal) => goal.category === category)
      );
      newGoals = newGoals.reduce((acc, el) => [...acc, ...el], []);
      setGoals(newGoals);
    }
  };

  return (
    <div className="row dashboard-first-row">
      <div className="dashboard-left-panel">
        <FiltersContainer sortGoals={sortGoals} filterGoals={filterGoals} />
        <GoalsContainer goals={goals} />
      </div>
      <div className="dashboard-right-panel">
        <FriendsContainer />
      </div>
    </div>
  );
}

export default DashboardFirstRow;
