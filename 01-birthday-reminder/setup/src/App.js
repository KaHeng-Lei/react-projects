import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthdayData, setBirthdayData] = useState(data);

  return (
    <main>
      <section className="container">
        <h3 className="summary">{birthdayData.length} birthdays today</h3>
        <List data={birthdayData} />
        <button className="button" onClick={() => setBirthdayData([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
