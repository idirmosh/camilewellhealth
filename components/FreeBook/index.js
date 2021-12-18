import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
  Icon,
} from "@chakra-ui/core";

function FreeBook() {
  return (
    <Box
      px={["25px", "50px", "50px", "120px"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "column", "column", "row"]}
      mb="120px"
    >
      <Box
        w="360px"
        h="448px"
        bg="gray.200"
        mr={["0", "0", "0", "50px"]}
        mb={["50px", "50px", "50px", "0"]}
      ></Box>
      <Box maxW={["100%", "100%", "100%", "50%"]}>
        <Box textAlign={["center", "center", "center", "left"]}>
          <Heading
            color="gray.700"
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            mb="25px"
          >
            The Title of the book 2020
          </Heading>
          <Text fontWeight="300" mb="50px" color="gray.400">
            ery easy to use. I am completely blown away. Health Coach was the
            best investment I ever made. After using Health Coach my business
            skyrocketed!
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
        >
          <InputGroup
            mb={["16px", "16px", "16px", ""]}
            mr={["0", "0", "0", "16px"]}
          >
            <InputLeftElement
              w="3.2rem"
              h="3.2rem"
              children={<Icon name="email" color="gray.300" />}
            />
            <Input
              focusBorderColor="secondary.600"
              p="25px 50px"
              type="email"
              placeholder="Phone number"
            />
          </InputGroup>
          <Button
            isDisabled
            variantColor="secondary"
            p="25px 50px"
            rounded="0"
            bg="secondary.400"
            color="gray.700"
            textTransform="uppercase"
            fontWeight="500"
            fontSize="14px"
            rightIcon="download"
          >
            Grab Your Copy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FreeBook;
