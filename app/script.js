import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    status: "off",
    time: 1200,
    timer: null,
  };

  render() {
    const { status, time, timer } = this.state;

    const formatTime = () => {
      const minutes = Math.round(time / 60) + "";
      const seconds = Math.round(minutes / 60) + "";

      return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    };

    const playBell = () => {
      const bell = new Audio("./sounds/bell.wav");
      bell.play();
    };

    const countDown = () => {
      this.setState({
        timer: setInterval(() => {
          this.state.time - 1;
        }, 1000),
      });
    };
    const step = () => {
      if (this.state.time === 0) {
        playBell();
        if (this.state.status === "work") {
          this.setState({
            status: "rest",
            time: 20,
          });
        } else if (this.state.status === "rest") {
          this.setState({
            status: "work",
            time: 1200,
          });
        }
      } else {
        this.setState({
          timer: this.countDown,
        });
      }
    };

    const startTimer = () => {
      this.setState({
        time: 1200,
        status: "work",
        timer: setInterval(this.step, 1000),
      });
    };

    const stopTimer = () => {
      clearInterval(this.timer);
      this.setState({
        time: 0,
        status: "off",
      });
    };

    const closeApp = () => {
      window.close();
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
            <button className="btn" onClick={startTimer}>
              Start
            </button>
          </div>
        ) : (
          ""
        )}
        {status == "work" ? <img src="./images/work.png" /> : ""}
        {status == "rest" ? <img src="./images/rest.png" /> : ""}
        {status != "off" ? (
          <div>
            <div className="timer">{formatTime()}</div>
            <button className="btn" onClick={stopTimer}>
              Stop
            </button>
          </div>
        ) : (
          ""
        )}

        <button className="btn btn-close" onClick={closeApp}>
          X
        </button>
      </div>
    );
  }
}

render(<App />, document.querySelector("#app"));
