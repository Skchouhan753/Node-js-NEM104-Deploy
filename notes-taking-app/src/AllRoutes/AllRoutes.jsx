import { Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import Notes from "../components/Notes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default AllRoutes;
