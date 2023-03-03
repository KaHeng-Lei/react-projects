import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map((person) => {
        const { name, age, image } = person;
        return (
          <article key={name} className="person">
            <img src={image} alt={name} className="image" />
            <div>
              <h4 className="name">{name}</h4>
              <p className="age">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
