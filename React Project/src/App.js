
import { useState } from 'react';
function App() {

  const [state, setState ] = useState(1);

  const onClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setState(json))
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>Fetch Data</button>

        <div>
          <p>Title: {state.title}</p>
          <p>userId: {state.userId}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
