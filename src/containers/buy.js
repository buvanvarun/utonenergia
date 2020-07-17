import React from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import "../styles/buy.css";
import vehicle_light from "../assets/vehicle.png";
import vehicle_dark from "../assets/vehicle-dark.png";
const Buy = () => {
  let { id } = useParams();
  let { price } = useParams();
  let range = ["Battery Range of 43 KM", "Battery Range of 65 KM"];
  let charging = [
    "Charging duration of 3 hours",
    "Charging duration of 90 minutes",
  ];
  let locking = ["Generic cable based locking", "App-based electronic locking"];
  let intelligent = ["Intelligent system (inclusive of service)"];
  let tpms = ["Tyre pressure monitoring"];
  let fender = ["Fender"];
  let bung = ["Bungee Cords"];
  let color = id[7] === "0" ? "Black" : "Grey";

  const urlString = `https://pages.razorpay.com/fortyfivebike?bike_color=${color}&range_plus=${id[0]}&charging_plus=${id[1]}&electronic_locking=${id[2]}&intelligent_systems_service=${id[3]}&tyre_pressure_monitoring=${id[4]}&fenders=${id[5]}&bungee_cords=${id[6]}`;

  const formatter = new Intl.NumberFormat("en-IN", {
    currency: "INR",
  });

  return (
    <div>
      <Navbar />
      <div className="buy-vehicle-container">
        <img
          className="buy-vehicle-prop"
          src={id[7] === "0" ? vehicle_dark : vehicle_light}
          alt="vehicle"
        />
      </div>
      <div className="specification-container">
        <p className="specification-p">
          45 Bike ({id[7] === "0" ? "matte black" : "dark grey"})
        </p>
        <div className="specification">
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
        <h1 className="buy-total">
          Total Cost : Rs. {formatter.format(price / 17)}
        </h1>
      </div>
      <div className="buy-buy-btn">
        <form action={urlString} method="post">
          <button type="submit" className="buy-btn-btn">
            buy now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
