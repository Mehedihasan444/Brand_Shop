import { Outlet } from "react-router-dom";
import MenuBar from "../Component/MenuBar/MenuBar";
import Footer from "../Component/Footer/Footer";

const Root = () => {


  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
