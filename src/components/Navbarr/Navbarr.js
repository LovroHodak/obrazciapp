import React from "react";
import { Link } from "react-router-dom";

import "./Navbarr.css";

export default function Navbarr() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to="/home" style={{textDecoration: 'none'}}>
          <h1>ObrazciApp</h1>
        </Link>
       
    </div>
  );
}
