import Navbar from "./shared/Navbar";

const Layout = ({ children }) => (
   <div className="container-sm">
      <Navbar />
      {children}
   </div>
);
export default Layout;
