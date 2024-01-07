import { getBlogs } from "@/services/blog/blogService";
import { getProducts } from "@/services/product/productService";

export default async function sitemap() {
  const blogsPromise = getBlogs();

  const productsPromise = getProducts();

  const [{ blogs }, { products }] = await Promise.all([
    blogsPromise,
    productsPromise,
  ]);

  const productsUrls =
    products?.map((product) => {
      return {
        url: `${process.env.ABSOLUTE_URL}/products/${product.faSlug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      };
    }) ?? [];

  const blogUrls =
    blogs?.map((blog) => {
      return {
        url: `${process.env.ABSOLUTE_URL}/blogs/${blog.faSlug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      };
    }) ?? [];

  return [
    {
      url: `${process.env.ABSOLUTE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.ABSOLUTE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${process.env.ABSOLUTE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...productsUrls,
    ...blogUrls,
  ];
}
