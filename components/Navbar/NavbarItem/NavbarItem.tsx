import NavbarItemProps from "./NavbarItemProp";

export default function NavbarItem(props: NavbarItemProps) {
  const { title, color, onClick } = props;
  return (
    <div
      className={`text-${color || "white"}
        font-sans
        mx-5
        cursor-pointer
      hover:text-white
        hover:opcatiy-100
        hover:underline`}
      onClick={onClick}
    >
      <h1>{title}</h1>
    </div>
  );
}
