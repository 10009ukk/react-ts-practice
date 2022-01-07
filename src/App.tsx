import { useState } from 'react';
import './App.css';
import { Button } from "./components/Button"
import { Input } from './components/Input';

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Button onClick={(event) => {
        console.log("on click", event);
      }} /> 
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
}

export default App;
