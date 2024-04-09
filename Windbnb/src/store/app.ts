// Utilities
import { defineStore } from "pinia";
import data from "../assets/data/stays.json";
import { ref } from "vue";
import { stays } from "../types/index";
export interface stays {
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
  const activeStay = ref<stays[]>([]);

  const dataFiltered = (loc: string = "Oulu") => {
    activeStay.value = stays.value.filter((stay) => stay.city === loc);
    console.log(activeStay.value);
  };

  dataFiltered();

  return { stays, activeStay, dataFiltered };
});
