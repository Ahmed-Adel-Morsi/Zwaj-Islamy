import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import { ROUTES } from "./routes";
import AddForm from "./pages/AddForm";
import Contact from "./pages/Contact";
import FormDetails from "./pages/FormDetails";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.FORMS} element={<Outlet />}>
          <Route path="" element={<Forms />} />
          <Route path={ROUTES.NEW_FROM} element={<AddForm />} />
          <Route path={ROUTES.SHOW_FORM} element={<FormDetails />} />
        </Route>
        <Route path={ROUTES.COURSES} element={<Courses />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
