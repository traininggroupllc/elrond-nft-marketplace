import React from 'react';
import BlogHero from 'components/Blog/BlogHero';
import Blogs from 'components/Blog/Blogs';

const Blog = () => {
  return (
    <div className='container-xl px-4'>
      <BlogHero />
      <Blogs />
    </div>
  );
};

export default Blog;
