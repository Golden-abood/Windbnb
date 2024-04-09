<template>
  <v-dialog transition="dialog-top-transition" width="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" text="Transition from Top" block></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card> </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts"></script>

<style scoped></style>
