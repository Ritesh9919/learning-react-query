import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import RQSuperHeros from "./components/RQSuperHeros";

function App() {
  return (
    <Router>
      <div className="flex gap-5 h-16 bg-gray-400 items-center px-5 underline">
        <Link to="/">Home</Link>
        <Link to="/super-heros">SuperHeros</Link>
        <Link to="/rq-super-heros">RQSuperHeros</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heros" element={<SuperHeros />} />
        <Route path="/rq-super-heros" element={<RQSuperHeros />} />
      </Routes>
    </Router>
  );
}

export default App;
