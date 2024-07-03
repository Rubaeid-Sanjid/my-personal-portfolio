import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="relative h-full w-full bg-slate-950 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] translate-x-[-50%] translate-y-[-10%]"></div>
      <div className="absolute bottom-0 right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] translate-x-[50%] translate-y-[-10%]"></div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
