function LoadingScreen() {

  return (

    <div className="loadingContainer">

      <div className="loaderCircle"></div>

      <h2>
        Running AI Agents...
      </h2>

      <p>

        Generator is creating the lesson.
        Reviewer is checking clarity and quality.

      </p>

      <div className="loadingSteps">

        <div className="step active">
          Generator Agent
        </div>

        <div className="step active">
          Reviewer Agent
        </div>

        <div className="step">
          Refinement Pass
        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;