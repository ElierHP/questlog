import Current from "../pages/Current";
import { Routes, Route } from "react-router-dom";
import New from "../pages/New";
import Completed from "../pages/Completed";
import ErrorPage from "../pages/404";
import Layout from "../components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Current />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
