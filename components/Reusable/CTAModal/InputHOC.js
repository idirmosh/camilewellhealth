import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import * as React from "react";

const InputHOC = React.forwardRef(({ label, name, type, placeholder }, ref) => {
  return (
    <FormControl isRequired variantColor="primary" m="12px 0">
      <FormLabel htmlFor={name} fontSize="14px" color="#111">
        {label}
      </FormLabel>
      <Input
        ref={ref}
        type={type}
        name={name}
        borderBottomWidth="1"
        borderRadius="25px"
        focusBorderColor="#111"
        color="#111"
        bg="#eee"
        placeholder={placeholder}
        border="none"
        p="20px"
      />
    </FormControl>
  );
});

export default InputHOC;
