import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [toursData, setToursData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchURL = async () => {
    setLoading(true);
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setToursData(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchURL();
  }, []);

  const deleteTour = (id) => {
    setToursData(toursData.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }
  if (toursData.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchURL}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours toursData={toursData} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
