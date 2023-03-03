import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer1);
  }, [index]);

  const next = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  const length = people.length;
  const { name, job, image, text } = people[index];
  return (
    <div className="review">
      <div className="img-container">
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <img src={image} alt={name} className="person-img" />
      </div>
      <article>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </article>
      <div>
        <FaChevronLeft
          className="prev-btn"
          onClick={() => setIndex(index === 0 ? length - 1 : index - 1)}
        />
        <FaChevronRight className="next-btn" onClick={next} />
      </div>
      <button className="random-btn">Surprise Me</button>
    </div>
  );
};

export default Review;
