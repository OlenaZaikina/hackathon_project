import { useState, useEffect } from "react";
import FiltersContainer from "./FiltersContainer";
import GoalsContainer from "./GoalsContainer";
import { getUserGoals } from "../create-goal/CreateContainer";

// export const getGoalsByStatus = async (status) => {
//   try {

//     if (status === 'all') {
//       status = '';
//     }
//     const response = await fetch(


//       "https://cryptic-mesa-87242.herokuapp.com/" +
//       `http://34.222.107.139:8080/goaltracker/api/users/goals/status/${status}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "http://localhost:3000",
//           "Access-Control-Allow-Credentials": "true",
//           Authorization:
//             "Bearer " + JSON.parse(localStorage.getItem("user")).token,
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data)
//     return data;
//   } catch (err) {
//     return err.message;
//   }
// };

function DashboardFirstRow() {
  const [initialGoals, setInitialGoals] = useState([]);
  const [goals, setGoals] = useState([]);
  const [goalsLength, setGoalsLength] = useState(0);
  const [isGoals, setIsGoals] = useState(false);
  const [offset, setOffset] = useState(0);
  const [goalsPerPage] = useState(5);

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

  // const filterByStatus = async (status) => {
  //   const goals = await getGoalsByStatus(status);
  //   console.log("GOAAALS", goals)
  //   setIsGoals(true);
  //   setInitialGoals(goals);
  //   setGoals(goals.slice(offset, offset + goalsPerPage));
  //   setGoalsLength(goals.length);
  // };

  return (
    <div className="row dashboard-first-row">
      <div className="dashboard-left-panel">
        <FiltersContainer
          sortGoals={sortGoals}
          filterGoals={filterGoals}
          // filterByStatus={filterByStatus}
        />

        
        <GoalsContainer
          goals={goals}
          goalsLength={goalsLength}
          setOffset={setOffset}
          offset={offset}
        />
      </div>
    </div>
  );
}

export default DashboardFirstRow;
