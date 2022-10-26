import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import SignInButton from './Button'
const Nav = () => {
  const [show, setShow] = useState(false);
  const user = null;

  const transitionScrollBar = () => {
    setShow(window.scrollY > 100 && true);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionScrollBar);
    return () => window.removeEventListener("scroll", transitionScrollBar);
  }, []);
  return (
    <NavBar black={show}>
      <NavContent>
        <NavLogo
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />

        {!user ? (
          <SignInButton>Sign In</SignInButton>
        ) : (
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user avatar"
          />
        )}
      </NavContent>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 5;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => props.black && "#111"};
`;

const NavContent = styled.figure`
  display: flex;
  justify-content: space-between;

  padding: 1rem 1.2rem;
`;
const NavLogo = styled.img`
  width: 5rem;
  cursor: pointer;
`;
const Avatar = styled.img`
  width: 2rem;
  cursor: pointer;
`;
