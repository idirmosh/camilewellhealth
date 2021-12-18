import { Box, Text, Flex, Icon } from "@chakra-ui/core";
import Title from "components/Reusable/Title";

import ProgramCard from "./ProgramCard";
import ProgramCTA from "./ProgramCTA";

function Programs({ programs }) {
  return (
    <Box id="programs" px={["25px", "50px", "50px", "120px"]} mb="120px">
      <Title
        type={"h2"}
        size={["2xl", "3xl", "3xl", "3xl"]}
        color={"gray.700"}
        wght={500}
        dangerouslySetInnerHTML={{ __html: programs.title }}
      ></Title>

      <Text
        fontSize="19px"
        lineHeight="30px"
        color="gray.400"
        fontWeight="400"
        maxW={["100%", "100%", "100%", "60%"]}
        mt="25px"
      >
        {programs.subtitle}
      </Text>

      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-around"
      >
        <Flex flexDirection={["column", "column", "row", "row"]}>
          {programs.programs.map((program) => (
            <ProgramCard
              key={program.title.length}
              title={program.title}
              subtitle={program.desc}
              lists={program.features}
            />
          ))}
        </Flex>
        <Box
          display="flex"
          flexDirection={["column", "row", "row", "column"]}
          justifyContent="space-around"
          mt={["75px", "75px", "75px", "0"]}
        >
          <Icon
            opacity=".8"
            color="gray.100"
            name="ImageDecor"
            size={["40", "40", "40", "56"]}
            mb="50px"
          ></Icon>
          <ProgramCTA
            title={programs.cta_title}
            subtitle={programs.cta_desc}
            btn_text={programs.cta_btn_text}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Programs;
