import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import Nav from "./components/Nav";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
function App() {
  const user = null;
  return (
    <AppContainer>
      <Nav />
      <Routes>
        <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: #111;
`;
