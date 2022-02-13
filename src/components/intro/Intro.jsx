import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-wrapper">
        <div className="i-left">
          <h1 className="il-title">
            I'M <span>H</span>ariom <span>S</span>harma
          </h1>
          <div className="il-wrapper">
            <div className="il-skills">
              <div>Frontend Developer</div>
              <div>Web Developer</div>
              <div>Web Designer</div>
              <div>Programmer</div>
              <div>Artist</div>
            </div>
          </div>
          <div className="il-desc">
            <p>I am ready to work for you and give my quality performance!</p>
          </div>
        </div>
        <div className="i-right">
          <div className="ir-img">
            <img src="asset/me.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
