import './App.css';
import SideBar from './components/SideBar';
import Login from "./components/Login";

function App() {
  return (
    <div className="flex">
    <SideBar />
    <Login />
  </div>
  );
}

export default App;