import './App.css';
import WelcomePage from './routes/WelcomePage';
import Profile from "./routes/Profile";
import Login from './components/Login';
import Register from './components/Register';
import Cars from './routes/Cars';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
