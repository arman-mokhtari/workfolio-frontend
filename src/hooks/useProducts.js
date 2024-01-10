import {
  addProduct,
  getProductById,
  getProductBySlug,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/product/productService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetAllProductsQs = (qs, cookies) =>
  useQuery({
    queryKey: ["get-qs-products", qs, cookies],
    queryFn: () => getProducts(qs, cookies),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = () => {
  return useMutation({ mutationFn: addProduct });
};

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: updateProduct });
};

export const useRemoveProduct = () => {
  return useMutation({ mutationFn: removeProduct });
};

export const useGetProductById = (id) =>
  useQuery({
    queryKey: ["get-product", id],
    queryFn: () => getProductById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetProductBySlug = (id) =>
  useQuery({
    queryKey: ["get-product-slug", id],
    queryFn: () => getProductBySlug(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
