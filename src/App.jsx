import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <>
      <Sidenav />
      
      <Main />
      <Work />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
