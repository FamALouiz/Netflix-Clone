import NavbarItem from "../NavbarItem/NavbarItem";
import NavbarMiniMenuProps from "./NavbarMiniMenuProps";

export default function NavbarMiniMenu(props: NavbarMiniMenuProps) {
  const { style, menuDown, items } = props;
  return (
    <div className={style}>
      {menuDown &&
        items.map((props) => {
          return <NavbarItem {...props} />;
        })}
    </div>
  );
}
