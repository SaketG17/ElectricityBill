import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import LoggedInPage from "./components/LoggedInPage";
import { UserContext } from "./contexts/userContext";
import { useContext } from "react";
import "./styles/App.scss"
import "./styles/colors.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/login.scss"
import "./styles/footer.scss"

function App() {
  const { user } = useContext(UserContext);
  const ProtectedRoute = ({ children }) => {
    if(user){
      return children
    }else{
      return <Navigate to = "/" />
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/loggedInPage" element = {<ProtectedRoute>
          <LoggedInPage />
        </ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
