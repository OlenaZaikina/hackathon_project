import { useState } from "react";
import FilterButton from "./FilterButton";
import SelectCategory from "./SelectCategory";
import "./index.scss";

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

function FiltersContainer({ sortGoals, filterGoals }) {
  return (
    <>
      <div className="filters-container">
        {configs.map((el) => (
          <FilterButton key={el.status} config={el} />
        ))}
      </div>
      <div className="filter-by-category">
        <SelectCategory sortGoals={sortGoals} filterGoals={filterGoals} />
      </div>
    </>
  );
}

export default FiltersContainer;
