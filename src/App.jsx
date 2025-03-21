import { BrowserRouter, Routes, Route, Link } from "react-router"

// pages
import Home from "./pages/Home"
//import Quiz from "./pages/Quiz"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Quiziz Questions</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Question</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;