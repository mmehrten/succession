import './App.css';
import PlayAudio from './PlayAudio';

function App() {
  let audio = new PlayAudio("succession.mp3");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {audio.render()}
        </p>
      </header>
    </div>
  );
}

export default App;
