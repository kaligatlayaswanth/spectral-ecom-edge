import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import SmartChatbotIcon from "./components/SmartChatbotIcon";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import SuccessStories from "./pages/SuccessStories";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import SolutionDetails from "./pages/SolutionDetails";
import BookForm from "./pages/BookForm";
import React, { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solution-details/:solution" element={<SolutionDetails />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/book-now" element={<BookForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SmartChatbotIcon />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
