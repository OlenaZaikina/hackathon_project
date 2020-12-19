import ChristmasEvent from "./ChristmasEvent";
import achievementsIcon from "../../assets/dashboard-achievements.svg";

function DashboardSecondRow() {
  return (
    <div className="row dashboard-second-row">
      <div className="dashboard-left-panel">
        <div className="achievements">
          <h3>Badges</h3>
          <span className="icon">
            <img src={achievementsIcon}></img>
          </span>
          <p>Go to see all your badges</p>
        </div>
      </div>
      <div className="dashboard-right-panel">
        <ChristmasEvent />
      </div>
    </div>
  );
}

export default DashboardSecondRow;
