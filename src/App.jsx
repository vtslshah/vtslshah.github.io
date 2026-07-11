import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Portfolio from './components/sections/Portfolio'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import SEOHead from './components/seo/SEOHead'

function App() {
  return (
    <div className="app-shell">
      <SEOHead />
      <Header />
      <main id="content">
        <Hero />
        <Features />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
