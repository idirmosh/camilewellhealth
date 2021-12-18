import { Heading } from "@chakra-ui/core";

const Title = ({
  size,
  type,
  children,
  color,
  wght = "500",
  spacing = "3px",
  ...rest
}) => {
  return (
    <Heading
      as={type}
      fontSize={size}
      color={color}
      fontWeight={wght}
      textTransform="uppercase"
      letterSpacing={spacing}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default Title;
