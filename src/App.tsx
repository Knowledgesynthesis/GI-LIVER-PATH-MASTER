import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/themeStore'
import Layout from './components/Layout'
import Home from './pages/Home'
import Normal from './pages/Normal'
import Esophagus from './pages/Esophagus'
import Stomach from './pages/Stomach'
import SmallBowel from './pages/SmallBowel'
import Colon from './pages/Colon'
import Appendix from './pages/Appendix'
import Liver from './pages/Liver'
import LiverTumors from './pages/LiverTumors'
import Pancreas from './pages/Pancreas'
import Gallbladder from './pages/Gallbladder'
import IHC from './pages/IHC'
import Molecular from './pages/Molecular'
import Pitfalls from './pages/Pitfalls'
import Cases from './pages/Cases'
import Assessment from './pages/Assessment'
import Settings from './pages/Settings'
import { useEffect } from 'react'

function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/esophagus" element={<Esophagus />} />
          <Route path="/stomach" element={<Stomach />} />
          <Route path="/small-bowel" element={<SmallBowel />} />
          <Route path="/colon" element={<Colon />} />
          <Route path="/appendix" element={<Appendix />} />
          <Route path="/liver" element={<Liver />} />
          <Route path="/liver-tumors" element={<LiverTumors />} />
          <Route path="/pancreas" element={<Pancreas />} />
          <Route path="/gallbladder" element={<Gallbladder />} />
          <Route path="/ihc" element={<IHC />} />
          <Route path="/molecular" element={<Molecular />} />
          <Route path="/pitfalls" element={<Pitfalls />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
