function Friend({ config }) {
  const { img, name, goals } = config;
  return (
    <div className="friend-card">
      <div className="top">
        {/* <img src={img} alt="person photo" /> */}
        <p className="name">{name}</p>
      </div>
      <div>{goals}</div>
    </div>
  );
}

export default Friend;
