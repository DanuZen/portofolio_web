import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/hooks/useAuth";
import { Layout } from "@/components/layout/Layout";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { PageTransition } from "@/components/ui/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/utils/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

// Direct imports for main pages (no loading)
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin pages (keep lazy loaded)
const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ProjectsManager = lazy(() => import("./pages/admin/ProjectsManager"));
const ProjectForm = lazy(() => import("./pages/admin/ProjectForm"));
const Settings = lazy(() => import("./pages/admin/Settings"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<ProjectsManager />} />
        <Route path="projects/new" element={<ProjectForm />} />
        <Route path="projects/:id/edit" element={<ProjectForm />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <SkipToContent />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Admin Routes */}
                  <Route path="/admin/*" element={<AdminRoutes />} />
                  
                  {/* Public Routes */}
                  <Route
                    path="/*"
                    element={
                      <Layout>
                        <AnimatedRoutes />
                      </Layout>
                    }
                  />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

