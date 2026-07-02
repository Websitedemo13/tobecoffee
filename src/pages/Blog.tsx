import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getPageContent } from "@/lib/supabase";
import { BlogContent, defaultBlogContent, slugify } from "@/lib/content";
import { ArrowRight, CalendarDays } from "lucide-react";

const Blog = () => {
  const [blogContent, setBlogContent] = useState<BlogContent>(defaultBlogContent);
  const [loading, setLoading] = useState(true);
  const [activeTopic, setActiveTopic] = useState("Tất cả");

  const sortedPosts = useMemo(
    () => [...blogContent.posts].sort((a, b) => b.date.localeCompare(a.date)),
    [blogContent.posts]
  );

  const topics = useMemo(() => {
    const set = new Set(sortedPosts.map((p) => p.topic).filter(Boolean));
    return ["Tất cả", ...Array.from(set)];
  }, [sortedPosts]);

  const filtered = useMemo(
    () =>
      activeTopic === "Tất cả"
        ? sortedPosts
        : sortedPosts.filter((p) => p.topic === activeTopic),
    [sortedPosts, activeTopic]
  );

  const featured = activeTopic === "Tất cả" ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;

  useEffect(() => {
    (async () => {
      try {
        const content = (await getPageContent<BlogContent>("blog")) ?? defaultBlogContent;
        setBlogContent(content);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const postLink = (post: { slug?: string; title: string }) =>
    `/blog/${post.slug || slugify(post.title)}`;

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-primary-foreground py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-foreground/60 mb-4">
            {blogContent.title}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-5 max-w-3xl mx-auto leading-tight">
            Những câu chuyện cà phê truyền cảm hứng
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-primary-foreground/70">
            {blogContent.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="rounded-3xl border border-border bg-card p-12 text-center text-muted-foreground">
              Đang tải bài viết...
            </div>
          ) : (
            <>
              {/* TOPIC FILTER */}
              <div className="mb-10 flex flex-wrap justify-center gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      activeTopic === topic
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="rounded-3xl border border-border bg-card p-12 text-center text-muted-foreground">
                  Chưa có bài viết cho chủ đề này.
                </div>
              ) : (
                <>
                  {/* FEATURED */}
                  {featured && (
                    <Link
                      to={postLink(featured)}
                      className="group mb-12 grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:shadow-xl lg:grid-cols-2"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-secondary lg:aspect-auto">
                        {featured.imgUrl ? (
                          <img
                            src={featured.imgUrl}
                            alt={featured.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full min-h-[280px] items-center justify-center text-4xl font-semibold text-primary/20">
                            TOBE
                          </div>
                        )}
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                          Nổi bật
                        </span>
                      </div>
                      <div className="flex flex-col justify-center p-8 lg:p-10">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                            {featured.topic}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CalendarDays className="h-3.5 w-3.5" /> {featured.date}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold leading-snug mb-4 transition group-hover:text-primary">
                          {featured.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3 mb-6">
                          {featured.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Đọc bài viết
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  )}

                  {/* GRID */}
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                      <article
                        key={post.id}
                        className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <Link to={postLink(post)} className="relative aspect-[16/10] overflow-hidden bg-secondary">
                          {post.imgUrl ? (
                            <img
                              src={post.imgUrl}
                              alt={post.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-3xl font-semibold text-primary/20">
                              TOBE
                            </div>
                          )}
                        </Link>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                              {post.topic}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <CalendarDays className="h-3 w-3" /> {post.date}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-semibold leading-snug mb-3 transition group-hover:text-primary">
                            <Link to={postLink(post)}>{post.title}</Link>
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-5">
                            {post.excerpt}
                          </p>
                          <Link
                            to={postLink(post)}
                            className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                          >
                            Xem chi tiết <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
