import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/brandIMG/Logo.png";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const MenuBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  // console.log(user)
  const [dropdown, setDropdown] = useState(false);

  console.log(dropdown);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "User logout successfully!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "User created successfully!",
          footer: <p>{error.message}</p>,
        });
      });
  };

  // ---------------------
  const [mode, setMode] = useState("");
  const handleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    if (currentTheme === "light") {
      htmlElement.setAttribute("data-theme", "dark");
      setMode(currentTheme);
    } else {
      htmlElement.setAttribute("data-theme", "light");
      setMode(currentTheme);
    }
  };

  // ---------------------

  const links = (
    <>
      <ul className="ml-auto  mr-8 hidden items-center gap-6 lg:flex">
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 border-b-2 px-5 py-2 border-red-600"
                : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <NavLink
            to="/MyCart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 border-b-2 px-5 py-2 border-red-600"
                : ""
            }
          >
            My cart
          </NavLink>
        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <NavLink
            to="/AddProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 border-b-2 px-5 py-2 border-red-600"
                : ""
            }
          >
            Add Product
          </NavLink>
        </li>
      </ul>

      {user ? (
        <div className=" gap-5 items-center hidden lg:flex">
          <span className="text-pink-600">{user.displayName}</span>{" "}
          <span>
            <img src={user.photoURL} alt="" className="w-8 rounded-full" />
          </span>
          <button
            onClick={handleLogOut}
            className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
            data-ripple-light="true"
          >
            <span>LogOut</span>
          </button>
        </div>
      ) : (
        <Link to="/LogIn">
          <button
            className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
            data-ripple-light="true"
          >
            <span>Login</span>
          </button>
        </Link>
      )}
    </>
  );
  return (
    <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-gray-900">
        <a
          href="/"
          className="flex  items-center mr-4  cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          <img src={logo} alt="" className="w-14" />
          BRAND SHOP
        </a>
        {
          <div className="flex justify-center py-5">
            <button
              className="btn text-2xl bg-transparent"
              onClick={handleTheme}
            >
              {mode == "dark" ? (
                <CiDark></CiDark>
              ) : (
                <MdOutlineLightMode></MdOutlineLightMode>
              )}
            </button>
          </div>
        }
        <div className="flex items-center text-gray-900">{links}</div>

        <button
          className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          data-collapse-target="sticky-navar"
          onClick={() => setDropdown(!dropdown)}
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div
        className={` ${
          dropdown ? " block" : "hidden"
        } w-[200px] shadow-md p-3 rounded-md absolute right-1 top-28 basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden text-black bg-white z-1000`}
        data-collapse="sticky-navar"
      >
        {
          user ? (
            <div className=" ">
              <div className="flex gap-5">
                <h2 className="text-pink-600 ">{user.displayName}</h2>{" "}
                <span>
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-8 rounded-full"
                  />
                </span>
              </div>

              {/* <button
              onClick={handleLogOut}
              className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              data-ripple-light="true"
            >
              <span>LogOut</span>
            </button> */}
            </div>
          ) : (
            ""
          )
          // (
          //   <Link to="/LogIn">
          //     <button
          //       className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          //       type="button"
          //       data-ripple-light="true"
          //     >
          //       <span>Login</span>
          //     </button>
          //   </Link>
          // )
        }
        <ul className="ml-auto  mr-8  items-center ">
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 " : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/MyCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 " : ""
              }
            >
              My cart
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/AddProduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 " : ""
              }
            >
              Add Product
            </NavLink>
          </li>
        </ul>
        {user ? (
          <button
            onClick={handleLogOut}
            className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
            data-ripple-light="true"
          >
            <span>LogOut</span>
          </button>
        ) : (
          <Link to="/LogIn">
            <button
              className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              data-ripple-light="true"
            >
              <span>Login</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MenuBar;
