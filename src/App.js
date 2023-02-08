import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import Header from "./component/Header/Header";
import Footer from "./component/ui/Footer";
import Menu from "./component/Header/Menu";

const queryClient = new QueryClient();
function App() {
  const [open, setOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className=" max-w-screen-2xl h-full mx-auto">{!open && <Menu />}</div>
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
