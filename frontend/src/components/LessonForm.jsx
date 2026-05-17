import { useState } from "react";
import axios from "axios";

function LessonForm({
  setResult,
  setLoading
}) {

  const [grade, setGrade] = useState("4");

  const [topic, setTopic] = useState("");

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = async () => {

    if (!topic) return;

    setButtonLoading(true);

    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:8000/generate",
        {
          grade,
          topic
        }
      );

      setResult(res.data);

    } catch (err) {

      console.log(err);
    }

    setButtonLoading(false);

    setLoading(false);
  };

  return (

    <div className="formCard">

      <div className="field">

        <label>GRADE</label>

        <div className="selectWrapper">

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >

            {
              Array.from(
                { length: 12 },
                (_, i) => (

                  <option
                    key={i + 1}
                    value={i + 1}
                  >
                    Grade {i + 1}
                  </option>

                )
              )
            }

          </select>

        </div>

      </div>

      <div className="field">

        <label>TOPIC</label>

        <input
          type="text"
          placeholder="Types of angles"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

      </div>

      <button
        onClick={handleSubmit}
        disabled={buttonLoading}
      >

        {
          buttonLoading
            ? "Running Agents..."
            : "Run Agents →"
        }

      </button>

    </div>
  );
}

export default LessonForm;