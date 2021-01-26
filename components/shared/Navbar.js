import Link from "next/link";

const Navbar = () => (
   <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
         <Link as={`/`} href="/">
            <a className="navbar-brand">Hello Min 🐱</a>
         </Link>
         <Link as={`/blogs`} href="/blogs">
            <a className="navbar-brand">Blog</a>
         </Link>
      </div>
   </nav>
);
export default Navbar;
