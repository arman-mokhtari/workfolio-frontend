import {
  addMiscPage,
  getAllMiscPages,
  getMiscPageById,
  getMiscPageBySlug,
  removeMiscPage,
  updateMiscPage,
} from "@/services/misc/miscPageServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllMiscPage = () =>
  useQuery({ queryKey: ["get-misc-pages"], queryFn: getAllMiscPages, retry: false });

export const useAddMiscPage = () => {
  return useMutation({ mutationFn: addMiscPage });
};

export const useUpdateMiscPage = () => {
  return useMutation({ mutationFn: updateMiscPage });
};

export const useRemoveMiscPage = () => {
  return useMutation({ mutationFn: removeMiscPage });
};

export const useGetMiscPageById = (id) =>
  useQuery({
    queryKey: ["get-misc", id],
    queryFn: () => getMiscPageById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetMiscPageBySlug = (id) =>
  useQuery({
    queryKey: ["get-misc-slug", id],
    queryFn: () => getMiscPageBySlug(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
