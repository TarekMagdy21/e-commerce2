// src/App.js
import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{navigate('/login')}}>Login</button>
      <button onClick={()=>{navigate('/signup')}}>Sign Up</button>
    </div>
  );
}

export default App;
