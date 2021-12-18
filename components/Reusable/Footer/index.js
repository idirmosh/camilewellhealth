import { Box, Icon, Link, Text, Flex } from "@chakra-ui/core";
import NextLink from "next/link";

function Footer() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={["14px", "50px", "84px", "120px"]}
        bg="dark.700"
      >
        <NextLink href="/">
          <Icon
            cursor="pointer"
            name="Logo"
            size="100px"
            color="secondary.700"
          />
        </NextLink>
      </Box>
      <FooterLinkst />
      <FooterCopy />
    </Box>
  );
}

function FooterLinkst() {
  return (
    <Flex
      justifyContent={[
        "center",
        "space-between",
        "space-between",
        "space-between",
      ]}
      alignItems={["center", "space-between", "space-between", "space-between"]}
      flexDir={["column", "row", "row", "row"]}
      bg="#040404"
      py="16px"
      px={["14px", "50px", "84px", "120px"]}
      fontSize="12px"
    >
      <Text color="#c1ccc8">
        Copyright {new Date().getFullYear()}
        <NextLink href="/">
          <Link
            px="4px"
            color="secondary.100"
            _hover={{ color: "secondary.400" }}
            fontWeight="500"
          >
            jolywellhealth
          </Link>
        </NextLink>
      </Text>
      <Box
        mt={["12px", "0", "0", "0"]}
        display="flex"
        color="secondary.400"
        textTransform="uppercase"
      >
        <NextLink href="#about">
          <Link _hover={{ textDecoration: "none", color: "yellow.500" }}>
            Disclaimer
          </Link>
        </NextLink>
        <NextLink href="#programs">
          <Link
            pl="25px"
            _hover={{ textDecoration: "none", color: "yellow.500" }}
          >
            Privacy policy
          </Link>
        </NextLink>
        <NextLink href="#cta-main">
          <Link
            pl="25px"
            _hover={{ textDecoration: "none", color: "yellow.500" }}
          >
            Terms of service
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
}

function FooterCopy() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      letterSpacing="1.24px"
      bg="#111"
      color="#c1ccc8"
      py="8px"
      px={["14px", "50px", "84px", "120px"]}
      fontSize="12px"
    >
      <Text>
        Brand & design & code by
        <NextLink href="/">
          <Link
            px="4px"
            color="white"
            _hover={{ color: "secondary.400" }}
            fontWeight="500"
          >
            @idder
          </Link>
        </NextLink>
      </Text>
    </Box>
  );
}

export default Footer;
