import { Box, Text } from "@chakra-ui/core";
import Title from "components/Reusable/Title";

function Content({ title, subtitle }) {
  return (
    <Box px={["25px", "50px", "124px", "17%"]} mb="50px">
      <Title type="h1" size={["2xl", "3xl", "3xl", "4xl"]} color="white">
        {title}
      </Title>
      <Text
        mt="16px"
        fontSize={["md", "lg", "xl", "xl"]}
        color="white"
        fontWeight="300"
      >
        {subtitle}
      </Text>
    </Box>
  );
}

export default Content;
