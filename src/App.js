import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import Header from "./component/Header/Header";
import Footer from "./component/ui/Footer";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className=" max-w-screen-2xl h-full mx-auto">
          <Header />
        </div>
        <div className=" max-w-screen-2xl h-full mx-auto">
          <Outlet />
        </div>
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
