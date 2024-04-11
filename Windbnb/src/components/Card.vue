<template>
  <v-card
    v-for="(stay, index) in stays"
    :key="index"
    class="rounded-xl"
    @click="$router.replace(`stays/${stay.id}`)"
  >
    <v-img :src="stay.photo" class="!max-h-[250px]" />
    <v-card-text class="flex justify-between items-center">
      <span
        v-if="stay.superHost"
        class="text-[#4F4F4F] font-bold text-xs p-[5px] border-[2px] border-solid border-rounded-lg border-[#4F4F4F]"
        >super Host
      </span>
      <p class="text-sm font-medium text-[#828282]">
        Entire apartment . 2 beds
      </p>
      <div class="flex gap-x-1 text-[#828282] font-medium">
        <v-icon color="primary">mdi-star</v-icon>
        <span>{{ stay.rating }}</span>
      </div>
    </v-card-text>
    <v-card-title class="!font-semibold !text-base pb-6">{{
      stay.title
    }}</v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps(["stays"]);
console.log(props.stays);
</script>
