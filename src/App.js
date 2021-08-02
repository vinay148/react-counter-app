import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  function increaseCounter(){
    setCounter(counter + 1);
  }

  function decreaseCounter(){
    if(counter == 0){
      setCounter(0);
    }else{
      setCounter(counter-1);
    }
  }


  return (
    <div>
      <button className="btn">Counter {counter}</button>
      
      <button className="btn" onClick={increaseCounter}>+</button>
    
      <button className="btn" onClick={decreaseCounter}>-</button>
    </div>
  );
}

export default App;
