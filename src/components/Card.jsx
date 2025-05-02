import React from "react";

export function Card({name, img, text, data}) {
    return (
        <div className="card">
      <div className="primeiros">
        <img className="imgcard" src={img} alt={name} />
        <h3>{name}</h3>
      </div>
      <p className="texto">{text}</p>
      <p><b>{data}</b></p>
    </div>
  );
};
   