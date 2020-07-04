import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/customize.css";
import Loader from "../components/threeLoader";
const Customize = () => {
  let [range, setRange] = useState([0, 0]);
  let [locking, setLocking] = useState([0, 0]);
  let [gps, setGps] = useState(0);
  let [addon, setAddon] = useState([0, 0, 0]);
  let [body, setBody] = useState([1, 0, 0]);
  let [total, setTotal] = useState(30000);
  let [viewState, setViewState] = useState(false);
  let [view, setView] = useState("View");
  const range35 = 2000;
  const range55 = 4000;
  const locking1 = 2000;
  const locking2 = 4000;
  const gps1 = 2000;
  const ad1 = 1500;
  const ad2 = 1500;
  const ad3 = 3000;
  const cl1 = 0;
  const cl2 = 3000;
  const cl3 = 4500;

  useEffect(() => {
    window.onclick = (e) => {
      let element = e.target.id;
      if (element === "grey") {
        let currentBody = { ...body };
        if (currentBody[1] === 1) {
          setTotal(total - cl2 + cl1);
          setBody([1, 0, 0]);
        } else if (currentBody[2] === 1) {
          setTotal(total - cl3 + cl1);
          setBody([1, 0, 0]);
        }
      } else if (element === "green") {
        let currentBody = { ...body };
        if (currentBody[0] === 1) {
          setTotal(total - cl1 + cl2);
          setBody([0, 1, 0]);
        } else if (currentBody[2] === 1) {
          setTotal(total - cl3 + cl2);
          setBody([0, 1, 0]);
        }
      } else if (element === "tan") {
        let currentBody = { ...body };
        if (currentBody[0] === 1) {
          setTotal(total - cl1 + cl3);
          setBody([0, 0, 1]);
        } else if (currentBody[1] === 1) {
          setTotal(total - cl2 + cl3);
          setBody([0, 0, 1]);
        }
      }
      if (element === "range-35") {
        if (range[0] === 1) {
          setRange([0, 0]);
          setTotal(total - range35);
        } else {
          if (range[1] === 1) {
            setTotal(total - (range55 - range35));
          } else {
            setTotal(total + range35);
          }
          setRange([1, 0]);
        }
      } else if (element === "range-55") {
        if (range[1] === 1) {
          setRange([0, 0]);
          setTotal(total - range55);
        } else {
          if (range[0] === 1) {
            setTotal(total + (range55 - range35));
          } else {
            setTotal(total + range55);
          }
          setRange([0, 1]);
        }
      } else if (element === "locking-1") {
        if (locking[0] === 1) {
          setLocking([0, 0]);
          setTotal(total - locking1);
        } else {
          if (locking[1] === 1) {
            setTotal(total - (locking2 - locking1));
          } else {
            setTotal(total + locking1);
          }
          setLocking([1, 0]);
        }
      } else if (element === "locking-2") {
        if (locking[1] === 1) {
          setTotal(total - locking2);
          setLocking([0, 0]);
        } else {
          if (locking[0] === 1) {
            setTotal(total + (locking2 - locking1));
          } else {
            setTotal(total + locking2);
          }
          setLocking([0, 1]);
        }
      } else if (element === "gps-1") {
        if (gps === 1) {
          setGps(0);
          setTotal(total - gps1);
        } else {
          setGps(1);
          setTotal(total + gps1);
        }
      } else if (element === "addon-1") {
        let currentAddon = { ...addon };
        if (addon[0] === 1) {
          setTotal(total - ad1);
          setAddon([0, currentAddon[1], currentAddon[2]]);
        } else {
          setTotal(total + ad1);
          setAddon([1, currentAddon[1], currentAddon[2]]);
        }
      } else if (element === "addon-2") {
        let currentAddon = { ...addon };
        if (addon[1] === 1) {
          setTotal(total - ad2);
          setAddon([currentAddon[0], 0, currentAddon[2]]);
        } else {
          setTotal(total + ad2);
          setAddon([currentAddon[0], 1, currentAddon[2]]);
        }
      } else if (element === "addon-3") {
        let currentAddon = { ...addon };
        if (addon[2] === 1) {
          setTotal(total - ad3);
          setAddon([currentAddon[0], currentAddon[1], 0]);
        } else {
          setTotal(total + ad3);
          setAddon([currentAddon[0], currentAddon[1], 1]);
        }
      }
    };
  }, [range, locking, gps, addon, total, body]);

  const formatter = new Intl.NumberFormat("en-IN", {
    currency: "INR",
  });

  const hideCustom = () => {
    if (view === "View") {
      document.querySelector(".customize-container").classList.add("none");
      document.querySelector(".customize").classList.add("none");
      document.querySelector(".buy-custom").classList.add("none");
      document.querySelector(".model").classList.add("extend");
      setViewState(true);
      setView("back");
    } else {
      document.querySelector(".customize-container").classList.remove("none");
      document.querySelector(".customize").classList.remove("none");
      document.querySelector(".buy-custom").classList.remove("none");
      document.querySelector(".model").classList.remove("extend");
      setViewState(false);
      setView("View");
    }
  };

  const barTransform = {
    initial: {
      opacity: 1,
    },
    in: {
      opacity: 1,
      width: "45vw",
      height: "100vh",
      left: "0%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 1,
      width: "10vw",
      height: "100vh",

      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };
  const barTransformMob = {
    initial: {
      opacity: 1,
    },
    in: {
      opacity: 1,
      width: "75vw",
      height: "100vh",
      left: "0%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 1,
      width: "0vw",
      height: "100vh",

      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };
  const viewBntTransform = {
    initial: {
      opacity: 1,
      left: "50%",
      top: "88%",
    },
    in: {
      opacity: 1,
      top: "88%",
      left: "3%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 1,
      top: "88%",
      left: "50%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };
  const viewBntTransformMob = {
    initial: {
      opacity: 1,
      left: "80%",
      top: "88%",
    },
    in: {
      opacity: 1,
      top: "88%",
      left: "3%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 1,
      top: "88%",
      left: "80%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <motion.div
        initial="initial"
        animate={viewState ? "out" : "in"}
        exit="out"
        variants={
          document.documentElement.clientWidth > 700
            ? barTransform
            : barTransformMob
        }
        className="bar"
      >
        <div className="bar custom bar-mob custom-mob"></div>
      </motion.div>
      <p className="customize">customize</p>
      <div className="customize-container">
        <p className="range-p">Range</p>
        <div className="range-btn">
          <div className="range-35">
            <Button
              id="range-35"
              active={range[0] === 0 ? false : true}
              name="35 KM"
            />
          </div>
          <div className="range-55">
            <Button
              id="range-55"
              active={range[1] === 0 ? false : true}
              name="55 KM"
            />
          </div>
        </div>
        <p className="locking-p">Locking</p>
        <div className="locking-btn">
          <div className="locking-1">
            <Button
              id="locking-1"
              active={locking[0] === 0 ? false : true}
              name="Electronic locking system"
            />
          </div>
          <div className="locking-2">
            <Button
              id="locking-2"
              active={locking[1] === 0 ? false : true}
              name="Electronic locking system"
            />
          </div>
        </div>
        <p className="gps-p">GPS</p>
        <div className="gps-btn">
          <div className="gps-1">
            <Button
              id="gps-1"
              active={gps === 0 ? false : true}
              name="Vehicle tracking"
            />
          </div>
        </div>
        <p className="addon-p">Other Add ons</p>
        <div className="addon-btn">
          <div className="addon-1">
            <Button
              id="addon-1"
              active={addon[0] === 0 ? false : true}
              name="Bungee Cords"
            />
          </div>
          <div className="addon-2">
            <Button
              id="addon-2"
              active={addon[1] === 0 ? false : true}
              name="Mudguards"
            />
          </div>
          <div className="addon-3">
            <Button
              id="addon-3"
              active={addon[2] === 0 ? false : true}
              name="Rear brake light"
            />
          </div>
        </div>
        <div className="price-container">
          <p className="price">Rs. {formatter.format(total)}</p>
        </div>
      </div>
      <div className="buy-custom">
        <Link className="buylink" to="/buy">
          buy
        </Link>
      </div>
      <motion.div
        initial="initial"
        animate={viewState ? "in" : "out"}
        exit="out"
        variants={
          document.documentElement.clientWidth > 700
            ? viewBntTransform
            : viewBntTransformMob
        }
        className="view"
      >
        <div className="view">
          <button
            onClick={hideCustom}
            id="view-btn"
            className={view === "View" ? "view-btn" : "view-btn white"}
          >
            {view}
          </button>
        </div>
      </motion.div>
      <div className="model">
        <Loader />
      </div>
    </div>
  );
};

export default Customize;
