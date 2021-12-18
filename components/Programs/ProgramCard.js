import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/core";
import Title from "components/Reusable/Title";
function ProgramCard({ title, subtitle, lists }) {
  return (
    <Box
      minW={["100%", "100%", "384px", "384px"]}
      px={["", "25px", "25px", "25px"]}
      mt="50px"
    >
      <Title
        color={"gray.700"}
        size={["2xl", "2xl", "2xl", "2xl"]}
        letterSpacing="1px"
        mb="25px"
        wght={500}
      >
        {title}
      </Title>

      <Text fontSize="17px" lineHeight="27px" color="gray.400" mb="30px">
        {subtitle}
      </Text>
      <List
        as="ol"
        styleType="none"
        spacing={3}
        color="gray.300"
        fontWeight="300"
        mb="30px"
      >
        {lists.map((list) => (
          <ListItem key={list.length}>
            <ListIcon icon="star" color="secondary.500" />
            {list}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ProgramCard;
