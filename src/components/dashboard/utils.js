import Select, { components } from "react-select";
import { categories } from "../../utils/selectedDataForGoal";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

export const getCategories = () => {
  let options = [];
  categories.map((el) => {
    let option = {};
    option.value = el.toLowerCase();
    option.label = el;

    options.push(option);
  });
  return options;
};

export function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

export const SortableMultiValue = SortableElement((props) => {
  const onMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});

export const SortableSelect = SortableContainer(Select);

