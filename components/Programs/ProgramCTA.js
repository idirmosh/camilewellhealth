import { Box, Text } from "@chakra-ui/core";
import Title from "components/Reusable/Title";
import ButtonHOC from "components/Reusable/ButtonHOC";

function ProgramCTA({ title, subtitle, btn_text }) {
  return (
    <Box>
      <Title
        color={"gray.700"}
        type={"h5"}
        size={["2xl", "2xl", "2xl", "2xl"]}
        wght={700}
      >
        {title}
      </Title>

      <Text mt="25px" color="gray.400">
        {subtitle}
      </Text>
      <ButtonHOC
        variant="secondary"
        color="gray.600"
        fontWeight="500"
        icon="phone"
        mt="25px"
        p="25px 40px"
      >
        {btn_text}
      </ButtonHOC>
    </Box>
  );
}

export default ProgramCTA;
