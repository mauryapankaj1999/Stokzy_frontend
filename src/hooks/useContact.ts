import { createContact, deleteContact, getContacts, getSingleContact, updateContact } from "@/services/contactApi";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";



export const useCreateContact =
  () => {
    return useMutation({
      mutationFn:
        createContact,
    });
  };

export const useContacts =
  () => {
    return useQuery({
      queryKey: [
        "contacts",
      ],
      queryFn:
        getContacts,
    });
  };

export const useSingleContact =
  (id: string) => {
    return useQuery({
      queryKey: [
        "contact",
        id,
      ],
      queryFn: () =>
        getSingleContact(id),
      enabled: !!id,
    });
  };

export const useUpdateContact =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        data,
      }: {
        id: string;
        data: any;
      }) =>
        updateContact(
          id,
          data
        ),

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "contacts",
            ],
          }
        );
      },
    });
  };

export const useDeleteContact =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        deleteContact,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "contacts",
            ],
          }
        );
      },
    });
  };