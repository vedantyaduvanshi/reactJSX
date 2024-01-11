import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  render() {
    const data = this.imageData();

    return (
      <> 
      <h2 id="TitleText">Kalvium gallery</h2>
      <div id="image-grid">
        {data.map((item) => (
          <div key={item.id} id="image-container">
            <img src={item.img} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>
      </>
    );
  }
}
