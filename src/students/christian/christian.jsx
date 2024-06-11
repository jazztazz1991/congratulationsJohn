import React from "react";
import ReactDOM from "react-dom/client";
import "./christian.css";
import video from "./lazers.mp4";
import krusty from "./krusty.gif";

function Christian() {
  return (
    <div className='christian-content'>
      <img className='krusty-ch' src={krusty} alt='Krusty the Clown' />
      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <h2 className='christian-text'>
        Congratulations John and Angel! -Christian
      </h2>
    </div>
  );
}

export default Christian;
