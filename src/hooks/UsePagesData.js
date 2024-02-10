
  import { addPageData, getPageByEnglishTitle, getPageDataById, getPagesData, updatePageData } from "@/services/pageData/pageDataServices";
import { useMutation, useQuery } from "@tanstack/react-query";
  
  export const useGetPagesData = () =>
    useQuery({
      queryKey: ["pages-data"],
      queryFn: getPagesData,
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useAddPageData = () => {
    return useMutation({ mutationFn: addPageData });
  };
  
  
  export const useGetPageByEnglishTitle = (englishTitle) =>
  useQuery({
    queryKey: ["page-data-by-title", englishTitle],
    queryFn: () => getPageByEnglishTitle(englishTitle),
    retry: false,
    refetchOnWindowFocus: true,
  });
  
  export const useUpdatePageData = () => {
    return useMutation({ mutationFn: updatePageData });
  };
  
  
  export const useGetPageDataById = (id) =>
    useQuery({
      queryKey: ["get-page-data", id],
      queryFn: () => getPageDataById(id),
      retry: false,
      refetchOnWindowFocus: true,
    });

  