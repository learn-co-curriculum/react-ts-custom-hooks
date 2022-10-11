import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
