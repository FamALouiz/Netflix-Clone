import { useRouter } from "next/navigation";
import { useState } from "react";
import { SlArrowDown, SlArrowUp, SlMagnifier } from "react-icons/sl";
import { SlBell } from "react-icons/sl";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavbarMiniMenu from "./NavbarMiniMenu/NavbarMiniMenu";
import "./Navbar.css";

export default function Navbar() {
  const router = useRouter();
  const [menuDown, setMenuDown] = useState(false);
  const navbarItemsProps = [
    {
      title: "Home",
      onClick: () => {
        router.push("/");
      },
    },
    {
      title: "Services",
      onClick: () => {
        router.push("/services");
      },
    },
    {
      title: "Films",
      onClick: () => {
        router.push("/films");
      },
    },
    {
      title: "My List",
      onClick: () => {
        router.push("/my-list");
      },
    },
    {
      title: "Browse by Language",
      onClick: () => {
        router.push("/browse-by-language");
      },
    },
  ];

  const handleMenuDownToggle = () => setMenuDown((prevValue) => !prevValue);
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center w-full h-16 mt-2">
        <img
          src="/images/logo.png"
          className="w-32 h-8 mx-20 cursor-pointer"
          alt="Logo"
          onClick={() => router.push("/")}
        />
        <div className="hidden lg:flex">
          {navbarItemsProps.map((props: any, idx: number) => {
            return <NavbarItem {...props} key={idx} />;
          })}
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="flex justify-center items-center lg:hidden group">
            <p
              className=" text-white group-hover:cursor-pointer"
              onClick={handleMenuDownToggle}
            >
              Browse
            </p>
            {menuDown && (
              <SlArrowUp
                className="navbar-icon mt-2"
                onClick={handleMenuDownToggle}
              />
            )}
            {!menuDown && (
              <SlArrowDown
                className="navbar-icon mt-2"
                onClick={handleMenuDownToggle}
              />
            )}
          </div>
        </div>
        <div className="flex flex-grow justify-end items-center mx-20 gap-5">
          <SlMagnifier className="navbar-icon" />
          <SlBell className="navbar-icon" />
          <div className="flex items-center gap-1 group">
            <div className="navbar-icon  group-hover:cursor-pointer">
              <SlArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex 
          flex-col 
          justify-center 
          lg:hidden 
          gap-3 
          py-2 
          ml-64 
          pl-5 
          peer
          ${menuDown ? "opacity-50" : "opacity-0"}
          ${menuDown ? "bg-black" : "bg-netural-800"} w-32 transition-all ${
          menuDown ? "h-auto" : "h-0"
        }`}
      >
        <NavbarMiniMenu items={navbarItemsProps} menuDown={menuDown} />
      </div>
    </div>
  );
}
