import { Footer } from './components/Footer'
import  Navbar  from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import  Hero  from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import { Skills } from './sections/Skills'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
