import "./App.css";
import Login from "./components/login/login";
import UserMainPage from "./components/userMainPage/userMainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<UserMainPage />} />
      </Routes>
    </div>
  );
}

export default App;
