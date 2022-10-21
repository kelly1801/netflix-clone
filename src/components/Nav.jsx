import {useState, useEffect} from "react";
import "./nav.css";
const Nav = () => {
    const [show, setShow] = useState(false)
  
    const transitionScrollBar = () => {
       setShow( window.scrollY>100 && true)
    }

    useEffect(() => {
      window.addEventListener('scroll', transitionScrollBar)
    return () => window.removeEventListener('scroll', transitionScrollBar)
    }, []);
    return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <figure className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user avatar"
        />
      </figure>
    </nav>
  );
};

export default Nav;
