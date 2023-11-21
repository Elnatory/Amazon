import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/home/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CheckOut from "./pages/Checkout";
import Orders from "./pages/Orders";
import Brands from "./pages/Brands";
import Categories from "./pages/Category";
import NotFound from "./pages/notFound/NotFound";
import SubCategory from "./pages/Sub-Category";
import Details from "./pages/details/Details";
import Help from "./pages/Help";
import { Provider } from "react-redux";
import store from "./store/store";
import BrandsDetails from "./pages/BrandsDetails";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route
            path="categories/:catName/:sub"
            element={<SubCategory />}
          ></Route>
          <Route path="/details/:id/:sim?" element={<Details />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/brands/:brandSlug" element={<BrandsDetails />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
