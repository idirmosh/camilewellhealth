import React from "react";
import { Box, Text, Link } from "@chakra-ui/core";
import Layout from "components/Reusable/Layout";
import Title from "components/Reusable/Title";

function disclaimer() {
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
          Disclaimer for Joly Well Health
        </Title>

        <Text mb="25px">
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at
          info@jolywellhealth.com
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          Disclaimers for Joly Well Health
        </Title>

        <Text mb="25px">
          All the information on this website - https://jolywellhealth.com - is
          published in good faith and for general information purpose only. Joly
          Well Health does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Joly Well Health), is
          strictly at your own risk. Joly Well Health will not be liable for any
          losses and/or damages in connection with the use of our website.
        </Text>

        <Text mb="25px">
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </Text>

        <Text mb="25px">
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          Consent
        </Title>

        <Text mb="25px">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          Update
        </Title>

        <Text mb="25px">
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </Text>
      </Box>
    </Layout>
  );
}

export default disclaimer;
