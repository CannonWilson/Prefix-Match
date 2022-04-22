import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Api from "./components/api/Api";
import NotFound from "./components/notfound/NotFound";
// import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/api" element={<Api/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
