<template>
  <v-card class="mt-16">
    <v-row>
      <v-col>
        <v-card-title class="!text-2xl mt-10">
          {{ stay[0].title }}
        </v-card-title>
        <v-card-text class="!text-lg"
          >{{ stay[0].city }} , {{ stay[0].country }}</v-card-text
        >
        <p class="ms-6">{{ stay[0].type }}</p>

        <!-- <span v-if="stay[0].superHost">superHost</span> -->

        <v-row class="pt-10 text-center">
          <v-col>rating : {{ stay[0].rating }}</v-col>
          <v-col>beds : {{ stay[0].beds }}</v-col>
          <v-col>rating : {{ stay[0].maxGuests }}</v-col>
        </v-row>
        <v-card-actions class="pt-16 mt-10 flex">
          <v-btn color="#329ef4" variant="text" append-icon="mdi-pencil">
            Edit
          </v-btn>
          <v-btn color="error" variant="text" append-icon="mdi-delete"
            >Delete
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col>
        <v-img :src="stay[0].photo"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "../store/app";
import { useRoute } from "vue-router";
const appStore = useAppStore();
const { stay } = storeToRefs(appStore);

appStore.fetchStay(parseInt(useRoute().params.id));
</script>

<style scoped></style>
