import './style.scss';

function Feature({ title, content }) {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div>
          <h3>{title}</h3>
          <p> {content} </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;