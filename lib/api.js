import matter from "gray-matter";
// import Query from "./query";

// const API_URL = "https://graphql.datocms.com";
// const API_TOKEN = "97212178e367078b50db163d7df98b";

// async function fetchAPI(query, { variables, preview } = {}) {
//   const res = await fetch(API_URL + (preview ? "/preview" : ""), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });

//   const json = await res.json();
//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error("Failed to fetch API");
//   }
//   return json.data;
// }

// const getData = async () => {
//   const data = await fetchAPI(Query, {
//     preview: true,
//   });
//   return data;
// };

// export default getData;

async function getFrontMatter() {
  const context = require.context("content", false, /\.md$/);
  const contents = [];
  for (const key of context.keys()) {
    const path = key.slice(2);
    const content = await import(`content/${path}`);
    const contentdata = matter(content.default);

    contents.push({
      ...contentdata.data,
    });
  }
  return contents;
}

export default getFrontMatter;
