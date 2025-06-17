import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AuthScreen from './pages/AuthScreen'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/authorization' element = {<AuthScreen/>} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
