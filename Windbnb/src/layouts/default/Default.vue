<template>
  <v-app :theme="darkMode ? 'dark' : 'light'">
    <v-container>
      <default-bar :toggle-dark-mode="toggleDarkMode" />

      <default-view />
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";

const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  localStorage.setItem("darkMode", darkMode.value ? "dark" : "light");
}
</script>
