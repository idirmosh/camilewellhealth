import { Flex, List, ListItem, Box, Icon, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [isMenu, setIsMenu] = React.useState(false);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        w="100%"
        h={["75px", "75px", "75px", "90px"]}
        px={["14px", "50px", "84px", "120px"]}
        position="relative"
      >
        <NextLink href="/">
          <Icon
            cursor="pointer"
            name="Logo"
            size={["75px", "75px", "75px", "75px"]}
            color="dark.400"
          />
        </NextLink>
        <Menu />

        <HamburgerMenu isMenu={isMenu} setIsMenu={setIsMenu} />
      </Box>
      {isMenu ? <MobileMenu /> : null}
    </>
  );
}

export default Navbar;
