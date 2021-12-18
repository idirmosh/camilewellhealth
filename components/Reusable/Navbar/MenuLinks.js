import { Box, Link } from "@chakra-ui/core";
import NextLink from "next/link";

function MenuLinks({ items }) {
  return (
    <>
      {items.map((item) => (
        <NextLink href={item.href} key={item.id}>
          <Link _hover={{ textDecoration: "none", color: "yellow.500" }}>
            {item.text}
          </Link>
        </NextLink>
      ))}
    </>
  );
}

export default MenuLinks;
