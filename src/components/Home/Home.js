import './Home.css';
import Heroarea from '../Heroarea/Heroarea';
import Projects from '../Projects/Projects';

const Home=()=> {
  return (
    <div>

      <div className="main-content">
        <div className='hero'>
          <Heroarea />
        </div>
        <div className='projects'>
          <Projects />
        </div>
        
      </div>
    </div>    
  );
}

export default Home;
