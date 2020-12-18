import FilterButton from "./FilterButton";
import "./index.scss";

function FiltersContainer() {
  const configs = [
    {
      status: "create-new",
      text: "-",
    },
    {
      status: "done",
      text: "Done",
    },
    {
      status: "in-progress",
      text: "In progress",
    },
    {
      status: "all",
      text: "All",
    },
  ];

  return (
    <div className="filters-container">
      {configs.map((el) => (
        <FilterButton key={el.status} config={el} />
      ))}
    </div>
  );
}

export default FiltersContainer;
