import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Header from "./Header";
import Def from "./Definition";
import Search from "./Search-bar";
import Footer from "./Footer";
import Speech from "speak-tts";

const speech = new Speech();

speech
  .speak({
    text: "Welcome!"
  })
  .then(() => {
    console.log("Success !");
  })
  .catch(e => {
    console.error("An error occurred :", e);
  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      words: [],
      names: []
    };

    speech
      .init()
      .then(data => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available");
        let nameList = [];
        data.voices.forEach(e => {
          nameList.push({ name: e.name, lang: e.lang });
        });
        this.setState({ names: nameList });
      })
      .catch(e => {
        console.error("An error occured while initializing : ", e);
      });
  }

  onSearchChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    speech
      .speak({
        text: this.state.text
      })
      .then(() => {
        console.log("Success !");
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={options} />
        <Header />
        <Def />
        <Search
          onSubmit={this.onSubmit}
          onSearchChange={this.onSearchChange}
          voiceList={this.state.names}
          words={this.state.text.split()}
          speech={speech}
        />
        <Footer />
      </div>
    );
  }
}

const options = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
};

export default App;
