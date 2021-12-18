import matter from "gray-matter";

async function getFrontMatter() {
  const context = require.context("content", false, /\.md$/);

  const contents = [];
  for (let key of context.keys()) {
    let path = key.slice(2);
    if (key.startsWith("content")) {
      path = key.replace("content/", "");
    }

    const content = await import(`content/${path}`);
    const contentdata = matter(content.default);

    contents.push({
      ...contentdata.data,
    });
  }
  return contents;
}

export default getFrontMatter;
