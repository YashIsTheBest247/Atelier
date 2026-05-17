function RefinedCard({ data }) {
  return (
    <div className="card">
      <h2>Refined Output</h2>

      <p>{data.explanation}</p>
    </div>
  );
}

export default RefinedCard;