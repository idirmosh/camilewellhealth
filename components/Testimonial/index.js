import { Box, Text, Flex } from "@chakra-ui/core";
import Title from "components/Reusable/Title";

function Testimonial({ testemonial }) {
  return (
    <Box
      id="testimonials"
      px={["25px", "50px", "50px", "120px"]}
      p="100px 50px"
      bg="secondary.100"
      // bg="#f6f7f7"
      color="dark.100"
      textAlign="center"
    >
      <Title
        color="primary.500"
        size={["2xl", "3xl", "3xl", "3xl"]}
        wght="600"
        mb="50px"
      >
        {testemonial.title}
      </Title>
      <Box>
        <Flex
          m="0 auto"
          maxW="960px"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Text
            textAlign="left"
            pr={["0", "0", "25px", "25px"]}
            pb={["25px", "25px", "0", "0"]}
          >
            {testemonial.p_1}
          </Text>
          <Text
            textAlign="left"
            pl={["0", "0", "25px", "25px"]}
            pt={["25px", "25px", "0", "0"]}
          >
            {testemonial.p_2}
          </Text>
        </Flex>
      </Box>
      <Name name={testemonial.name} />
    </Box>
  );
}

function Name({ name }) {
  return (
    <Box display="block" mt="25px">
      <Box
        m="0 auto"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        w="50px"
        h="50px"
        bg="white"
        color="secondary.700"
        boxShadow="0 0 0.75rem #ffe5b3"
        fontSize="20px"
        letterSpacing="1.8px"
        borderRadius="50%"
      >
        RL
      </Box>
      <Text mt="12px" display="block" fontSize="17px">
        {name}
      </Text>
    </Box>
  );
}
export default Testimonial;
