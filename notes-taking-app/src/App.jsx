import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./components/Navbar";
// import Login from './components/Login'
// import Signup from './components/Signup'

function App() {
  return (
    <>
      <Navbar />
      <h1>Note Taking App</h1>

      <AllRoutes />
    </>
  );
}

export default App;
