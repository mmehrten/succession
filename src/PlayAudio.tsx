import React from "react";
import Button from 'react-bootstrap/Button';
import {getFQPath} from "./Util";

class PlayAudio extends React.Component {
  props: any = {};
  state: any = {};
  audio: HTMLAudioElement = new Audio();
  imagePath: string = "";

  constructor(props: any) {
    super(props);

    this.props = props;
    let path = getFQPath(props.mp3Path);
    this.imagePath = getFQPath(props.imagePath);
    this.audio = new Audio(path);
    this.state = {callback: this.playAudio, text: 'Play', variant: "primary", size: "lg"};
  }

  playAudio = () => {
    this.audio.play();
    this.setState({
      callback: this.pauseAudio,
      text: "Pause",
      variant: "secondary",
    });
  }

  pauseAudio = () => {
    this.audio.pause();
    this.setState({
      callback: this.playAudio,
      text: "Play",
      variant: "primary",
    });
  }

  render() {
    return (
        <div id="playAudio">
          <img src={this.imagePath} onClick={this.state.callback} className="img-fluid" alt="NoContextJoke" />
          <br/>
          <br/>
          <Button onClick={this.state.callback} variant={this.state.variant} size={this.state.size}>{this.state.text}</Button>
        </div>
    );
  }
}

export default PlayAudio;