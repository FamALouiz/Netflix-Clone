import { useRouter } from "next/navigation";
import { useState } from "react";
import { SlArrowDown, SlArrowUp, SlMagnifier } from "react-icons/sl";
import { SlBell } from "react-icons/sl";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavbarMiniMenu from "./NavbarMiniMenu/NavbarMiniMenu";
import "../../public/styles/Navbar.css";
import MiniProfileIcon from "../ProfileIcon/MiniProfileIcon/MiniProfileIcon";
import NavbarItemProps from "./NavbarItem/NavbarItemProp";

export default function Navbar() {
  const router = useRouter();
  const [miniMenuDown, setMiniMenuDown] = useState<boolean>(false);
  const [profileMenuDown, setProfileMenuDown] = useState<boolean>(false);

  const profileMenuItemProps: NavbarItemProps[] = [
    {
      title: "User",
      onClick: () => {
        router.push("/user/@me");
      },
    },
    {
      title: "Settings",
      onClick: () => {
        router.push("/settings");
      },
    },
    {
      title: "Sign Out",
      onClick: () => {
        document.cookie =
          "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/auth");
      },
    },
  ];

  const miniScreenNavbarItemProps: NavbarItemProps[] = [
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
      title: "Movies",
      onClick: () => {
        router.push("/movies");
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

  const toggleMiniMenuDown: () => void = () =>
    setMiniMenuDown((prevValue) => !prevValue);
  const toggleProfileMenuDown: () => void = () =>
    setProfileMenuDown((prevValue) => !prevValue);
  return (
    <div className="absolute w-full top-[1%]">
      <div className="flex flex-col">
        <div className="flex justify-start items-center w-full h-16 mt-2">
          <img
            src="/images/logo.png"
            className="w-32 h-8 mx-20 cursor-pointer"
            alt="Logo"
            onClick={() => router.push("/")}
          />
          <div className="hidden lg:flex">
            {miniScreenNavbarItemProps.map((props: any, idx: number) => {
              return <NavbarItem {...props} key={idx} />;
            })}
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="flex justify-center items-center lg:hidden group">
              <p
                className=" text-white group-hover:cursor-pointer"
                onClick={toggleMiniMenuDown}
              >
                Browse
              </p>
              {miniMenuDown && (
                <SlArrowUp
                  className="navbar-icon mt-2"
                  onClick={toggleMiniMenuDown}
                />
              )}
              {!miniMenuDown && (
                <SlArrowDown
                  className="navbar-icon mt-2"
                  onClick={toggleMiniMenuDown}
                />
              )}
            </div>
          </div>
          <div className="flex flex-grow justify-end items-center mx-20 gap-5">
            <SlMagnifier className="navbar-icon" />
            <SlBell className="navbar-icon" />
            <div
              className="flex items-center gap-1 group"
              onClick={toggleProfileMenuDown}
            >
              <MiniProfileIcon src="/images/profile-icon.jpg" alt="Avatar" />
              <div className="navbar-icon  group-hover:cursor-pointer">
                {!profileMenuDown && <SlArrowDown />}
                {profileMenuDown && <SlArrowUp />}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
          drop-down
          lg:hidden 
          gap-3 
          py-2 
          ml-64 
          pl-5 
          ${miniMenuDown ? "opacity-100" : "opacity-0"}
          ${miniMenuDown ? "bg-black" : "bg-netural-800"} 
          ${miniMenuDown ? "h-auto" : "h-0"}`}
        >
          <NavbarMiniMenu
            items={miniScreenNavbarItemProps}
            menuDown={miniMenuDown}
          />
        </div>
        <div className="flex justify-end">
          <div
            className={`drop-down
            mr-16  
            gap-3 
            py-2 
            ${profileMenuDown ? "opacity-100" : "opacity-0"}
            ${profileMenuDown ? "bg-black" : "bg-netural-800"} 
            ${profileMenuDown ? "h-auto" : "h-0"}`}
          >
            <NavbarMiniMenu
              items={profileMenuItemProps}
              menuDown={profileMenuDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
