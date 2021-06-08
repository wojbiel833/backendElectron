import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    const { status, time, timer } = this.state;

    const startBtn = document.querySelector(".btnStart");

    formatTime = () => {
      const minutes = time / 60;
      const seconds = time / 60 / 60;

      return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    };

    step = () => {};

    startTimer = () => {
      this.time = 1200;

      this.setState({
        status: "work",
        timer: setInterval(this.step, 1000),
      });
    };

    return (
      <div>
        <h1>Protect your eyes</h1>
        {status == "off" ? (
          <div>
            <div>
              <p>
                According to optometrists in order to save your eyes, you should
                follow the 20/20/20. It means you should to rest your eyes every
                20 minutes for 20 seconds by looking more than 20 feet away.
              </p>
              <p>
                This app will help you track your time and inform you when it's
                time to rest.
              </p>
            </div>
            <button className="btnStart">Start</button>
          </div>
        ) : (
          ""
        )}
        {status == "work" ? <img src="./images/work.png" /> : ""}
        {status == "rest" ? <img src="./images/rest.png" /> : ""}
        {status != "off" ? (
          <div>
            <div className="timer">{formatTime()}</div>
            <button className="btn">Stop</button>
          </div>
        ) : (
          ""
        )}

        <button className="btn btn-close">X</button>
      </div>
      //   <div>
      //   <h1>Protect your eyes</h1>
      //   {(status === 'off') && <AppDescription />}
      //   {(status === 'work') && <img src="./images/work.png" />}
      //   {(status === 'rest') && <img src="./images/rest.png" />}
      //   {(status !== 'off') && <div className="timer">18:23</div>}
      //   {(status === 'off') && <button className="btn">Start</button>}
      //   {(status !== 'off') && <button className="btn">Stop</button>}
      //   <button className="btn btn-close">X</button>
      // </div>
    );
  }
}

render(<App />, document.querySelector("#app"));
