import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-wrapper">
        <div className="i-left">
          <h1 className="i-l-title">
            I'M <span>H</span>ariom <span>S</span>harma
          </h1>
          <div className="i-l-wrapper">
            <div className="i-l-skills">
              <div>Frontend Developer</div>
              <div>Web Developer</div>
              <div>Web Designer</div>
              <div>Programmer</div>
              <div>Artist</div>
            </div>
          </div>
          <div className="i-r-desc">
            <p>I am ready to work for you and give my quality performance!</p>
          </div>
        </div>
        <div className="i-right">
          <div class="card card0">
            <div class="border">
              <h2>Al Pacino</h2>
              <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
