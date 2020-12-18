import Friend from "./Friend";
import photo from "../../assets/person.webp";

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
    <>
      {configs.map((el, index) => (
        <Friend key={index} config={el} />
      ))}
{/* 
      <Friend  />
      <Friend />
      <Friend /> */}
    </>
  );
}

export default FriendsContainer;
