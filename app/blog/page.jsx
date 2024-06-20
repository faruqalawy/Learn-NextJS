import PostCard from "../../components/PostCard";
import Title from "../../components/Title";
import { getAllPosts } from "@/lib/post";

export const metadata = {
  title: "Blog Page",
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <>
      <Title>Blog Page</Title>
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          href={`/blog/${post.slug}`}
          image={post.image}
          description={post.description}
          date={post.date}
          author={post.author}
        ></PostCard>
      ))}
    </>
  );
}
