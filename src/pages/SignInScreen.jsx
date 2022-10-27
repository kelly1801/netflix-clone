import { useRef, useEffect } from "react";
import styled from "styled-components";
import { BTN } from "../components/Button";
import {createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword} from '../firebase/firebase'


const SignInScreen = () => {
 
   const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const register = async (e) => {
    e.preventDefault();
    createAuthUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
   
  
  };

  const signIn = (e) => {
    e.preventDefault();
 
    signInAuthUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
  
  };

  return (
    <SignInContainer>
      <Form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="email" name="password" />
        <input type="password" ref={passwordRef} placeholder="password" name="password" />
        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
        <h4 onClick={register}>
          <span>New to Netflix? </span>Sign Up Now
        </h4>
      </Form>
    </SignInContainer>
  );
};

export default SignInScreen;

const SignInContainer = styled.div`
  max-width: 300px;
  max-heigt: 300px;
  margin-top: -8rem;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  h1 {
    text-align: left;
  }
  h4 {
    text-align: left;
    margin-top: 30px;
    font-size: 0.8rem;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
    span {
      color: gray;
    }
  }
`;
const Form = styled.form`
  display: grid;

  input {
    padding: 0.6rem;
    outline-width: 0;
    height: 2.5rem;
    margin-bottom: 0.8rem;
    border: none;
    pading: 5px 15px;
    border-radius: 5px;
  }
`;
const Button = styled(BTN)`
  pading: 1rem 1.2ewm;
  border-radius: 5px;
  position: sticky;
`;
