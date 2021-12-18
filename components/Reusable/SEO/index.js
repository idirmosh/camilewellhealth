import Head from "next/head";

export default () => {
  const meta = {
    name: "Joly Well Health",
    title:
      "Get relief from your back and neck pain once and for all! | Camille Joly",
    social_title:
      "Get relief from your back and neck pain once and for all with Camille Joly.",
    link: "https://jolywellhealth.com",
    description:
      "Camille Joly is a Health coach who helps women minimize their back and neck pain so they can feel better with minimal effort on their part.",
    image: "https://www.datocms-assets.com/30164/1593625715-camile-joly.webp",
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <link rel="canonical" href={meta.link} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={meta.name} />

      <meta property="og:title" content={meta.social_title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.link} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.social_title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
};
