import './App.css';
import Button from './Button';

function App() { 
  return (
    <div className="App">
      <div className='container' id='drum-machine'>  
        <div id='display'></div>
        <Button index='0'/>
        <Button index='1'/>
        <Button index='2'/>
        <Button index='3'/>
        <Button index='4'/>
        <Button index='5'/>
        <Button index='6'/>
        <Button index='7'/>
        <Button index='8'/>        
    </div> 
    </div>
  );
}

export default App;
