<script setup>
import logo from "@/assets/images/Cryptgo-logo.svg";
</script>

<template>
  <div class="my-[6px]">
    <router-link :to="{ name: 'home' }">
      <img :src="logo" alt="Crypgo Logo" />
    </router-link>
  </div>
</template>
