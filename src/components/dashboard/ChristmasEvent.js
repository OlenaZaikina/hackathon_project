import { Link } from "react-router-dom";

function ChristmasEvent() {
  return (
    <div className="christmas-event">
      <div className="text">
        <h3>Our special Christmas Event!</h3>
        <p>
          <Link to={"/event"}>Go to page about event</Link>
        </p>
      </div>
    </div>
  );
}

export default ChristmasEvent;
