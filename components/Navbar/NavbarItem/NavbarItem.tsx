import NavbarItemProps from "./NavbarItemProp";

export default function NavbarItem(props: NavbarItemProps) {
  const { title, color, onClick } = props;
  return (
    <div>
      <h1
        className={`text-${color || "white"}
        font-sans
        mx-5
        cursor-pointer`}
        onClick={onClick}
      >
        {title}
      </h1>
    </div>
  );
}
