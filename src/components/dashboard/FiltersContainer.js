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


function FiltersContainer() {
  return (
    <>
      <div className="filters-container">
        {configs.map((el) => (
          <FilterButton key={el.status} config={el} />
        ))}
      </div>
      <div className="filter-by-category">
        {/* <Select
          options={getCategories()}
          hideSelectedOptions={true}
          onChange={(value) => console.log(value)}
        /> */}

        {/* <SortableSelect
          // react-sortable-hoc props:
          axis="xy"
          onSortEnd={onSortEnd}
          distance={4}
          // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
          getHelperDimensions={({ node }) => node.getBoundingClientRect()}
          // react-select props:
          isMulti
          options={getCategories()}
          value={selected}
          onChange={onChange}
          components={{
            MultiValue: SortableMultiValue,
          }}
          closeMenuOnSelect={false}
        /> */}
        <SelectCategory />
      </div>
    </>
  );
}

export default FiltersContainer;
