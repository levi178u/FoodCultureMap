import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/RegistrationForm';
import PrivateRoute from './components/PrivateRoute'; // Adjust the path as needed
import ViewStoryPage from './pages/ViewStoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewStory" element={<ViewStoryPage />} />

          <Route
        path="/homepage"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      /> 
      </Routes>
    </Router>
  );
}



export default App;
