import { Box } from "@chakra-ui/core";
import MenuLinks from "./MenuLinks";

const items = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#programs", text: "Programs" },
  { id: 3, href: "#testimonials", text: "Testimonials" },
];

function MobileMenu() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      h="40px"
      bg="dark.400"
      fontSize="12px"
      textTransform="uppercase"
      w="100%"
      color="secondary.400"
      letterSpacing="1.8px"
      position="absolute"
      top="75px"
      zIndex="2"
    >
      <MenuLinks items={items} />
    </Box>
  );
}

export default MobileMenu;
