
import { useState } from 'react';
import Counter from './Counter';
function App() {

  const [counter, setCounter ] = useState(1);

  const increment = () => {
    setCounter(prevCount => prevCount + 1);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  const decrement = () => {
    if(counter >= 1){
      setCounter(prevCount => prevCount - 1);
    }
  }

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <h2>count value is <Counter count={counter} /></h2>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
