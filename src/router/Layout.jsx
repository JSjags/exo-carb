import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Header } from "../components";
import Sidebar from "../components/shared/Sidebar";

const Layout = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration getKey={(location) => location.key} />
      </div>
    </div>
  );
};

export default Layout;
