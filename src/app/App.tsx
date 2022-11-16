import Current from "../pages/Current";
import { Routes, Route } from "react-router-dom";
import New from "../pages/New";
import Completed from "../pages/Completed";
import ErrorPage from "../pages/404";
import Layout from "../components/layout/Layout";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { setQuests } from "./features/questSlice";

function App() {
  const dispatch = useAppDispatch();

  // Runs once on page load.
  // Grab data from localStorage and set global quest state.
  useEffect(() => {
    // Grab key "quests" from local storage.
    const getData = localStorage.getItem("quests") || "";

    if (getData !== "") {
      // Set quests global state based on localStorage data.
      dispatch(setQuests(JSON.parse(getData)));
    }

    // NOTE: Run effect once on component mount
    // recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
