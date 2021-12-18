import Layout from "components/Reusable/Layout";

import { FormProvider } from "context/formContext";
import SEO from "components/Reusable/SEO";
import getFrontMatter from "lib/api";
import Hero from "components/Hero";
import About from "components/About";
import Programs from "components/Programs";
import Testimonial from "components/Testimonial";
import CTAModal from "components/Reusable/CTAModal";

export default function Home({ data }) {
  const [about, hero, programs, testemonial] = data;

  return (
    <FormProvider>
      <SEO />
      <Layout>
        <CTAModal />
        <Hero hero={hero} />
        <About about={about} />
        <Programs programs={programs} />
        <Testimonial testemonial={testemonial} />
      </Layout>
    </FormProvider>
  );
}

export async function getStaticProps() {
  const data = await getFrontMatter();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
