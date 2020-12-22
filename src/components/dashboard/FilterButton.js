function FilterButton({ config }) {
  const { status, text } = config;
  return (
    <div className={`btn ${status}`}>
      <span className="text">{text}</span>
    </div>
  );
}

export default FilterButton;
