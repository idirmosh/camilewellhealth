import { Icon } from "@chakra-ui/core";

function HamburgerMenu({ isMenu, setIsMenu }) {
  const menuToggle = () => setIsMenu(!isMenu);
  return (
    <Icon
      onClick={menuToggle}
      name={isMenu ? "CloseMenu" : "OpenMenu"}
      cursor="pointer"
      size="42px"
      color="dark.400"
      display={["block", "block", "none", "none"]}
    />
  );
}

export default HamburgerMenu;
