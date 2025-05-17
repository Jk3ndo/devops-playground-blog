import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import { client } from "@/app/sanity/client";
import type { Blog } from "@/types/blog";

const BLOGS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
]|order(publishedAt desc)`;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Our latest insights | DevOps Playground",

  // other metadata
  description: "Discover our latest insights and updates on DevOps, cloud computing, and more.",
};

const BlogPage = async () => {
  const BlogData = await client.fetch<Blog[]>(BLOGS_QUERY, {}, options);
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
