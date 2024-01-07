import {
  addBlog,
  getBlogById,
  getBlogs,
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

export const useAddBlog = () => {
  return useMutation({ mutationFn: addBlog });
};

export const useUpdateBlog = () => {
  return useMutation({ mutationFn: updateBlog });
};

export const useRemoveBlog = () => {
  return useMutation({ mutationFn: removeBlog });
};

export const useGetBlogById = (id) =>
  useQuery({
    queryKey: ["get-blog", id],
    queryFn: () => getBlogById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
