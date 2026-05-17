function ReviewCard({ data }) {

  return (

    <div className="card">

      <div className="agentHeader">

        <div className="reviewDot"></div>

        <span>
          REVIEWER AGENT
        </span>

      </div>

      <h2>
        Review Analysis
      </h2>

      <div
        className={
          data.status === "pass"
            ? "statusPass"
            : "statusFail"
        }
      >
        {data.status.toUpperCase()}
      </div>

      <ul>

        {
          data.feedback.map(
            (item, index) => (

              <li key={index}>
                {item}
              </li>

            )
          )
        }

      </ul>

    </div>
  );
}

export default ReviewCard;