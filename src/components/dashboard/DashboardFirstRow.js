import FiltersContainer from "./FiltersContainer";
import UserGoalsContainer from "./UserGoalsContainer";
import FriendsContainer from "./FriendsContainer";

function DashboardFirstRow() {
  return (
    <div className="row dashboard-first-row">
      <div className="dashboard-left-panel">
        <FiltersContainer />
        <UserGoalsContainer />
      </div>
      <div className="dashboard-right-panel">
        <FriendsContainer />
      </div>
    </div>
  );
}

export default DashboardFirstRow;
