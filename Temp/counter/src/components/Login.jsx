import { useState } from "react";

function Login({ lginkaro, signkaro}) {
//   const [login, setLogin] = useState(true);
//   const [signUp, setSignup] = useState(false);


//   const toggleLogin = () => {
//     setLogin(true);
//     setSignup(false)
    
//   }

//   const toggleSignup = () => {
//     setLogin(false)
//     setSignup(true)
//   }
  
  const signukaro = () => {
   lginkaro(false)
    signkaro(true)
  }

  return (
    <>
      {/* <Login />

      <Signup /> */}

      {/* {
        login

        &&

        <>
        <div>Login</div>
        <button onClick={toggleSignup}>Go to Sign UP</button>
        </>
      }

      {
        signUp 
        
        &&

        <>
        <div>Sign Up</div>
        <button onClick={toggleLogin}>Go to Login</button>
        </>
      } */}


    {/* {
        login

        &&

        <>
        <div>Login</div>
        <button onClick={toggleSignup}>Go to Sign UP</button>
        </>
      }

      {
        !login 
        
        &&

        <>
        <div>Sign Up</div>
        <button onClick={toggleLogin}>Go to Login</button>
        </>
      } */}

      {/* {
        login === true ?
        <>
        <div>Login</div>
        <button onClick={toggleSignup}>Go to SignUp</button>
        </>
        : 
        <>
        <div>Sign Up</div>
        <button onClick={toggleLogin}>Go to Login</button>
         </>
      } */}

      <div>
        Login
      </div>
      <button onClick={signukaro}>Go to SignUP</button>
    </>
   
  )
}

export default Login