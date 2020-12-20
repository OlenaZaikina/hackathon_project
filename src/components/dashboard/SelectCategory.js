import { useState } from "react";
import {
  getCategories,
  arrayMove,
  SortableSelect,
  SortableMultiValue,
} from "./utils";

function SelectCategory({ sortGoals, filterGoals }) {
  const [selected, setSelected] = useState([getCategories[1]]);
  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
    selectedOptions = selectedOptions
      ? selectedOptions.reduce((acc, el) => (acc = [...acc, el.value]), [])
      : [];
    filterGoals(selectedOptions);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    const categories = newValue.reduce(
      (acc, el) => (acc = [...acc, el.value]),
      []
    );
    sortGoals(categories);
  };

  return (
    <SortableSelect
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      isMulti
      options={getCategories()}
      value={selected}
      onChange={onChange}
      components={{
        MultiValue: SortableMultiValue,
      }}
    />
  );
}

export default SelectCategory;
