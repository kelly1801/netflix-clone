import styled from "styled-components";
import Button from "../components/Button";
const LoginScreen = () => {
  return (
    <LoginScreenContainer>
      <LoginScreenGradient />
      <LoginScreenBody>
        <>
          <h1>Unlimited films, TV programs and more.</h1>
          <h2>Watch anywhhere, Cancel at any time</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>

          <LoginScreenInput>
            <form>
              <input type="email" placeholder="Email Address" />
              <Btn>GET STARTED</Btn>
            </form>
          </LoginScreenInput>
        </>
      </LoginScreenBody>
    </LoginScreenContainer>
  );
};

export default LoginScreen;

const LoginScreenContainer = styled.main`
  position: relative;
  height: 100%;
  background: url("https://yourspanishguide.com/wp-content/uploads/2021/02/dUyCkp.jpg")
    center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const LoginScreenGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const LoginScreenBody = styled.div`
  position: absolute;
  top: 30%;

  z-index: 1;
  color: #fff;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 3.125rem;
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1.8rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const LoginScreenInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    height: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
  }
  input {
    padding: 0.6rem;
    outline-width: 0;

    width: 30%;
    border: none;
    max-width: 600px;
  }
`;
const Btn = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;
