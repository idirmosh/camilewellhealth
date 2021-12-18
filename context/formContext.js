import React from "react";
import { useDisclosure } from "@chakra-ui/core";

export const FormContext = React.createContext({});
export const FromConsumer = FormContext.Consumer;

export const FormProvider = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState({
    isLoading: false,
    name: "",
    success: false,
  });
  const sampleContext = {
    value,
    setValue,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <FormContext.Provider value={sampleContext}>
      {props.children}
    </FormContext.Provider>
  );
};
