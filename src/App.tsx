import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Status } from './components/Status';

function App() {
  
  return (
    <div className="App">
      <Status name="success"/>
      <Heading>!!</Heading>

      <Oscar>
        <Heading>!!</Heading>
      </Oscar>
      <Greet name='man' isLoggedIn={true}/>
    </div>
  );
}

export default App;
