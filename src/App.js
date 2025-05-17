import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './/components/Home.js';
import Layout from './/components/Layout.js';
import Welcome from './components/Welcome.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Project from './components/Project.js';
import Internship from './components/Internship.js';
import Contact from './components/Contact.js';
import Participation from './components/Participation.js';
import Smartelpan from './components/Smartelpan.js';
import Inventory from './components/Inventory.js';
import Onlinevs from './components/Onlinevs.js';
import MLCrop from './components/MLCrop.js';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Welcome/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/educ' element={<Education/>}/>
            <Route path='/skill' element={<Skills/>}/>
            <Route path='/proj' element={<Project/>}/>
            <Route path='/intern' element={<Internship/>}/>
            <Route path='/partt' element={<Participation/>}/>
            <Route path='/smp' element={<Smartelpan/>}/>
            <Route path='/ims' element={<Inventory/>}/>
            <Route path='/ovs' element={<Onlinevs/>}/>
            <Route path='/cpyp' element={<MLCrop/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
