import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project';

import {Routes, Route} from 'react-router-dom'

const App=()=> {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={Home} exact />
        <Route path='/projects/:id' element={Project} exact/>
      </Routes>
    </div>    
  );
}

export default App;

