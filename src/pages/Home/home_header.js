import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="container-fluid" id="home_background">
        <div className="container-md">
          <div className="row" style={ {textAlign:"center"}} id="control">
            <nav
              className="navbar navbar-dark navbar-expand-md nav-fill"
              style={{background: "transparent"}}
            >
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="navbar-nav nav" style={ {textAlign:"center"}}>
                <Link to="/"><li class="nav-item p-2"><a href="#" class="nav-link">Home</a></li></Link>
                  <li className="nav-item p-2">
                    <div className="input-group">
                      <div className="form-outline">
                        <input
                          type="search"
                          id="form1"
                          className="form-control d-inline"
                          placeholder="Search Player"
                        />
                      </div>
                      <button type="button" className="btn btn-success d-inline">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </li>
                  <Link to="/compareplayers"><li class="nav-item p-2"><a href="#" class="nav-link">Compare Players</a></li></Link>
                  <li className="nav-item p-2">
                    <a href="#" className="nav-link">
                      Team
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a
                      href="#"
                      className="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#comparison_modal"
                    >
                      Account
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <hr style={{color:"white", padding: "0%"}} />
          </div>

          <div className="row align-items-right" style={{padding:"5% 0%"}}>
            <div className="col-8"></div>
            <div className="col-4">
              <div className="display-1"> My Team</div>
              <div className="display-4"> Team Builder </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
