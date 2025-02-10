<script setup>
import FeatureGridComponent from "@/components/custom/FeatureGridComponent.vue";
import chain from "@/assets/images/chain.svg";
import thunder from "@/assets/images/thunder.svg";
import settings from "@/assets/images/settings.svg";
import { ref } from "vue";

const features = ref([
  {
    text: "Designed for crypto trading platforms",
    icon: chain,
    bgColor: "bg-[#FFFFFF1A]",
  },
  {
    text: "Designed for crypto trading platforms",
    icon: thunder,
    bgColor: "bg-[#FFFFFF1A]",
  },
  {
    text: "Designed for crypto trading platforms",
    icon: settings,
    bgColor: "bg-[#FFFFFF1A]",
  },
]);
</script>

<template>
  <div>
    <!-- left div -->
    <div class="w-[588px]">
      <div class="mb-[40px]">
        <p class="font-400 text-18px leading-[21.6px] mb-[12px]">
          Why choose <span class="text-primary">crypgo</span>
        </p>
        <h1 class="text-white font-600 text-[40px] leading-[48px]">
          Features of the crypto framer mobile application
        </h1>
      </div>
      <!-- grid section -->
      <div class="grid grid-cols-2 gap-y-[42px]">
        <feature-grid-component
          v-for="(feature, index) in features"
          :key="index"
          :text="feature.text"
          :icon="feature.icon"
          :bg-color="feature.bgColor"
        />
      </div>
    </div>

    <!-- right div -->
    <div>
        
    </div>
  </div>
</template>
