import { useState } from "react";
import "./sidebar.css";

export default function Sidebar({ handburger }) {
  return (
    <div className={handburger ? "sidebar " : "active"}>
      <div className="sidebar-container">
        <li className="sl-item">Home</li>
        <li className="sl-item">About</li>
        <li className="sl-item">Blogs</li>
        <li className="sl-item">Contact</li>
      </div>
    </div>
  );
}
