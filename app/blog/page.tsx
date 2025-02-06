import BlogCard from "../components/BlogCard";
import { blogs } from "../constants/blog";

const Blog = () => {
  return (
    <section id="blog" className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Blog</h2>
        <p className="text-gray-600 text-center mt-2">
          Read my latest thoughts and tutorials.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
