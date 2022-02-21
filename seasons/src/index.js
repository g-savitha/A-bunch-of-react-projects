import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
  state = { lat: null, error: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ error: error.message })
    );
  }
  renderContent() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    } else if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Please accept location request" />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
