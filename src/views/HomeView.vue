<script setup>
import CrypgoLayout from "@/layouts/CrypgoLayout.vue"
import HeroComponent from "@/components/custom/HeroComponent.vue"
import TopCryptoComponent from "@/components/custom/TopCryptoComponent.vue"
import TrustedPlatformComponent from "@/components/custom/TrustedPlatformComponent.vue"
import FeatureSectionComponent from "@/components/custom/FeatureSectionComponent.vue"
import ReviewSectionComponent from "@/components/custom/ReviewSectionComponent.vue"
import BigPhoneSectionComponent from "@/components/custom/BigPhoneSectionComponent.vue"
import GetTemplateComponent from "@/components/custom/GetTemplateComponent.vue"
import CreatePortfolioSectionComponent from "@/components/custom/CreatePortfolioSectionComponent.vue"
import UpgradeCryptoSectionComponent from "@/components/custom/UpgradeCryptoSectionComponent.vue"
import CommunitySectionComponent from "@/components/custom/CommunitySectionComponent.vue"
</script>

<template>
  <crypgo-layout>
    <main>
      <hero-component />
      <trusted-platform-component />
      <top-crypto-component />
      <feature-section-component />
      <review-section-component />
      <big-phone-section-component />
      <get-template-component />
      <create-portfolio-section-component />
      <upgrade-crypto-section-component />
      <community-section-component />
    </main>
  </crypgo-layout>
</template>
