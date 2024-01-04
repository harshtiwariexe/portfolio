import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './component/home'
import About from './component/about'
import Skill from './component/skill'
import Project from './component/projects'
import Contact from './component/contact'


export default function App(){
  return <>
  <Router>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/skill' element={<Skill/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  </Router>
  </>
}

