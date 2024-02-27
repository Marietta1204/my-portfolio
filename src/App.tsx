// import { useState } from 'react'
import Sidenavbar from './components/Sidenavbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'


function App() {
 return (
    <div>
      <Sidenavbar/>
      <Main/>
      <Work/>
      <Projects/>
      <About/>
      <Contact />
    </div>
  )
}

export default App
