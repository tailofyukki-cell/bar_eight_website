import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Info from "./pages/Info";
import Staff from "./pages/Staff";
import Events from "./pages/Events";
import Access from "./pages/Access";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/menu"} component={Menu} />
          <Route path={"/info"} component={Info} />
          <Route path={"/staff"} component={Staff} />
          <Route path={"/events"} component={Events} />
          <Route path={"/access"} component={Access} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
