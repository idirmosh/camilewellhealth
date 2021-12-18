import { Box, Image } from "@chakra-ui/core";
import CallToActionButton from "./CallToActionButton";
import Content from "./Content";

function Hero({ hero }) {
  return (
    <Box
      id="cta-main"
      bg="black"
      w="100%"
      h={["540px", "650px", "560px", "600px"]}
      mb={["25px", "120px", "120px", "120px"]}
      position="relative"
    >
      <Box as="picture">
        <source srcSet="/assets/hero.webp" type="image/webp"></source>
        <Image
          opacity="0.54"
          srcSet={hero.images}
          sizes={hero.sizes}
          objectFit="cover"
          overflow="hidden"
          w="100%"
          h="100%"
          alt="back pain and neck pain relief exercise"
        />
      </Box>
      <Box
        display="flex"
        w="100%"
        px={["14px", "50px", "50px", "120px"]}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        flexDirection="column"
        textAlign={["center", "center", "center", "center"]}
      >
        <Content title={hero.title} subtitle={hero.subtitle} />
        <CallToActionButton notice={hero.btn_notice} text={hero.btn_text} />
      </Box>
    </Box>
  );
}

export default Hero;
