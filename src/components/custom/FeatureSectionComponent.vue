<script setup>
import FeatureGridComponent from "@/components/custom/FeatureGridComponent.vue"
import PortfolioCardComponent from "@/components/custom/PortfolioCardComponent.vue"
import { portfolio } from "@/lib/Portfolio-card-details"
import chain from "@/assets/images/chain.svg"
import thunder from "@/assets/images/thunder.svg"
import settings from "@/assets/images/settings.svg"
import wavy from "@/assets/images/wavy-bg.svg"
import { ref } from "vue"

const portfolioScore = ref(13.21)

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
  <div class="flex items-center">
    <!-- left div -->
    <div class="w-[588px]" data-aos="fade-right">
      <div class="mb-[40px]">
        <p class="font-400 text-18px leading-[21.6px] mb-[12px]">
          Why choose <span class="text-primary">crypgo</span>
        </p>
        <h1 class="text-white font-600 text-[40px] leading-[48px]">
          Features of the crypto framer mobile application
        </h1>
      </div>
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
    <div class="mb-[77px] max-w-[588px]">
        <div class="absolute mt-[143px] ">
            <img :src="wavy" class="w-[588px]" />
        </div>
        <div class="relative left-[110px] top-[75px] w-[371px] rounded-16 p-[32px] bg-[#FFFFFF0D] border border-[#FFFFFF1A] backdrop-blur-[8px]">
        <h1 class="mb-[32px] font-500 text-[20px] leading-[24px]">Your portfolio is up <span class="font-500 text-[20px] leading-[24px] text-primary">{{ portfolioScore }}%</span></h1>

        <portfolio-card-component 
        v-for="(portfolioDetails, index) in portfolio"
        :key="index"
        :crypto-icon="portfolioDetails.cryptoIcon"
        :crypto-name="portfolioDetails.cryptoName"
        :crypto-pair="portfolioDetails.cryptoPair"
        :crypto-percent-value="portfolioDetails.cryptoPercentValue"
        :up-or-down-icon="portfolioDetails.upOrDownIcon"
        />
    </div>
    </div>
  </div>
</template>
