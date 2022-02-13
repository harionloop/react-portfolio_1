import "./topbar.css";

export default function Topbar({ handburger, setHandburger }) {
  return (
    <div className="topbar">
      <div className="top-left">
        <i className="top-icon fab fa-instagram-square" id="instagram"></i>
        <i className="top-icon fab fa-github-square" id="github"></i>
        <i className="top-icon fab fa-linkedin" id="linkedin"></i>
        <i className="top-icon fab fa-stack-overflow" id="stack-overflow"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Blogs</li>
          <li className="top-list-item">Contact</li>
        </ul>
      </div>
      <div className="top-right">
        <i
          className="fa-solid fa-square-caret-down menu"
          onClick={() => setHandburger(!handburger)}
        ></i>
      </div>
    </div>
  );
}
