import React from "react";
import { Box, Text, Link } from "@chakra-ui/core";
import Layout from "components/Reusable/Layout";
import Title from "components/Reusable/Title";

function PrivacyPolicy() {
  return (
    <Layout>
      <Box
        maxW="960px"
        m="120px auto"
        fontSize="17px"
        color="gray.400"
        px="25px"
      >
        <Title type="h1" size="2xl" mb="25px" wght="700" color="gray.700">
          Privacy Policy for Joly Well Health
        </Title>

        <Text mb="25px">
          Your privacy is important to us. It is Joly Well Healt's policy to
          respect your privacy regarding any information we may collect from you
          across our website, https://jolywellhealth.com/, and other sites we
          own and operate.
        </Text>

        <Text mb="25px">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Text>

        <Text mb="25px">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </Text>

        <Text mb="25px">
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Text>

        <Text mb="25px">
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </Text>

        <Text mb="25px">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Text>

        <Text mb="25px">
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </Text>
      </Box>
    </Layout>
  );
}

export default PrivacyPolicy;
