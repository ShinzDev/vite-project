import React from "react";
import "./nabar.css";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
    
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav container">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              {/*  services dropdown */}
              <div class="dropdown">
                <div class="dropbtn ">Services</div>
                <div class="dropdown-content">
                  <a className="drop-text" href="#">Option 1</a>
                  <a className="drop-text" href="#">Option 2</a>
                  <a className="drop-text" href="#">Option 3</a>
                  <a className="drop-text" href="#">Option 4</a>
                  <a className="drop-text" href="#">Option 5</a>
                  <a className="drop-text" href="#">Option 6</a>
                  <a className="drop-text" href="#">Option 7</a>
                  <a className="drop-text" href="#">Option 8</a>
                  <a className="drop-text" href="#">Option 9</a>
                </div>
              </div>
              <a class="nav-link" href="#">
                Our Partners
              </a>

              <a class="nav-link" href="#">
                Careers
              </a>
              {/* media dropdown */}
              <div class="dropdown">
                <div class="dropbtn nav-link">Media</div>
                <div class="dropdown-content">
                  <a href="#">News</a>
                  <a href="#">Video</a>
                </div>
              </div>

              <a class="nav-link" href="#">
                Contact Us
              </a>
              <div className="btn_select_parent">
                <div className="first">
                  <button className="btn_1">Academy</button>
                </div>
                <div className="second">
                  <select name="" id="">
                    <option value=""> English</option>
                    <option value=""> Chinese</option>
                    <option value=""> French</option>
                  </select>
                </div>
                <div className="third">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
