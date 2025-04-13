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
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/Blogs" element={<Blogs/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
