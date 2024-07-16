import { useRouter } from "next/navigation";
import NavbarItem from "./NavbarItem/NavbarItem";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import NavbarMiniMenu from "./NavbarMiniMenu/NavbarMiniMenu";

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
      title: "About",
      onClick: () => {
        router.push("/about");
      },
    },
    {
      title: "Contact",
      onClick: () => {
        router.push("/contact");
      },
    },
    {
      title: "Login",
      onClick: () => {
        router.push("/auth");
      },
    },
  ];

  const handleMenuDownToggle = () => setMenuDown((prevValue) => !prevValue);
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-start items-center w-full h-16 mt-2">
        <img
          src="/images/logo.png"
          className="w-32 h-8 mx-20 cursor-pointer"
          alt="Logo"
          onClick={() => router.push("/")}
        />
        <div className="hidden lg:flex">
          {navbarItemsProps.map((props) => {
            return <NavbarItem {...props} />;
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
            <SlArrowDown
              className="w-3 h-3 text-white mx-2 mt-1 group-hover:cursor-pointer"
              onClick={handleMenuDownToggle}
            />
          </div>
        </div>
      </div>
      <NavbarMiniMenu
        style={`flex 
          flex-col 
          justify-center 
          lg:hidden 
          gap-3 
          py-2 
          ml-64 
          pl-5 
          peer
          ${menuDown ? "opacity-50" : "opacity-0"}
          ${
            menuDown ? "bg-black" : "bg-netural-800"
          } w-32 transition-height transition-opacity ${
          menuDown ? "h-40" : "h-0"
        }`}
        items={navbarItemsProps}
        menuDown={menuDown}
      />
    </div>
  );
}
