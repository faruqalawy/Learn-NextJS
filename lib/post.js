import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";

export async function getPost(slug) {
  const text = await readFile(`./content/${slug}.md`, "utf8");
  const {
    content,
    data: { title, image, date, author, description },
  } = matter(text);
  const body = marked(content);

  return { slug, title, image, date, author, body, description };
}

export async function getAllPosts() {
  const slugs = await getSlugs();

  const posts = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }
  return posts;
}

export async function getSlugs() {
    const files = await readdir("./content");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
