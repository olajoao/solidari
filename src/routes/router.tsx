import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/home";
import DefaultLayout from "@/layouts/default";
import Donate from "@/pages/donate/donate";
import Donation from "@/pages/donation/donation";
import About from "@/pages/about/about";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
        errorElement={<div>Erro</div>}
      >
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
