import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import RQSuperHeros from "./components/RQSuperHeros";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQuery from "./components/ParallelQuery";
import DynamicParallel from "./components/DynamicParallel";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex gap-5 h-16 bg-gray-400 items-center px-5 underline">
          <Link to="/">Home</Link>
          <Link to="/super-heros">SuperHeros</Link>
          <Link to="/rq-super-heros">RQSuperHeros</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dynamic-parallel-query"
            element={<DynamicParallel heroId={[1, 3]} />}
          />
          <Route path="/rq-super-hero/:heroId" element={<RQSuperHero />} />
          <Route path="/parallel-query" element={<ParallelQuery />} />
          <Route path="/super-heros" element={<SuperHeros />} />
          <Route path="/rq-super-heros" element={<RQSuperHeros />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
