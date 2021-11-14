import './App.css';
import PlayAudio from './PlayAudio';
import React from 'react';

const imageCount = 30;

const App: React.FC = () => {
  let imagePath = "image/suc" + Math.floor(Math.random() * 100) % imageCount + ".png";

  return (
    <div className="App">
      <header className="App-header">
        <PlayAudio mp3Path="succession.mp3" imagePath={imagePath} />
      </header>
      <footer className="App-footer">
        <a href="https://github.com/mmehrten/succession">Project Homepage</a>
        <div>All images from <a href="https://twitter.com/nocontextroyco">no context succession</a></div> 
      </footer>
    </div>
  );
}

export default App;
