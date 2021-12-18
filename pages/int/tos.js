import React from "react";
import { Box, Text, Link } from "@chakra-ui/core";
import Layout from "components/Reusable/Layout";
import Title from "components/Reusable/Title";

function Tos() {
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
          Joly Well Healt Terms of Service
        </Title>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          1. Terms
        </Title>
        <Text mb="25px">
          By accessing the website at https://jolywellhealth.com/, you are
          agreeing to be bound by these terms of service, all applicable laws
          and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          2. Use License
        </Title>

        <Text mb="25px">
          a: Permission is granted to temporarily download one copy of the
          materials (information or software) on Joly Well Healt's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license you may
          not: <br /> <br />
          i: modify or copy the materials; <br />
          ii: use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial); <br />
          iii :attempt to decompile or reverse engineer any software contained
          on Joly Well Healt's website; <br />
          iv: remove any copyright or other <br />
          proprietary notations from the materials; <br />
          v: or transfer the materials to another person or "mirror" the
          materials on any other server.
        </Text>

        <Text mb="25px">
          b : This license shall automatically terminate if you violate any of
          these restrictions and may be terminated by Joly Well Healt at any
          time. Upon terminating your viewing of these materials or upon the
          termination of this license, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          3. Disclaimer
        </Title>
        <Text mb="25px">
          a: The materials on Joly Well Healt's website are provided on an 'as
          is' basis. Joly Well Healt makes no warranties, expressed or implied,
          and hereby disclaims and negates all other warranties including,
          without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </Text>
        <Text mb="25px">
          b: Further, Joly Well Healt does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          4. Limitations
        </Title>

        <Text mb="25px">
          In no event shall Joly Well Healt or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on Joly Well Healt's website, even if
          Joly Well Healt or a Joly Well Healt authorized representative has
          been notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          5. Accuracy of materials
        </Title>

        <Text mb="25px">
          The materials appearing on Joly Well Healt's website could include
          technical, typographical, or photographic errors. Joly Well Healt does
          not warrant that any of the materials on its website are accurate,
          complete or current. Joly Well Healt may make changes to the materials
          contained on its website at any time without notice. However Joly Well
          Healt does not make any commitment to update the materials.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          6. Links
        </Title>

        <Text mb="25px">
          Joly Well Healt has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by Joly
          Well Healt of the site. Use of any such linked website is at the
          user's own risk.
        </Text>
        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          7. Modifications
        </Title>
        <Text mb="25px">
          Joly Well Healt may revise these terms of service for its website at
          any time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </Text>

        <Title
          type="h2"
          size="md"
          mt="25px"
          mb="25px"
          wght="700"
          color="gray.700"
        >
          8. Governing Law
        </Title>
        <Text mb="25px">
          These terms and conditions are governed by and construed in accordance
          with the laws of Florida and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </Text>
      </Box>
    </Layout>
  );
}

export default Tos;
