// Utilities
import { defineStore } from "pinia";
import data from "../assets/data/stays.json";
import { ref } from "vue";
interface stays {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export const useAppStore = defineStore("app", () => {
  const stays = ref<stays[]>(data);
  console.log(stays.value);
  return { stays };
});
