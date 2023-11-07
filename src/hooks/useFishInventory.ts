import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import { FishInventory } from "../types/fish-inventory.types";

const getFishInventory = () => {
  return api.get<FishInventory>("/fish-inventory");
};

export const useFishInventory = () => {
  return useQuery({
    queryKey: ["fish-inventory"],
    queryFn: getFishInventory,
    staleTime: 2 * 60 * 1000,
  });
};
