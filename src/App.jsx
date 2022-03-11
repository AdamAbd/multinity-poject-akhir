import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="app">
      <div className="brand">Adam Website</div>
      <nav className="nav">
        <Link className="nav-item" to={"/"}>
          Home
        </Link>
        <Link className="nav-item" to={"profile"}>
          Profile
        </Link>
        <Link className="nav-item" to={"blog"}>
          Blog
        </Link>
        <Link className="nav-item" to={"contact"}>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"profile"} element={<Profile />} />
        <Route path={"blog"} element={<Blog />} />
        <Route path={"blog/:id"} element={<BlogDetail />} />
        <Route path={"contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
