import React from "react";

export function Post({nome, imagem, texto, data}) {
    return (
        <div className="card">
      <div className="primeiros">
        <img className="imgcard" src={imagem} alt={nome} />
        <h3>{nome}</h3>
      </div>
      <p className="texto">{texto}</p>
      <p><b>{data}</b></p>
    </div>
  );
};
   