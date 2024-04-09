<template>
  <v-container class="mt-10 pb-16">
    <div class="flex justify-between">
      <h3 class="text-2xl font-bold">Stays in Finland</h3>
      <span class="text-sm font-medium">{{ activeStay.length }}+ stays</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <Card :stays="activeStay" />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { activeStay } = storeToRefs(appStore);
</script>
