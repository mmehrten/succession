import React from "react";
import ReactDOM from 'react-dom';

class PlayAudio extends React.Component{
  constructor(path) {
    super();
    this.path = process.env.PUBLIC_URL + '/' + path;
    this.audio = new Audio(path);
  }

  getButton(callback, text) {
    return (
        <div id="playAudio">
          <button onClick={callback}>{text}</button>
        </div>
    );
  }

  playAudio = () => {
    this.audio.play();
    let element = this.getButton(this.pauseAudio, "Pause");
    ReactDOM.render(element, document.getElementById("playAudio"));
  }

  pauseAudio = () => {
    this.audio.pause();
    let element = this.getButton(this.playAudio, "Play");
    ReactDOM.render(element, document.getElementById("playAudio"));
  }

  render() {
    return this.getButton(this.playAudio, "Play");
  }
}

export default PlayAudio;