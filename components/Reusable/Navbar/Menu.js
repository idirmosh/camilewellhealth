import { Box, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import MenuLinks from "./MenuLinks";

const items = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#programs", text: "Programs" },
  { id: 3, href: "#testimonials", text: "Testimonials" },
];

function Menu() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
      textTransform="uppercase"
      display={["none", "none", "flex", "flex"]}
      w="450px"
      color="primary"
    >
      <MenuLinks items={items} />

      <NextLink href="#cta-main">
        <Link
          p="8px 16px"
          borderRadius="25px"
          borderColor="gray.700"
          borderWidth="1px"
          _hover={{
            textDecoration: "none",
            color: "yellow.500",
            borderColor: "yellow.500",
          }}
        >
          Schedule call now
        </Link>
      </NextLink>
    </Box>
  );
}

export default Menu;
