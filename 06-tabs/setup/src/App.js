import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchURl = async () => {
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchURl();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading ...</h2>
      </section>
    );
  }

  // define this variable after loading, so render the loading while fetch the data
  // otherwise it will get error when render data is null
  const { company, dates, duties, title } = data[value];
  return (
    <session className="session">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((job, i) => (
            <button
              key={job.id}
              className={`job-btn ${i === value && "active-btn"}`}
              onClick={() => setValue(i)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4 className="job-icon">{company}</h4>
          <p className="job-date">{dates}</p>
          <ul className="job-desc">
            {duties.map((duty) => (
              <>
                <FaAngleDoubleRight className="job-icon" />

                <p>{duty}</p>
              </>
            ))}
          </ul>
        </article>
      </div>
    </session>
  );
}

export default App;
