import React from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import "../styles/buy.css";
const Buy = (props) => {
  let { id } = useParams();
  let { price } = useParams();

  let range = ["Battery Range of 43 KM", "Battery Range of 65 KM"];
  let charging = [
    "Charging duration of 3 hours",
    "Charging duration of 90 minutes",
  ];
  let locking = ["Generic cable based locking", "App-based electronic locking"];
  let intelligent = ["Intelligent system(inclusive of service)"];
  let tpms = ["Tyre pressure monitoring"];
  let fender = ["Fender"];
  let bung = ["Bungee Cords"];

  return (
    <div>
      <Navbar />
      <div className="specification-container">
        <p className="specification-p">Specification</p>
        <div className="specification">
          <h1 className="buy-base">Base Vehicle Cost</h1>
          <h1 className="buy-range">{id[0] === "1" ? range[1] : range[0]}</h1>
          <h1 className="buy-charge">
            {id[1] === "1" ? charging[1] : charging[0]}
          </h1>
          <h1 className="buy-lock">
            {id[2] === "1" ? locking[1] : locking[0]}
          </h1>
          <h1 className="buy-inti">{id[3] === "1" ? intelligent[0] : ""}</h1>
          <h1 className="buy-tpms">{id[4] === "1" ? tpms[0] : ""}</h1>
          <h1 className="buy-fender">{id[5] === "1" ? fender[0] : ""}</h1>
          <h1 className="buy-bung">{id[6] === "1" ? bung[0] : ""}</h1>
        </div>
        <div className="prices">
          <h1 className="buy-price-base">35000</h1>
          <h1 className="buy-price-range">{id[0] === "1" ? "2000" : ""}</h1>
          <h1 className="buy-price-charge">{id[1] === "1" ? "1500" : ""}</h1>
          <h1 className="buy-price-lock">{id[2] === "1" ? "1500" : ""}</h1>
          <h1 className="buy-price-inti">{id[3] === "1" ? "5000" : ""}</h1>
          <h1 className="buy-price-tpms">{id[4] === "1" ? "3000" : ""}</h1>
          <h1 className="buy-price-fender">{id[5] === "1" ? "1000" : ""}</h1>
          <h1 className="buy-price-bung">{id[6] === "1" ? "500" : ""}</h1>
          <h1 className="buy-total">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Buy;
