<template>
  <v-menu :contained="true" max-width="100">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" class="!capitalize">
        Helsinki, Finland</v-btn
      >
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in cities"
        :key="index"
        :value="index"
        @click="console.log(dataFiltered(item))"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { stays, dataFiltered } = storeToRefs(appStore);

const cities = Array.from(new Set(stays.value.map((stay) => stay.city)));
</script>

<style scoped></style>
