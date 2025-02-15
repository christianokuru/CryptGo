<script setup>
import { computed } from "vue";
import LogoComponent from "@/components/custom/LogoComponent.vue";
import { navlinks } from "@/lib/Navlinks";
import SocialMediaComponent from "@/components/custom/SocialMediaComponent.vue";
import GooglePlayComponent from "@/components/custom/GooglePlayComponent.vue";
import AppStoreComponent from "@/components/custom/AppStoreComponent.vue";
import fb from "@/assets/images/socials/facebook.svg";
import twitter from "@/assets/images/socials/twitter.svg";
import instagram from "@/assets/images/socials/instagram.svg";

const currentYear = computed(() => new Date().getFullYear());

const socialMediaIcons = [
  {
    bgColor: "bg-[#FFFFFF1A]",
    icon: instagram,
    altText: "instagram-icon",
    link: "https://www.instagram.com/dannn_sparrow/",
  },
  {
    bgColor: "bg-[#FFFFFF1A]",
    icon: fb,
    altText: "facebook-icon",
    link: "www.facebook.com",
  },
  {
    bgColor: "bg-[#FFFFFF1A]",
    icon: twitter,
    altText: "twitter-icon",
    link: "https://x.com/Dev_Chrisss",
  },
];

const otherPages = [
  { text: "Error 404", route: "#" },
  { text: "Terms & Conditions", route: "#" },
  { text: "Privacy Policy", route: "#" },
];
</script>

<template>
  <footer class="pt-[88.5px]">
    <div class="flex items-center justify-between mb-[88.5px]">
      <div class="w-[486px] mr-[185.15px]">
        <div>
          <div class="mb-[24px]">
            <logo-component />
          </div>
          <p class="text-[#FFFFFF99] font-400 leading-[22.4px] text-16px">
            Transform your crypto business with Crypgo <br />Framer, a template
            for startups and blockchain services.
          </p>
        </div>
        <div class="flex items-center space-x-[8px] mt-[24px]">
          <social-media-component
            v-for="(icons, index) in socialMediaIcons"
            :key="index"
            :bg-color="icons.bgColor"
            :icon="icons.icon"
            :alt-text="icons.altText"
            :link="icons.link"
            class="hover:bg-primary"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 w-[528.85px]">
        <div>
          <p class="font-500 text-18px leading-[25.2px] mb-[12px]">Links</p>
          <div>
            <div v-for="links in navlinks" :key="links.text">
              <router-link
                :to="links.route"
                class="text-[#FFFFFF99] hover:text-primary font-400 leading-[22.4px] text-16px mb-[8px]"
                active-class="border-b-[3px] border-primary text-primary"
                >{{ links.text }}</router-link
              >
            </div>
          </div>
        </div>

        <div>
          <p class="font-500 text-18px leading-[25.2px] mb-[12px]">
            Other Pages
          </p>
          <div v-for="(pages, index) in otherPages" :key="index">
            <router-link
              :to="pages.route"
              class="text-[#FFFFFF99] hover:text-primary font-400 leading-[22.4px] text-16px"
              >{{ pages.text }}</router-link
            >
          </div>
        </div>

        <div class="space-y-[16px]">
          <h1 class="font-500 text-18px leading-[25.2px] mb-[12px]">
            Download App
          </h1>
          <google-play-component />
          <app-store-component />
        </div>
      </div>
    </div>
    <div class="px-[458px]">
      <p
        class="text-center mt-[32px] mb-[40px] font-400 text-18px leading-[19.6px] text-[#FFFFFF66]"
      >
        Copyright ©{{ currentYear }} Crypgo. All rights reserved
      </p>
    </div>
  </footer>
</template>
