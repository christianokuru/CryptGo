<script setup>
import LogoComponent from "@/components/custom/LogoComponent.vue";

const navLinks = [
  { text: "Features", route: { name: "features" } },
  { text: "Benefits", route: { name: "benefits" } },
  { text: "Services", route: { name: "services" } },
  { text: "Why Crypgo", route: { name: "whyCrypGo" } },
  { text: "FAQs", route: { name: "faq" } },
];
</script>

<template>
  <div>
    <div class="flex items-center justify-between my-[32px]">
      <div>
        <logo-component />
      </div>

      <div class="flex items-center space-x-[50px]">
        <div v-for="links in navLinks" :key="links.text">
          <router-link
            :to="links.route"
            class="text-white hover:text-primary hover:border-b-[3px] font-500 leading-[22.4px] text-16px"
            active-class="border-b-[3px] border-primary text-primary"
            exact
            >{{ links.text }}</router-link
          >
        </div>
      </div>

      <div>
        <button
          class="bg-primary text-background font-600 text-16px leading-[22.4px] px-[20px] py-[11px] rounded-12"
        >
          Get template
        </button>
      </div>
    </div>
  </div>
</template>
