import { TooltipProvider } from "@/components/ui/Tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SiteLayout from "@/components/layout/SiteLayout";
import { Toaster } from "@/components/ui/Sonner";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import Registration from "./pages/Registration";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);
export default App;
