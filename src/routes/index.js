import Layout from "components/layout";
import AboutPage from "pages/About";
import Homepage from "pages/Home";
import ProductDetailsPage from "pages/ProductDetails";
import ProductListPage from "pages/ProductList";
import { Routes, Route } from "react-router-dom";

const RoutePages = () => (
    <Routes>
        <Route exact path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductListPage />} />
            <Route path="products/:id" element={<ProductDetailsPage />} />
        </Route>
    </Routes>
)

export default RoutePages