import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
      </ContextProvider>
    </>
  );
}

export default App;
