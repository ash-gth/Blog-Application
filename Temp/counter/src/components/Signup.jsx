import React from 'react'

function Signup(props) {
    const loginkaro = () => {
        props.lginkaro(true);
        props.signkaro(false);
    }
  return (
    <>
    <div>Signup</div>
    <button onClick={loginkaro}> Go to Login</button>
    </>
  )
}

export default Signup