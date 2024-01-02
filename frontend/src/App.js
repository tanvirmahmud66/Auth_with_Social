import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './layout/MainLayout';
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import ActivateAccount from "./pages/ActivateAccount";
import Facebook from "./pages/Facebook";
import Google from "./pages/Google";

function App() {

  const {user} = useContext(AuthContext)

  return (
    <Router basename="/">
      <MainLayout>
          <Routes>
            <Route path="/" element={user?<Home/>:<Navigate to='/login'/>}/>
            <Route path="/login" element={!user?<Login/>:<Navigate to='/'/>}/>
            <Route path="/signup" element={!user?<Signup/>:<Navigate to='/'/>}/>
            <Route path="/facebook" element={<Facebook/>}/>
            <Route path="/google" element={<Google/>}/>
            <Route path="/reset_password" element={<ResetPassword/>}/>
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
            <Route path="/activate/:uid/:token" element={<ActivateAccount/>}/>
          </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
