import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './layout/MainLayout';

function App() {

  const user = false

  return (
    <Router basename="/">
      <MainLayout>
          <Routes>
            <Route path="/" element={user?<Home/>:<Navigate to='/login'/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
