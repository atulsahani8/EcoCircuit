import React from "react";
import BlogCard from "../..//Components/BlogCard/BlogCard";
import "./Blogs.scss";
import img1 from "../../assets/BG.jpg";

const Blogs = () => {
  return (
    <div className="blog-container">
      <BlogCard
        title="Lund iguana"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={img1}
      />
      <BlogCard
        title="Lund iguana"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={img1}
      />
      <BlogCard
        title="Lund iguana"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={img1}
      />
    </div>
  );
};

export default Blogs;
