import { Outlet } from "react-router-dom";
import MainHeader from "./layout/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default App;
