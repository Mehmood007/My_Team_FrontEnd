import React from "react";

function section2(props) {
  const data = props.playerdata;
  console.log("props data is here", props.playerdata);
  return (
    <>
      <div class="container-fluid">
        <div
          class="row mx-3 py-4"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            alignItems: "center",
          }}
        >
          <div class="col-md-3">
            <img
              src={data.picture}
              alt="imagenotfound"
              style={{ width: "75%" }}
            />
          </div>
          <div class="col-md-9">
            <h2 class="my-2">{data.playername}</h2>
            <div class="lead">
              <strong>Country: </strong>
              {data.country}
            </div>
            <div class="lead">
              <strong>Role: </strong>
              {data.role}
            </div>
            <div class="lead">
              <strong>Bowling Style: </strong>
              {data.bowling_style}
            </div>
            <div class="lead">
              <strong>Matches: </strong>
              {data.stats[0].length > data.stats[1].length
                ? data.stats[0].length
                : data.stats[1].length}{" "}
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid my-5">
        <div class="row mx-3 my-3">
          <h3>Leagues Stats</h3>
          <hr />
        </div>
        <div class="row bg-white mx-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Roll</th>
                <th scope="col">Innings</th>
                <th scope="col">Runs/Wickets</th>
                <th scope="col">Average</th>
                <th scope="col">Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Batting</th>
                <td>10</td>
                <td>250</td>
                <td>25</td>
                <td>110</td>
              </tr>
              <tr>
                <th scope="row">Bowling</th>
                <td>7</td>
                <td>8</td>
                <td>2</td>
                <td>124</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="container-fluid my-5">
        <div class="row mx-3 my-3">
          <h3>International Stats</h3>
          <hr />
        </div>
        <div class="row bg-white mx-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Roll</th>
                <th scope="col">Innings</th>
                <th scope="col">Runs/Wickets</th>
                <th scope="col">Average</th>
                <th scope="col">Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Batting</th>
                <td>10</td>
                <td>250</td>
                <td>25</td>
                <td>110</td>
              </tr>
              <tr>
                <th scope="row">Bowling</th>
                <td>7</td>
                <td>8</td>
                <td>2</td>
                <td>124</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container-fluid my-5">
        <div class="row mx-3 my-3">
          <h3>Total Stats</h3>
          <hr />
        </div>
        <div class="row bg-white mx-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Roll</th>
                <th scope="col">Innings</th>
                <th scope="col">Runs/Wickets</th>
                <th scope="col">Average</th>
                <th scope="col">Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Batting</th>
                <td>10</td>
                <td>250</td>
                <td>25</td>
                <td>110</td>
              </tr>
              <tr>
                <th scope="row">Bowling</th>
                <td>7</td>
                <td>8</td>
                <td>2</td>
                <td>124</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container-fluid my-5">
          <div class="row mx-3 my-3">
            <h3>Batting Stats</h3>
            <hr />
          </div>
          <div class="row bg-white mx-3">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Match</th>
                  <th scope="col">Runs</th>
                  <th scope="col">Balls</th>
                  <th scope="col">Outs</th>
                  <th scope="col">6s</th>
                  <th scope="col">4s</th>
                  <th scope="col">Dot%</th>
                  <th scope="col">Date</th>
                  <th scope="col">Venue</th>
                </tr>
              </thead>
              <tbody>
                {data.stats[0]
                  .slice(1, data.stats[0].length - 1)
                  .map((item) => (
                    <tr>
                      <th scope="row">{item[0]}</th>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                      <td>{item[4]}</td>
                      <td>{item[11]}</td>
                      <td>{item[10]}</td>
                      <td>{item[12]}</td>
                      <td>{item[13]}</td>
                      <td>{item[14]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div class="container-fluid my-5">
          <div class="row mx-3 my-3">
            <h3>Bowling Stats</h3>
            <hr />
          </div>
          <div class="row bg-white mx-3">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Match</th>
                  <th scope="col">Overs</th>
                  <th scope="col">Runs</th>
                  <th scope="col">Wickets</th>
                  <th scope="col">6s</th>
                  <th scope="col">4s</th>
                  <th scope="col">Dot%</th>
                  <th scope="col">Date</th>
                  <th scope="col">Venue</th>
                </tr>
              </thead>
              <tbody>
                {console.log(data.stats[1])}
                {data.stats[1]
                  .slice(1, data.stats[0].length - 1)
                  .map((item) => (
                    <tr>
                      <th scope="row">{item[0]}</th>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                      <td>{item[4]}</td>
                      <td>{item[11]}</td>
                      <td>{item[10]}</td>
                      <td>{item[12]}</td>
                      <td>{item[13]}</td>
                      <td>{item[14]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default section2;
