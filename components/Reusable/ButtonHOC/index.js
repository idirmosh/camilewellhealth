import React from "react";
import { FormContext } from "context/formContext";
import { Button } from "@chakra-ui/core";

function ButtonHOC({
  children,
  variant,
  color,
  padding,
  width,
  icon,
  loading,
  fontsize,
  ...rest
}) {
  const { onOpen } = React.useContext(FormContext);
  return (
    <Button
      width={width}
      variantColor={variant}
      borderRadius="360px"
      p={padding}
      color={color}
      textTransform="uppercase"
      fontSize={fontsize}
      letterSpacing="1.2px"
      fontWeight="500"
      rightIcon={icon}
      isLoading={loading}
      loadingText="Submitting"
      onClick={onOpen}
      _focus={{
        border: "1px solid #99aaa4",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

ButtonHOC.defaultProps = {
  children: "Schedule your discovery call",
  variant: "dark",
  color: "white",
  padding: "22px 32px",
  fontsize: "0.8rem",
  width: "auto",
  icon: "",
  loading: false,
};

export default ButtonHOC;
