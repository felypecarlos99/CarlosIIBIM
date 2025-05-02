import React from "react";
import "./Card.css"

export function Card({name, img, text, data, cor}) {
    return (
        <div className="card" style={{background:cor}}>
      <div className="primeiros">
        <img className="imgcard" src={img} alt={name} />
        <h3>{name}</h3>
      </div>
      <p className="texto">{text}</p>
      <p><b>{data}</b></p>
    </div>
  );
};
   