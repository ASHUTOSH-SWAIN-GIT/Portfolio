import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // External blog posts
  const externalPosts = [
    {
      title: "Understanding Amazon's DynamoDB Architecture",
      summary:
        "A deep dive into Amazon DynamoDB's system design and architecture - exploring how it handles 89.2 million requests per second during Prime Day while maintaining single-digit millisecond response times.",
      publishedAt: "2025-08-20",
      url: "https://medium.com/@ashutoshswain7383/understanding-amazons-dynamodb-architecture-babf95f1f7a0",
      external: true,
    },
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>

      {/* External blog posts */}
      {externalPosts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.url}>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col space-y-1 mb-4 p-4 rounded-lg hover:bg-muted/50 transition-colors border border-border/50"
          >
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  Medium
                </span>
              </div>
              <p className="font-medium text-primary hover:text-primary/80">
                {post.title}
              </p>
              <p className="text-sm text-muted-foreground">{post.summary}</p>
            </div>
          </a>
        </BlurFade>
      ))}

      {/* Local blog posts */}
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 2 + (externalPosts.length + id) * 0.05}
            key={post.slug}
          >
            <Link
              className="flex flex-col space-y-1 mb-4 p-4 rounded-lg hover:bg-muted/50 transition-colors border border-border/50"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-xs text-muted-foreground">
                  {new Date(post.metadata.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
                <p className="font-medium text-primary hover:text-primary/80">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
