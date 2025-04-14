import './App.css';
import Home from './Home';
import Projects from './Projects';
import Blogs from './Blogs';
import Contact from './Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/portfolio/" element={<Home/>}/>
        <Route exact path="/portfolio/Projects" element={<Projects/>}/>
        <Route exact path="/portfolio/Blogs" element={<Blogs/>}/>
        <Route exact path="/portfolio/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
