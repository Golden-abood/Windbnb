<template>
  <v-dialog transition="dialog-top-transition" width="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <div class="md:flex justify-between">
        <img width="130" src="../../assets/logo.svg" alt="" />
        <div
          class="box_shadow flex items-center rounded-xl p-1 w-fit mx-auto md:!mx-0 mt-10 md:!mt-0"
        >
          <v-btn>
            <v-icon color="primary" @click="toggleDarkMode()"
              >mdi-theme-light-dark</v-icon
            >
          </v-btn>
          <Menu />
          <v-btn
            v-bind="activatorProps"
            text="Transition from Top"
            variant="elevated"
            class="!font-400 !text-[14px] !capitalize !rounded-none !border-x-[#F2F2F2] !border-x-2"
            >Add Guest</v-btn
          >
          <v-btn variant="elevated" class="!rounded-none"
            ><v-icon color="primary" class="!text-2xl"
              >mdi-magnify
            </v-icon></v-btn
          >
        </div>
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="!bg-white pt-16">
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item" :value="item">
            <v-card flat>
              <v-card-text> {{ text }}</v-card-text>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-end">
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu.vue";
import { ref } from "vue";
const tab = ref(null);
const items = ["web", "shopping", "videos", "images", "news"];
const text = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);

const props = defineProps<{
  toggleDarkMode: () => void;
}>();

// Call this function when you want to toggle dark mode
function toggleDarkMode() {
  props.toggleDarkMode();
  localStorage.setItem("darkMode", darkMode.value ? "dark" : "light");
}

console.log(props.toggleDarkMode);
</script>
<style>
.box_shadow {
  box-shadow: 0px 1px 6px 0px #0000001a;
}
.v-overlay__content {
  top: 0 !important;
  width: 100% !important;
  margin: 0 !important;
}
</style>
