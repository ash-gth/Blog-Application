import { useState } from 'react';

import { Box, TextField, Button, styled,Typography } from "@mui/material";



const Component = styled(Box)`
width: 30%;
margin: auto;
box-shadow: 5px 2px 15px 5px rgb(0 0 0 / 0.6);
`;
const Image = styled('img')
({
        width: 160,
        margin: 'auto',
        display: 'flex',
        padding: '50px' 
})
const Wrapper = styled(Box)`
display: flex;
flex: 1;
flex-direction: column;
margin-top: 15px 25px;
width: 300px;
margin-left: 85px;
& > div ,& > button, & >p{
margin-top: 20px;
}
`;
const LoginButton = styled(Button)`
text-transform: none;
background-color: #FB641B;
color: #fff;
border-radius: 4px;
height: 48px;

`
const SignUpButton = styled(Button)`
text-transform: none;
background-color: #ffffffff;
color: #2874f0;
border-radius: 4px;
height: 48px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
margin-bottom: 20px;
`
const Text = styled(Typography)`
color: #878787;
font-size: 16px;

`

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const [account, toggleAccount] = useState('login');
const togglesignup = () => {
   account === 'signup' ? toggleAccount('login') :  toggleAccount('signup');
}
  return (
    <Component>
      <Image src={imageURL} alt="Login" /> 
        {
           account === 'login' ?    
                <Wrapper>
                     <TextField variant="standard" label="Enter Username"/>
                     <TextField variant="standard" label="Enter Password"/>
                     <LoginButton variant="contained">Login</LoginButton>
                     <Text style={{ textAlign: 'center'}}>OR </Text>
                     <SignUpButton onClick={() => togglesignup()}>Create an account</SignUpButton>
                </Wrapper>
            :
                <Wrapper>
                     <TextField variant="standard" label="Enter Name"/>
                     <TextField variant="standard" label="Enter Username"/>
                     <TextField variant="standard" label="Enter Password"/>
                     <SignUpButton variant="contained">Login</SignUpButton>
                     <Text style={{ textAlign: 'center'}}>OR </Text>
                     <SignUpButton onClick={() => togglesignup()}>Already have an account</SignUpButton>
                </Wrapper>
        }

    </Component>
  );
};

export default Login;
