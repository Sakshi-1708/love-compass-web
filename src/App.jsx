import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Messages from "./pages/Messages.jsx";
import Index from "./pages/Index.jsx";
import Plans from "./pages/Plans.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProfileView from "./pages/ProfileView.jsx";
import NotFound from "./pages/NotFound.jsx";
import Interests from "./pages/Interests.jsx";
import Shortlist from "./pages/Shortlist.jsx";
import Matches from "./pages/Matches.jsx";
import Settings from "./pages/Settings.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="messages" element={<Messages />} />
            <Route path="dashboard" element={<Index />} />
            <Route path="plans" element={<Plans />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="profile/:id" element={<ProfileView />} />
            <Route path="interests" element={<Interests />} />
            <Route path="shortlist" element={<Shortlist />} />
            <Route path="matches" element={<Matches />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* Auth routes without layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
