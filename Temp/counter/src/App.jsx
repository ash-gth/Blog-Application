import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'

function App() {
  const [login, setLogin] = useState(true);
  const [signUp, setSignup] = useState(false);
  return(
    <>
      {
        login &&
        <Login lginkaro={setLogin} signkaro={setSignup} />
      }

      {
        signUp &&
        <Signup lginkaro={setLogin} signkaro={setSignup}/>
      }

    </>
  )
  
}

export default App
