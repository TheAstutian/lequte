import './App.css';
import Heroarea from './components/Heroarea/Heroarea';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';

const App=()=> {
  return (
    <div>
      <Navigation/> 
      <Heroarea />
      <Projects />
    </div>    
  );
}

export default App;
