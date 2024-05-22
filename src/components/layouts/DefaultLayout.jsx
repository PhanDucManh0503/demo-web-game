import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import AuthenticateProvider from "../Authenticate";

const DefaultLayout = () => {
  return (
    <AuthenticateProvider>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </AuthenticateProvider>
  );
};

export default DefaultLayout;
