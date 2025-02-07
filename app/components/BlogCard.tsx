import Image from "next/image";
import Link from "next/link";
import { TBlog } from "../constants/type";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={blog.image.src}
        alt={blog.title}
        width={400}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
        <p className="text-gray-600 text-sm">{blog.date}</p>
        <p className="text-gray-700 mt-2">{blog.description}</p>
        <Link
          href={blog.link}
          className="inline-block mt-3 text-blue-600 hover:text-blue-800 transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
