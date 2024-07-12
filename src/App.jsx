import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { ContextProvider } from "./context/Context";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
