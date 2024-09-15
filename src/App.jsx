import { Outlet, Route, Routes, useLocation } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import MenForms from "./pages/MenForms";
import WomenForms from "./pages/WomenForms";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-81px-64px-1.5rem)] flex flex-col">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.FORMS} element={<Outlet />}>
            <Route path="" element={<Forms />} />
            <Route path={ROUTES.NEW_FROM} element={<AddForm />} />
            <Route path={ROUTES.MEN} element={<Outlet />}>
              <Route path="" element={<MenForms />} />
              <Route path={ROUTES.SHOW_FORM} element={<FormDetails />} />
            </Route>
            <Route path={ROUTES.WOMEN} element={<Outlet />}>
              <Route path="" element={<WomenForms />} />
              <Route path={ROUTES.SHOW_FORM} element={<FormDetails />} />
            </Route>
          </Route>
          <Route path={ROUTES.COURSES} element={<Courses />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
