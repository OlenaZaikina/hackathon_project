import Friend from "./Friend";
import photo from "../../assets/user-icon.svg";

function FriendsContainer() {
  const configs = [
    {
      img: photo,
      name: "Some Name",
      goals: "some goals",
    },
    {
      img: photo,
      name: "Some Name",
      goals: "some goals",
    },
    {
      img: photo,
      name: "Some Name",
      goals: "some goals",
    },
  ];
  return (
    <div className="friends-container">
      {configs.map((el, index) => (
        <Friend key={index} config={el} />
      ))}
    </div>
  );
}

export default FriendsContainer;
