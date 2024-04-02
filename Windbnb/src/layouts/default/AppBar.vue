<template>
  <div class="md:flex justify-between">
    <img src="../../assets/logo.svg" alt="" />
    <div
      class="box_shadow flex items-center rounded-xl p-1 w-fit mx-auto md:!mx-0 mt-10 md:!mt-0"
    >
      <v-btn disabled class="!font-400 !text-[14px] !capitalize !rounded-none"
        >Helsinki, Finland</v-btn
      >
      <v-btn
        variant="elevated"
        class="!font-400 !text-[14px] !capitalize !rounded-none !border-x-[#F2F2F2] !border-x-2"
        >Add Guest</v-btn
      >
      <v-btn variant="elevated" class="!rounded-none"
        ><v-icon color="primary" class="!text-2xl">mdi-magnify </v-icon></v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
//
</script>
<style scoped>
.box_shadow {
  box-shadow: 0px 1px 6px 0px #0000001a;
}
</style>
