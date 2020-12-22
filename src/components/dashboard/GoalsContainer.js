import Goal from "./Goal";
import PaginatePanel from "./PaginatePanel";
import "./index.scss";

function GoalsContainer({ goals, setOffset, offset, goalsLength }) {
  return (
    <>
      {goalsLength === 0 && <p>No goals here!</p>}


      {goalsLength !== 0 &&
        <div className="goals-container">
          {goals.map((el) => (
            <Goal key={`${el.id}`} config={el} />
          ))}
        </div>
      }

      {goalsLength > 5 && (
        <PaginatePanel
          setOffset={setOffset}
          offset={offset}
          goalsLength={goalsLength}
        />
      )}
    </>
  );
}

export default GoalsContainer;
