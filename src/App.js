import "./App.css";
import Login from "./components/login/login";
import Admin from "./components/adminPage/adminPage";
import Test from "./components/adminPage/test";
import UserProfilePage from "./components/userProfilePage/userProfiePage";
import UserMainPage from "./components/userMainPage/userMainPage";
import UserMainForm from "./components/userMainForm/userMainForm";
// import UserMainForm from "./components/userMainForm/userMainFormcopy";
import { Routes, Route } from "react-router-dom";
import UserDocUploadOne from "./components/userMainPage/userDocUploadOne";
import UploadTest from "./components/userMainPage/userUploadPageTest.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<UserProfilePage />} />
        {/* <Route path="/mainpage" element={<UserMainPage />} /> */}
        <Route path="/mainform" element={<UserMainForm />} />
        <Route path="/mainpage" element={<UploadTest />} />
      </Routes>
    </div>
  );
}

export default App;
