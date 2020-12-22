import { useState, useEffect } from "react";
import FiltersContainer from "./FiltersContainer";
import GoalsContainer from "./GoalsContainer";
import FriendsContainer from "./FriendsContainer";
import { getUserGoals } from "../create-goal/CreateContainer";

function DashboardFirstRow() {
  const [initialGoals, setInitialGoals] = useState([]);
  const [goals, setGoals] = useState([]);
  const [goalsLength, setGoalsLength] = useState(0);
  const [isGoals, setIsGoals] = useState(false);
  const [offset, setOffset] = useState(0);
  const [goalsPerPage, setGoalsPerPage] = useState(5);
  const passInitialGoals = async () => {
    const goals = await getUserGoals();
    setIsGoals(true);
    setInitialGoals(goals);
    setGoals(goals.slice(offset, offset + goalsPerPage));
    setGoalsLength(goals.length);
  };

  if (!isGoals) {
    passInitialGoals();
  }

  // if (window.innerWidth < 800) {
  //   setGoalsPerPage(3);
  // }

  useEffect(() => {
    passInitialGoals();
  }, [offset]);

  const sortGoals = (categories) => {
    let newGoals = categories.map((category) =>
      initialGoals.filter((goal) => goal.category === category)
    );
    newGoals = newGoals.reduce((acc, el) => [...acc, ...el], []);
    setGoalsLength(newGoals.length);
    const goals = newGoals.slice(offset, offset + goalsPerPage);
    setGoals(goals);
  };

  const filterGoals = (categories) => {
    if (!categories || !categories.length) {
      const goals = initialGoals.slice(offset, offset + goalsPerPage);
      setGoals(goals);
      setGoalsLength(initialGoals.length);
    } else {
      sortGoals(categories);
    }
  };

  return (
    <div className="row dashboard-first-row">
      <div className="dashboard-left-panel">
        <FiltersContainer sortGoals={sortGoals} filterGoals={filterGoals} />
        <GoalsContainer
          goals={goals}
          goalsLength={goalsLength}
          setOffset={setOffset}
          offset={offset}
        />
      </div>
      {/* <div className="dashboard-right-panel">
        <FriendsContainer />
      </div> */}
    </div>
  );
}

export default DashboardFirstRow;
