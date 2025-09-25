import { TooltipProvider } from "@/components/ui/Tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SiteLayout from "@/components/layout/SiteLayout";
import { Toaster } from "@/components/ui/Sonner";
import Login from "./pages/Login";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);
export default App;
