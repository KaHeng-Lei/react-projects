import React from "react";
import Tour from "./Tour";
const Tours = ({ toursData, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {toursData.map((tour, i) => {
        return (
          <Tour tour={tour} key={tour.id} {...tour} deleteTour={deleteTour} />
        );
      })}
    </section>
  );
};

export default Tours;
