import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Box,
  Text,
  Image,
  Heading,
  Select,
  Icon,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { FormContext } from "context/formContext";
import ButtonHOC from "../ButtonHOC";
import InputHOC from "./InputHOC";
import SelecctTime from "./SelecctTime";
import InputHeader from "./InputHeader";
import * as React from "react";

function CTAModal() {
  const { value, setValue, isOpen, onClose } = React.useContext(FormContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const [timezone, setTimezone] = React.useState("");

  React.useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const onSubmit = (data) => {
    setValue({ ...value, isLoading: true });
    data.timezone = timezone;
    sendMail("/api/submit", data);
    console.log(data);
  };

  const sendMail = async (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setValue({
          ...value,
          success: true,
          name: data.name,
          isLoading: false,
        });
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          bg="white"
          maxW="768px"
          display="flex"
          flexDirection="row"
        >
          <Box
            maxW="227px"
            minH="100%"
            display={["none", "none", "block", "block"]}
          >
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src="/assets/contact-image.jpg"
            ></Image>
          </Box>

          <Box p="50px 24px 24px 25px">
            {value.success ? <Success name={value.name} /> : <InputHeader />}

            <ModalCloseButton />
            <ModalBody p={["0px", "24px", "25px", "25px"]}>
              <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={3}>
                <InputHOC
                  ref={register}
                  label="What is your name?"
                  placeholder="..."
                  name="fname"
                  type="text"
                />
                <InputHOC
                  ref={register}
                  label="What is your Phone?"
                  placeholder="(NXX) NXX-XXXX"
                  name="phone"
                  type="tel"
                />
                <SelecctTime
                  ref={register}
                  label="What is the best time to reach you?"
                  name="time"
                />

                <InputHOC
                  ref={register}
                  label="What is the main area of your pain?"
                  placeholder="..."
                  name="desc"
                  type="textarea"
                />
                <ButtonHOC
                  bg={value.success ? "green.400" : "dark.700"}
                  mt="25px"
                  loading={value.isLoading}
                  width="100%"
                  icon="email"
                  type="submit"
                >
                  {value.success
                    ? "Submission Successful"
                    : "Schedule your call"}
                </ButtonHOC>
              </Stack>
            </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

function Success({ name }) {
  return (
    <Box
      m="0 25px"
      color="green.400"
      borderRadius="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Icon name="check" size="40px" />
      <Heading fontSize="16px">Thank you {name}</Heading>
      <Text fontSize="14px">
        Your submission has been successfully submitted.
      </Text>
    </Box>
  );
}

export default CTAModal;
