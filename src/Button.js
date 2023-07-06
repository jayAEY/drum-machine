import sounds from './sounds'

const Button = ({index}) => {  
const playAudio = () => {      
    let audio = document.getElementById(sounds[index].keyTrigger);
    let playPromise = audio.play();

    if(playPromise !== undefined) {
        playPromise.then(_ => {           
          })
          .catch(error => {          
          });
    }
    }    

let handleClick = (index) => {  
    document.getElementById('display').innerHTML = sounds[index].id;
    playAudio()
    }

let handleKeyPress = (event) => {
    if((event.key).toUpperCase() === (sounds[index].keyTrigger)){
        document.getElementById('display').innerHTML = sounds[index].id;    
    playAudio()
    }
}

    document.addEventListener('keydown', handleKeyPress)    

  return (
    <button className='btn drum-pad' id={sounds[index].id} onClick={() => handleClick(index)}><audio className='clip' id={sounds[index].keyTrigger} src={sounds[index].url} />{sounds[index].keyTrigger}</button>
   )
}

export default Button