import { useState } from "react";

import HeroSection from "../components/HeroSection";
import LessonForm from "../components/LessonForm";
import LessonCard from "../components/LessonCard";
import ReviewCard from "../components/ReviewCard";
import RefinedCard from "../components/RefinedCard";
import LoadingScreen from "../components/LoadingScreen";

function Home() {

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  return (

    <div className="container">

      <HeroSection />

      <LessonForm
        setResult={setResult}
        setLoading={setLoading}
      />

      {
        loading && <LoadingScreen />
      }

      {
        result && !loading && (

          <>

            <LessonCard
              data={result.generator_output}
            />

            <ReviewCard
              data={result.review}
            />

            {
              result.refined_output && (

                <RefinedCard
                  data={result.refined_output}
                />

              )
            }

          </>

        )
      }

    </div>
  );
}

export default Home;