import dynamic from 'next/dynamic';

const BlogsMainContent = dynamic(() => import('./components/blogsMainContent'), { ssr: false });

const BlogsPage = () => {
  return <BlogsMainContent />;
};

export default BlogsPage;
