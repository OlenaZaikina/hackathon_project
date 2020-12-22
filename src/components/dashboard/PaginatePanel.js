function PaginatePanel({ setOffset, offset, goalsLength }) {
  const handleClick = (value) => {
    let newOffset = offset + value;
    newOffset = newOffset <= 0 ? 0 : newOffset;
    setOffset(newOffset);
  };
  return (
    <div className="paginate-panel">
      {offset !== 0 && (
        <span className="previous" onClick={() => handleClick(-5)}>
          &larr;
        </span>
      )}
      <span className="current">
        {offset + 1} - {offset + 5}
      </span>
      {offset + 5 < goalsLength && (
        <span className="next" onClick={() => handleClick(5)}>
          &rarr;
        </span>
      )}
    </div>
  );
}

export default PaginatePanel;
