import React from "react";
import { Link } from "react-router-dom";
function PlayersHeader() {
  return (
    <>
     <div class="container-fluid" id="heading_background">
        <div class="container-md">
            <div class="row" style={{textAlign: "center"}}  id="control">
                <nav class="navbar navbar-dark navbar-expand-md nav-fill" style={{background: "transparent"}}>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="navbar">
                        <ul class="navbar-nav nav" style={{textAlign: "center"}}>
                            <Link to="/home"><li class="nav-item p-2"><a href="#" class="nav-link">Home</a></li></Link>
                            <li class="nav-item p-2">
                              <div class="input-group">
                                <div class="form-outline">
                                  <input type="search" id="form1" class="form-control d-inline" placeholder="Search Player"/>
                                </div>
                                <button type="button" class="btn btn-success d-inline">
                                  <i class="fas fa-search"></i>
                                </button>
                              </div>
                            </li>
                            <li class="nav-item p-2"><a href="#" class="nav-link">Compare Players</a></li>
                            <li class="nav-item p-2"><a href="#" class="nav-link">Team</a></li>
                            <li class="nav-item p-2"><a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#comparison_modal">Account</a></li>
                            
                        </ul>
                        
                    </div>
                </nav>
                  <hr style={{color:"white", padding: "0%"}}/>
            </div>
  
            <div class="row align-items-right" style={{padding:"5% 0%"}}>
                
                <div class="col-12 text-center"><div class="display-1"> My Team</div><div class="display-4">  Team Builder </div></div>
                
            </div>
        </div>
    </div>
    </>
  );
}

export default PlayersHeader;
