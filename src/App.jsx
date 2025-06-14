import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AuthScreen from './pages/AuthScreen'
import Home from './pages/Home'
import ServiceProviderCard from './components/ServiceProviderCard'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ServiceProviderCard/>} />
          <Route path='/authorization' element = {<AuthScreen/>} >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
