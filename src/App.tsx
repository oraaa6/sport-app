import { QueryClient } from "@tanstack/react-query";
import "./App.css";
import "./styles/globals.scss";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
