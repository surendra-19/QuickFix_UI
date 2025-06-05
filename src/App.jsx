import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AuthScreen from './pages/AuthScreen'
import Home from './pages/Home'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/*' element = {<AuthScreen/>} >
            <Route path='login' element={<LoginForm/>} />
            <Route path='signup' element = {<SignUpForm/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
