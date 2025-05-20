import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@/context/ThemeContext';
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

// Test component to verify rendering
const TestComponent = () => (
  <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
    <h1>Test Component</h1>
    <p>If you can see this, React is rendering correctly.</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <ParallaxProvider>
          <Toaster />
          <Sonner />
          <TestComponent />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ParallaxProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
