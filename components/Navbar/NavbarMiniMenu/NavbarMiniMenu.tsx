import NavbarItem from "../NavbarItem/NavbarItem";
import NavbarMiniMenuProps from "./NavbarMiniMenuProps";

export default function NavbarMiniMenu(props: NavbarMiniMenuProps) {
  const { menuDown, items } = props;
  return (
    <>
      {menuDown &&
        items.map((props) => {
          return <NavbarItem {...props} />;
        })}
    </>
  );
}
