import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Engineer",
    },
    show: false,
    mountedAt: new Date(),
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedAt } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>
              <strong>Profession:</strong> {profession}
            </p>
            <p>{bio}</p>
          </div>
        )}

        <p>
          Component mounted since: {(new Date() - mountedAt) / 1000} seconds
        </p>
      </div>
    );
  }
}

export default App;
