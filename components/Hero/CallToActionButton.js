import ButtonHOC from "components/Reusable/ButtonHOC";
import { Text } from "@chakra-ui/core";

function CallToActionButton({ notice, text }) {
  return (
    <>
      <ButtonHOC
        variant="secondary"
        color="#111"
        icon="phone"
        m="auto"
        p="25px 40px"
      >
        {text}
      </ButtonHOC>
      <Text
        fontStyle="italic"
        color="white"
        fontWeight="200"
        maxW="150ch"
        pt="16px"
        m="0 auto"
        fontSize="13px"
        lineHeight="17px"
      >
        {notice}
      </Text>
    </>
  );
}

export default CallToActionButton;
