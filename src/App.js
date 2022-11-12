import { useState } from "react";
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0)
    
  return (
    <div className="Home">
      <div>
        Accueil
      </div>
      <div className="sandbox">
        1 + 1 / {1 + 1} <br />
        number / {number}
      </div>
      <button onClick={() => setNumber(number+1)}>
        INCREMENTER
      </button>
    </div>
  );
      
}

export default App;
