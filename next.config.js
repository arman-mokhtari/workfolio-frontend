const axios = require("axios");

async function getProducts() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/list`,
      {}
    );
    return response.data.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getBlogs() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/list`,
      {}
    );

    return response.data.data.blogs || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "46.245.77.82",
        port:"31078"
      },
    ],
  },
  async rewrites() {
    try {
      const blogs = await getBlogs();
      const products = await getProducts();

      const blogRewrites = blogs.map((blog) => [
        {
          source: `/blogs/${blog.faSlug}`,
          destination: `/blogs/${blog.slug}`,
        },
        {
          source: `/blogs/${encodeURIComponent(blog.faSlug)}`,
          destination: `/blogs/${blog.slug}`,
        },
      ]);

      const productRewrites = products.map((product) => [
        {
          source: `/products/${product.faSlug}`,
          destination: `/products/${product.slug}`,
        },
        {
          source: `/products/${encodeURIComponent(product.faSlug)}`,
          destination: `/products/${product.slug}`,
        },
      ]);

      const allRewrites = [].concat(...blogRewrites, ...productRewrites);

      return {
        beforeFiles: allRewrites,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

module.exports = nextConfig;
