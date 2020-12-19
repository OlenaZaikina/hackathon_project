import Progress from "react-progressbar";

function Friend({ config }) {
  const { img, name, goals } = config;
  return (
    <div className="friend-card">
      <div className="friend-card-header">
        <div className="user-image">
          <img src={img} alt="person photo" />
        </div>
        <p className="name">{name}</p>
      </div>
      <div>
        <Progress completed={75} />
        {/* <Progress completed={75} />
        <Progress completed={75} /> */}
      </div>
    </div>
  );
}

export default Friend;
