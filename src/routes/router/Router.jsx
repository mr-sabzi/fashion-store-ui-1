import { Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import Home from "../../pages/home/Home";
import ProductList from "../../pages/productList/ProductList";
import Product from "../../pages/product/Product";
import About from "../../pages/about/About";
import Pricing from "../../pages/pricing/Pricing";
import Team from "../../pages/team/Team";
import Contact from "../../pages/contact/Contact";
import NotFound from "../../pages/notFound/NotFound";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
