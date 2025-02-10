<script setup>
import CrypgoLayout from "@/layouts/CrypgoLayout.vue"
import HeroComponent from "@/components/custom/HeroComponent.vue"
import TopCryptoComponent from "@/components/custom/TopCryptoComponent.vue"
import TrustedPlatformComponent from "@/components/custom/TrustedPlatformComponent.vue";
</script>

<template>
  <crypgo-layout>
    <main>
      <hero-component />
      <trusted-platform-component />
      <top-crypto-component />
    </main>
  </crypgo-layout>
</template>
