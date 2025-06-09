import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import VideoPlayer from './components/VideoPlayer'
import PartyInfo from './components/PartyInfo'
import GiftIdeas from './components/GiftIdeas'
import GuestManual from './components/GuestManual'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/party-info" element={<PartyInfo />} />
        <Route path="/gift-ideas" element={<GiftIdeas />} />
        <Route path="/guest-manual" element={<GuestManual />} />
      </Routes>
    </Router>
  )
}

export default App
