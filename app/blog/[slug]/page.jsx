import { getPost, getSlugs } from "@/lib/post";
import Title from "@/components/Title";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function TitlePage({ params: { slug } }) {
  const post = await getPost(slug);

  return (
    <>
      <Title>{post.title}</Title>
      <img
        src={post.image}
        alt="image-2"
        width={480}
        height={640}
        className="py-4 rounded-md"
        loading="lazy"
      />
      <div className="flex items-baseline gap-3">
        <p className="mb-4">
          {post.date} by {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose max-w-screen-sm prose-slate"
      />
    </>
  );
}
