import { useState } from 'react';
import './App.css';
import { Button } from "./components/props/Button"
import { Input } from './components/props/Input';
import { CSS } from './components/props/CSS';

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Button onClick={(event) => {
        console.log("on click", event);
      }} /> 
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
      <CSS styles={{color: "red", fontSize: "large"}} />
    </div>
  );
}

export default App;
