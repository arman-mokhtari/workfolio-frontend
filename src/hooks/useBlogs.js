import {
  addBlog,
  getBlogById,
  getBlogBySlug,
  getBlogs,
  likeBlog,
  removeBlog,
  updateBlog,
} from "@/services/blog/blogService";

import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllBlogs = () =>
  useQuery({
    queryKey: ["get-blogs"],
    queryFn: getBlogs,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetAllBlogsQs = (qs, cookies) =>
  useQuery({
    queryKey: ["get-qs-blogs", qs, cookies],
    queryFn: () => getBlogs(qs, cookies),
    retry: false,
    refetchOnWindowFocus: true,
  });


export const useAddBlog = () => {
  return useMutation({ mutationFn: addBlog });
};

export const useUpdateBlog = () => {
  return useMutation({ mutationFn: updateBlog });
};

export const useRemoveBlog = () => {
  return useMutation({ mutationFn: removeBlog });
};

export const useLikeBlog = () => {
  return useMutation({ mutationFn: likeBlog });
};

export const useGetBlogById = (id) =>
  useQuery({
    queryKey: ["get-blog", id],
    queryFn: () => getBlogById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });


export const useGetBlogBySlug = (id) =>
  useQuery({
    queryKey: ["get-blog-slug", id],
    queryFn: () => getBlogBySlug(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
