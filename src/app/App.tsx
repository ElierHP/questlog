import Current from "../pages/Current";
import { Routes, Route } from "react-router-dom";
import NewTask from "../pages/NewTask";
import Completed from "../pages/Completed";
import ErrorPage from "../pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Current />}></Route>
      <Route path="/completed" element={<Completed />}></Route>
      <Route path="/new" element={<NewTask />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
