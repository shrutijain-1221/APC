import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import founder from '../assets/founder.png'; // Example image, replace with actual image path
import { Link } from 'react-router-dom';
const blogs = Array.from({ length: 8 }).map((_, index) => ({
  id: index,
  title: `Workplace Safety Strategies: How to Keep Employees Safe During National Safety Month`,
  date: `JUN ${index + 1}, 2025`,
  image: founder, // Replace with actual image path
  description: 'This is a sample description for the blog post.'
}));
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const BlogCard = ({ blog, delay, direction }) => {
  const controls = useAnimation();
  const ref = useRef();
const slug = slugify(blog.title);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          controls.set({ opacity: 0, x: direction === 'left' ? -100 : 100 });
          await controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay }
          });
        } else {
          controls.set({ opacity: 0, x: direction === 'left' ? -100 : 100 });
        }
      },
      { threshold: 0.3 }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [controls, delay, direction]);

  return (
     <Link to={`/blog/${slug}`}>
   <motion.div
  ref={ref}
  animate={controls}
  initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
  className="bg-white shadow-lg overflow-hidden h-[500px] flex flex-col"
>
  <div className="h-[350px] relative group">
    <img
      src={blog.image}
      alt="blog"
      className="w-full h-full object-cover object-top transition duration-300 group-hover:blur-sm"
    />
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-[#a3d9b1] px-4 py-2 rounded text-white font-semibold cursor-pointer">
        READ »
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="p-4 flex flex-col flex-1">
    <h3 className="text-base mt-auto font-semibold leading-snug mb-3 line-clamp-4">
      {blog.title}
    </h3>
    <p className="text-[#018A8C] font-semibold ">{blog.date}</p>
  </div>
</motion.div>
</Link>
  );
};

const Blog = () => {
  const getDirection = (rowIndex) => (rowIndex % 2 === 0 ? 'left' : 'right');

  return (
    <div className="container mt-10 mx-auto px-4 py-12 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">The Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          const direction = getDirection(row);
          const delay = direction === 'left' ? col : 2 - col;

          return (
            <BlogCard
              key={blog.id}
              blog={blog}
              delay={delay * 0.3}
              direction={direction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
