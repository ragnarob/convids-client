import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/maker-list">Makers</Link>
          </li>
          <li>
            <Link to="/video-list">Videos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
