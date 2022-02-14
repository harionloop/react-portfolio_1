import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="c-side"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="l-title">Find me on earth!</h1>
          <div className="l-info">
            <div className="l-info-items">
              <span className="l-icons">
                <i class="fa fa-square-phone"></i>
              </span>
              <a href="tel:+1-847-847-8478">+1-847-847-8478</a>
            </div>
            <div className="l-info-items">
              <span className="l-icons">
                <i className="fa-solid fa-at"></i>
              </span>
              <a href="#">GHost@ghost.com</a>
            </div>
            <div className="l-info-items">
              <span className="l-icons">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <a href="earth">Earth</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="r-desc">
            <b>Why would I text a stranger?</b>
            Cuz every new friend was a stranger first!
          </p>
          <form>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" rows="5" placeholder="message" />
            <button className="r-butt" type="submit">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
