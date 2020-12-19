import FilterButton from "./FilterButton";
import Select from "react-select";
import { categories } from "../../utils/selectedDataForGoal";
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
  const getCategories = () => {
    let options = [];
    categories.map((el) => {
      let option = {};
      option.value = el.toLowerCase();
      option.label = el;

      options.push(option);
    });
    return options;
  };

  // const options = [
  //   { value: "sport", label: "Sport" },
  //   { value: "health", label: "Health" },
  //   { value: "Ecology", label: "Other" },
  // ];

  return (
    <>
      <div className="filters-container">
        {configs.map((el) => (
          <FilterButton key={el.status} config={el} />
        ))}
      </div>
      <div className="filter-by-category">
        <Select options={getCategories()} />
      </div>
    </>
  );
}

export default FiltersContainer;
