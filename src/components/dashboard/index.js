import FiltersContainer from "./FiltersContainer";
import UserGoalsContainer from "./UserGoalsContainer";
import FriendsContainer from "./FriendsContainer";

import DashboardFirstRow from "./DashboardFirstRow";
import DashboardSecondRow from "./DashboardSecondRow";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardFirstRow />
      <DashboardSecondRow />
    </div>
  );
}

export default Dashboard;
