import './App.css';
import { Button } from "./components/Button"
function App() {
  
  return (
    <div className="App">
      <Button onClick={(event) => {
        console.log("on click", event);
      }} /> 
    </div>
  );
}

export default App;
