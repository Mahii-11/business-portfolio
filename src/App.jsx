import  Navbar  from './components/Navbar'
import About from './sections/About'
import  Hero  from './sections/Hero'
import { Skills } from './sections/Skills'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default App
