import { Flex, Box, Image, Text } from "@chakra-ui/core";
import Title from "components/Reusable/Title";

function About({ about }) {
  return (
    <Box px={["25px", "25px", "50px", "50px"]} mb="120px" w="100%" id="about">
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="picture"
          maxW={["100%", "490px", "720px", "722px"]}
          mb={["25px", "25px", "25px", "0px"]}
        >
          <source srcSet="/assets/camille.webp" type="image/webp"></source>
          <Image
            srcSet={
              "/assets/camille-large.jpg 1280w, /assets/camille-small.jpg 480w"
            }
            sizes="(min-width: 1280px) 1280px, 
            100vw "
            objectFit="cover"
            w="100%"
            alt="Camille Joly - Health Coach"
          />
          <figcaption>Camille Joly</figcaption>
        </Box>

        <Box
          fontSize="17px"
          color="gray.400"
          fontWeight="300"
          maxW={["100%", "490px", "720px", "425px"]}
          ml={["", "", "", "75px"]}
        >
          <Title
            color={"gray.700"}
            type={"h2"}
            size={["2xl", "3xl", "3xl", "3xl"]}
            mb={["16px", "16px", "30px", ""]}
            spacing={"1.6px"}
            wght={500}
          >
            {about.title}
          </Title>

          <Box
            fontSize="17px"
            lineHeight="27px"
            mt={["8px", "8px", "8px", "24px"]}
          >
            <Text mb="16px">{about.p_1}</Text>
            <Text mb="16px">{about.p_2}</Text>
            <Text>{about.p_3}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
