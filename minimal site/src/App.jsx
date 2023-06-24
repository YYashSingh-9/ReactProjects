import { Outlet } from "react-router-dom";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default App;
