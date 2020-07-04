import React from "react";
import Navbar from "../components/navbar";
import "../styles/specs.css";
import vehicle from "../assets/vehicle.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../styles/customize.css";

const Specs = () => {
  return (
    <div>
      <Navbar />
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="frame">
            <div className="frame-head-wrapper">
              <h1 className="frame-heading">GOTTA HOLD IT</h1>
              <h1 className="frame-heading">TOGETHER</h1>
            </div>
            <div className="frame-body-wrapper">
              <p className="frame-content">
                A retro looking design, made of AISI 4130 chromoly steel has a
                good structural integrity that dampens the vibrations. An
                invention that lowers overall manufacturing without losing its
                functionality
              </p>
            </div>
            <div className="frame-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="frame-image" />
            </div>
          </div>
          {/* motor section starts from here */}
          <div className="motor">
            <div className="motor-head-wrapper">
              <h1 className="motor-heading">SIMPLE YET </h1>
              <h1 className="motor-heading">POWERFUL!</h1>
            </div>
            <div className="motor-body-wrapper">
              <p className="motor-content">
                Tuned for maximum power and a natural ride feel. Designed to
                keep the weight relatively centered on the frame by the
                mid-motor and rack mounted battery. The brushless DC motor
                offers a peak torque of 80 Nm and a maximum power of 250W
              </p>
            </div>
            <div className="motor-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="motor-image" />
            </div>
          </div>
          {/* tyre section starts from here */}
          <div className="tyre">
            <div className="tyre-head-wrapper">
              <h1 className="tyre-heading">THAT'S HOW IT</h1>
              <h1 className="tyre-heading">ROLLS!</h1>
            </div>
            <div className="tyre-body-wrapper">
              <p className="tyre-content">
                Let suspension never be a worry. The wide 4’’ tyres offer
                improved stability and comfort, whilst giving the smoothest
                rides even over bumps. With 31psi inflation pressure, you can do
                away with the need for suspension on any kind of terrain
              </p>
            </div>
            <div className="tyre-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="tyre-image" />
            </div>
          </div>
          {/* Battery section starts here */}
          <div className="battery">
            <div className="battery-head-wrapper">
              <h1 className="battery-heading">REFUELLING</h1>
              <h1 className="battery-heading">THE JUICE</h1>
            </div>
            <div className="battery-body-wrapper">
              <p className="battery-content">
                You can now easily refuel the battery anywhere, anytime! The
                removable battery allows you to experience efficient &
                hassle-free charging. The 6A charging framework charges the
                battery in 1Hr 30min. Our light- weight 100% electric bikes
                offer ample range to cover everyday needs on single charge
              </p>
            </div>
            <div className="battery-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="battery-image" />
            </div>
          </div>
          {/* mobile section starts here */}
          <div className="mobile">
            <div className="mobile-head-wrapper">
              <h1 className="mobile-heading">LET THE PHONE </h1>
              <h1 className="mobile-heading">TAKE CONTROL</h1>
            </div>
            <div className="mobile-body-wrapper">
              <p className="mobile-content">
                App Integration provides you with real time information about
                various aspects of the bike at the convenience of your
                fingertips
              </p>
            </div>
            <div className="mobile-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="mobile-image" />
            </div>
          </div>
          {/* sense section starts here */}
          <div className="sense">
            <div className="sense-head-wrapper">
              <h1 className="sense-heading">SENSE</h1>
            </div>
            <div className="sense-body-wrapper">
              <p className="sense-content">
                The tyre monitoring pressure sensor takes the data from the load
                & rides, gives an optimised pressure value for which it has both
                acceleration & suspension effect
              </p>
            </div>
            <div className="sense-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="sense-image" />
            </div>
          </div>
          {/* locking section starts here */}
          <div className="locking">
            <div className="locking-head-wrapper">
              <h1 className="locking-heading">YOUR RIDE IS JUST </h1>
              <h1 className="locking-heading">A TOUCH AWAY</h1>
            </div>
            <div className="locking-body-wrapper">
              <p className="locking-content">
                Effortless to use, useless to steal – onboard alarms and smart
                location tracking are specially designed to give bike thieves
                nightmares
              </p>
            </div>
            <div className="locking-image-wrapper">
              <img src={vehicle} alt="Vehicle" className="locking-image" />
            </div>
          </div>
          <div className="specs-btn">
            <Link to="/customize">
              <button className="cus-buy-btn">Customize/Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
