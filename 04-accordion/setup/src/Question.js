import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ qa }) => {
  const [exposeInfo, setExposeInfo] = useState(false);
  const { id, title, info } = qa;

  const expose = (id) => {
    setExposeInfo(!exposeInfo);
  };
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => expose(id)}>
          {exposeInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <>{exposeInfo && <p>{info}</p>}</>
    </div>
  );
};

export default Question;
