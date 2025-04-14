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
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
