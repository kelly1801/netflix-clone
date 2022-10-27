import { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Nav from "./components/Nav";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import {auth, onAuthStateChangedListener } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login,logout, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((userAuth)=>{
        if (userAuth){
        console.log('si')
           console.log(userAuth)
         dispatch(login({
          uid : userAuth.uid,
          email: userAuth.email
         }))
        }
        else {
          dispatch(logout)
        }
        
        
    })
return unsubscribe  
}, [])
  return (
    <AppContainer>
      <Nav />
      <Routes>
        <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
      <Route path="profile" element={<ProfileScreen/>}/>
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: #111;
`;
