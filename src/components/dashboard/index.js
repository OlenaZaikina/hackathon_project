import FiltersContainer from "./FiltersContainer";
import UserGoalsContainer from "./UserGoalsContainer";
import FriendsContainer from './FriendsContainer';

function Dashboard() {
  return (
    <>
      <div className="dashboard-left-panel">
        <FiltersContainer />
        <UserGoalsContainer />
      </div>
      <div className="dashboard-right-panel">
        <FriendsContainer />
      </div>
    </>
  );
}

export default Dashboard;
