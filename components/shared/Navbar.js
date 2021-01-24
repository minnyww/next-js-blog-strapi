import Link from "next/link";

const Navbar = () => (
   <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
         <Link as={`/`} href="/">
            <a className="navbar-brand">
               <img
                  src="https://www.flaticon.com/svg/vstatic/svg/1864/1864514.svg?token=exp=1611496911~hmac=c3b2e82cffab82b2d14d77bf4b0f2e89"
                  alt=""
                  width="30"
                  height="24"
                  className="d-inline-block align-top"
               />
               Hello Min 🐱
            </a>
         </Link>
         <Link as={`/blogs`} href="/blogs">
            <a className="navbar-brand">Blog</a>
         </Link>
      </div>
   </nav>
);
export default Navbar;
