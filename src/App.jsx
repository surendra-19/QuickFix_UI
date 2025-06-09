import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AuthScreen from './pages/AuthScreen'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/authorization' element = {<AuthScreen/>} >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
