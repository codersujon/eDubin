<script setup>
  import { RouterLink } from "vue-router";
  defineProps({
        label: String,
        link: String
  })
</script>

<template>
    <RouterLink :to="{ link }" class="main-btn">{{ label }}</RouterLink>
</template>
