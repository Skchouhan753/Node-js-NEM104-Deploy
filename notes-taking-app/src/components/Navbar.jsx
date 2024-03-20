import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <button>
          <Link to="/register">Register</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/notes">Notes</Link>
        </button>
      </nav>
    </>
  );
};
export default Navbar;
