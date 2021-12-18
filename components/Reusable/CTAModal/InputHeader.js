import { ModalHeader, Text, Box } from "@chakra-ui/core";

function InputHeader() {
  return (
    <Box
      mb={["12px", "0", "0", "0"]}
      p={["0", "25px 25px 0 25px", "25px 25px 0 25px", "25px 25px 0 25px"]}
    >
      <ModalHeader
        textTransform="uppercase"
        fontSize="md"
        color="gray.400"
        p="0"
      >
        Apply for a Discovery Call
      </ModalHeader>
      <Text fontSize="sm">
        Schedule your 15 minute discovery call to explore a fit as a client.
      </Text>
    </Box>
  );
}

export default InputHeader;
