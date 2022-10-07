import React from 'react'

function Section2() {
  return (
    <>
    <div class="container my-4">
    <div class="row my-2">
        <div class="display-4">Compare Players</div>
    </div>

    <div class="row">
        <div class="col-4">
            <div class="input-group">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control d-inline" placeholder="Player1"/>
                </div>
                <button type="button" class="btn btn-success d-inline">
                  <i class="fas fa-search"></i>
                </button>
            </div>
            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320400/320467.png" style={{width: "75%"}} />
        </div>

        <div class="col-4 d-flex align-items-center justify-content-center">
            <div class="display-2" >VS</div>
        </div>

        <div class="col-4">
            <div class="input-group">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control d-inline" placeholder="Player2"/>
                </div>
                <button type="button" class="btn btn-success d-inline">
                  <i class="fas fa-search"></i>
                </button>
            </div>
            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320400/320470.png" style={{width: "75%"}} />
        </div>
    </div>

    <div class="row">
        <div class="col-4 lead d-flex justify-content-center align-items-center">
            Shadab Khan
        </div>
        <div class="col-4 lead d-flex justify-content-center align-items-center">
            
        </div>
        <div class="col-4 lead d-flex justify-content-center align-items-center">
            Shoaib Malik
        </div>
    </div>

    <div class="row">
        <div class="col-4 lead d-flex justify-content-center align-items-center">
            147
        </div>
        <div class="col-4 lead d-flex justify-content-center align-items-center ">
            <strong>Matches</strong>
        </div>
        <div class="col-4 lead d-flex justify-content-center align-items-center">
            147
        </div>
    </div>
</div>
</>
  )
}

export default Section2