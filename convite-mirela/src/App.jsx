import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import VideoPlayer from './components/VideoPlayer'
import PartyInfo from './components/PartyInfo'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/party-info" element={<PartyInfo />} />
      </Routes>
    </Router>
  )
}

export default App
