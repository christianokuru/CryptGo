<script setup>
import { ref } from 'vue';
import LogoComponent from "@/components/custom/LogoComponent.vue"
import { navlinks } from '@/lib/Navlinks';


const isMenuOpen = ref(false);
</script>

<template>
  <div>
    <div class="flex items-center justify-between my-[32px]">
      <div>
        <logo-component />
      </div>

      <div class="hidden md:flex items-center space-x-[50px]" data-aos="fade-down">
        <div v-for="links in navlinks" :key="links.text">
          <router-link
            :to="links.route"
            class="text-white hover:text-primary hover:border-b-[3px] font-500 leading-[22.4px] text-16px"
            active-class="border-b-[3px] border-primary text-primary"
            exact
          >{{ links.text }}</router-link>
        </div>
      </div>

      <div class="md:hidden" @click="isMenuOpen = !isMenuOpen" data-aos="fade-left">
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div class="hidden md:block" data-aos="fade-left">
        <button
          class="bg-primary text-background font-600 text-16px leading-[22.4px] px-[20px] py-[11px] rounded-12"
        >
          Get template
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden flex flex-col items-center space-y-4 mt-4">
      <div v-for="links in navlinks" :key="links.text">
        <router-link
          :to="links.route"
          class="text-white hover:text-primary hover:border-b-[3px] font-500 leading-[22.4px] text-16px"
          active-class="border-b-[3px] border-primary text-primary"
          exact
        >{{ links.text }}</router-link>
      </div>
    </div>
  </div>
</template>

