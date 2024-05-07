import React, { Component } from "react";
import "./home.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const percentage = 0;

<CircularProgressbar value={percentage} text={`${percentage}%`} />;
const value = 0.66;

<CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
export class Home extends Component {
  render() {
    return (
      <>
        <header>
          <a href="/accaunt-settings" className="text">
            <img
              src="./img/UserPhotoS.png"
              alt=""
              className="profile-settings"
            />
          </a>
          <a href="/settings" className="text">
            <img src="./img/Menu.png" alt="" className="settings" />
          </a>
        </header>

        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            }}
          />
          ;
        </div>

        <div className="bg-of-elem">
          <div className="cont-of-elem">
            <a href="/elecwaste" className="text">
              {" "}
              <div className="section">
                <img src="./img/Battery.png" alt="" className="icons" />
                <div className="textelem">Electronic Waste</div>
              </div>{" "}
            </a>

            <a href="/organicwaste" className="text">
              {" "}
              <div className="section">
                <img src="./img/Wastesorting.png" alt="" className="icons" />
                <div className="textelem">Organic Waste</div>
              </div>{" "}
            </a>

            <a href="/plastwaste" className="text">
              {" "}
              <div className="section">
                <img src="./img/Bottle.png" alt="" className="icons" />
                <div className="textelem">Plastics</div>
              </div>{" "}
            </a>

            <a href="/solidwaste" className="text">
              {" "}
              <div className="section">
                <img src="./img/Waste.png" alt="" className="icons" />
                <div className="textelem">Solid Waste</div>
              </div>{" "}
            </a>

            <a href="/glasswaste" className="text">
              {" "}
              <div className="section">
                <img src="./img/BrokenBottle.png" alt="" className="icons" />
                <div className="textelem">Glass Waste</div>
              </div>{" "}
            </a>
          </div>
        </div>

        <footer>
          <div className="contfoot">
            <a href="/home" className="text">
              <img src="./img/Home.png" alt="" />
            </a>
            <a href="/share" className="text">
              <img src="./img/Share.png" alt="" />
            </a>
            <a href="/community" className="text">
              <img src="./img/Community.png" alt="" />
            </a>
            <a href="/activity" className="text">
              <img src="./img/Activity.png" alt="" />
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
