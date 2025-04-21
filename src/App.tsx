import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";
import { Contact } from "lucide-react";
import About from "./components/pages/About";
import CategoryPage from "./components/pages/CategoryPage";
import NotFound from "./components/pages/NotFound";
import ProductDetails from "./components/ProductDetail";
import Products from "./components/Products";

const queryClient = new QueryClient();

// Create a scroll to top component
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ScrollToTop />
                  <Index />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <ScrollToTop />
                  <Login />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <ScrollToTop />
                  <SignUp />
                </>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <>
                  <ScrollToTop />
                  <ForgotPassword />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ScrollToTop />
                  <Contact />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <ScrollToTop />
                  <About />
                </>
              }
            />
            <Route
              path="/category/:categoryName"
              element={
                <>
                  <ScrollToTop />
                  <CategoryPage />
                </>
              }
            />
            <Route
              path="/products/:id"
              element={
                <>
                  <ScrollToTop />
                  <ProductDetails />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <ScrollToTop />
                  <Products />
                </>
              }
            />
            <Route
              path="/flash-sales"
              element={
                <>
                  <ScrollToTop />
                  <Products />
                </>
              }
            />
            <Route
              path="/top-rated"
              element={
                <>
                  <ScrollToTop />
                  <Products />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <ScrollToTop />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
