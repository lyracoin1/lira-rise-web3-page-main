
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Tasks from "./pages/Tasks";
import Prices from "./pages/Prices";
import Referrals from "./pages/Referrals";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";
import ManifestUploader from "./components/ManifestUploader";

const queryClient = new QueryClient();

// Use the verified public bucket manifest URL
const TONCONNECT_MANIFEST_URL = "https://ypyprwnpfseijepscfht.supabase.co/storage/v1/object/public/public-files/tonconnect/tonconnect-manifest.json";

const App = () => (
  <TonConnectUIProvider manifestUrl={TONCONNECT_MANIFEST_URL}>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ManifestUploader />
          <BrowserRouter>
            <div className="relative">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/profile" element={<Profile />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNavigation />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>
);

export default App;
