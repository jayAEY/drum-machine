import { useState } from 'react';
import './App.css';
import sounds from './sounds'

function App() {
  const [sound,setSound] = useState([])  
 
  

  const playAudio = () => {      
    let audio = document.getElementById(sound.keyTrigger);
    audio.play();
  }

  let handleClick = (index) => {
    setSound(sounds[index]);
    playAudio()
    }

    let handleKeyPress = (event) => {
      if(event.key == sound.keyTrigger.toLowerCase()) {
      handleClick()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

  return (
    <div className="App">
      <div className='container' id='drum-machine'>  
        <div id='display'>{sound.id}</div>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(0)}><audio className='clip' id='Q' src={sound.url} />Q</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(1)}><audio className='clip' id='W' src={sound.url} />W</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(2)}><audio className='clip' id='E' src={sound.url} />E</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(3)}><audio className='clip' id='A' src={sound.url} />A</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(4)}><audio className='clip' id='S' src={sound.url} />S</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(5)}><audio className='clip' id='D' src={sound.url} />D</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(6)}><audio className='clip' id='Z' src={sound.url} />Z</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(7)}><audio className='clip' id='X' src={sound.url} />X</button>
        <button className='btn drum-pad' id={sound.id} onClick={() => handleClick(8)}><audio className='clip' id='C' src={sound.url} />C</button>

    </div> 
    </div>
  );
}

export default App;
