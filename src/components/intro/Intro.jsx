import { useState } from "react";
import "./intro.css";

export default function Intro() {
  const [door, setDoor] = useState(true);

  return (
    <div className="intro">
      <div className="i-left">
        <div className="ilt-container">
          <h1 className="il-title">
            Hey there <span>!</span> <br />
          </h1>
          <p className="ilt-desc">
            I'm <span>H</span>ariom <span>S</span>harma
          </p>
          <hr />
        </div>

        <div className="il-wrapper">
          <div className="ilw-items">
            <div className="ilw-item">Frontend Developer</div>
            <div className="ilw-item">Web Developer</div>
            <div className="ilw-item">Web Designer</div>
            <div className="ilw-item">Programmer</div>
            <div className="ilw-item">Artist</div>
          </div>
        </div>

        <div className="il-desc">
          <p>
            I have years of experience as Web Developer. I love to make simple
            but beautiful websites. There is nothing beautiful then simplicity.
            Contact me for get in touch!{" "}
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="door">
          <i
            className={
              door === true
                ? "fa fa-lock door-butt"
                : "fa fa-lock-open door-butt"
            }
            onClick={() => setDoor(!door)}
          ></i>
          <div className="door-container">
            <div className={door === true ? "left-door" : "left-door openL"}>
              <p
                style={{
                  fontSize: "100px",
                  color: "yellow",
                  textAlign: "center",
                }}
              >
                welcome to my room
              </p>
              <span>[</span>
            </div>
            <div className={door === true ? "right-door" : "right-door openR"}>
              <p
                style={{
                  fontSize: "100px",
                  color: "yellow",
                  textAlign: "center",
                }}
              >
                unlock to see a beautiful human
              </p>
              <span>]</span>
            </div>
          </div>
          <img
            src="asset/me.png"
            className={door === true ? "door-img" : "door-img show-img"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
