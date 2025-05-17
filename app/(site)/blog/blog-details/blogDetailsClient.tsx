
import { PortableText } from "@portabletext/react";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";
import { Blog } from "@/types/blog";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const BlogDetailsClient = ({ blog }: { blog: Blog }) => {
    const blogImageUrl = blog.mainImage ? urlFor(blog.mainImage)?.url() : null;

  return (
    <div>
      <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
          <div className="relative aspect-97/60 w-full sm:aspect-97/44">
            <Image
              src={blogImageUrl ? blogImageUrl : "/images/default.png"}
              alt={blog.title}
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
          {blog.title}
        </h2>

        <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
          <li>
            <span className="text-black dark:text-white">Author: </span>{" "}
            {blog.author?.name || "Unknown"}
          </li>
          <li>
            <span className="text-black dark:text-white">
              Published On: { new Date(blog.publishedAt!).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) || "Unknown"}
            </span>{" "}
          </li>
          <li>
            <span className="text-black dark:text-white">Tags: </span>
            {blog.tags?.join(" ") || "Uncategorized"}
          </li>
        </ul>

        <div className="blog-details">
            <PortableText value={blog.body} />
        </div>

        <SharePost />
      </div>
    </div>
  );
};

export default BlogDetailsClient;