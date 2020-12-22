function FilterButton({ config, filterByStatus }) {
  const { status, text } = config;
  return (
    <div className={`btn ${status}`} onClick={() => filterByStatus(status)}>
      <span className="text">{text}</span>
    </div>
  );
}

export default FilterButton;
