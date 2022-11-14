import Current from "../pages/Current";
import { Routes, Route } from "react-router-dom";
import New from "../pages/New";
import Completed from "../pages/Completed";
import ErrorPage from "../pages/404";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { setQuests } from "./features/questSlice";

function App() {
  const dispatch = useAppDispatch();
  const quests = useAppSelector((state) => state.quests);

  // Runs on page load.
  // Grab data from localStorage and set global quest state.
  useEffect(() => {
    if (quests.length === 0) {
      // Grab key "quests" from local storage.
      const getData = localStorage.getItem("quests") || "";
      if (getData !== "") {
        // Set quests global state based on localStorage data.
        dispatch(setQuests(JSON.parse(getData)));
      }
    }
  }, [dispatch, quests]);

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
