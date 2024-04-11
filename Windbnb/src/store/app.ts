// Utilities
import { defineStore } from "pinia";
import data from "../assets/data/stays.json";
import { ref } from "vue";
export interface stays {
  id: number;
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
  const stay = ref({});
  const activeStays = ref<stays[]>([]);
  const activeCity = ref("Oulu");
  const fetchStay = (id: number) => {
    stay.value = stays.value.filter((st) => st.id === id);
  };
  const dataFiltered = (loc: string = "Oulu") => {
    activeStays.value = stays.value.filter((stay) => stay.city === loc);
    activeCity.value = loc;
  };

  return { stays, activeCity, stay, activeStays, fetchStay, dataFiltered };
});
