<script setup>
import ButtonComponent from "@/components/custom/ButtonComponent.vue";
import rightArrow from "@/assets/images/right-arrow.svg";
</script>

<template>
  <div class="relative overflow-hidden py-[72px]" data-aos="fade-left">
    <div
      class="flex items-center justify-between py-[64px] pl-[64px] border border-[#FFFFFF1A] rounded-16 bg-[#FFFFFF0D] backdrop-blur-[6px]"
    >
      <div class="relative z-10 w-[674px]">
        <h1 class="font-600 text-[40px] leading-[48px] mb-[12px]">
          Crypgo powered by framer platform
        </h1>
        <p
          class="w-[480px] font-400 text-[16px] leading-[22.4px] text-[#FFFFFF99]"
        >
          Our landing page empower framer developers to have free, safer and
          more trustworthy experiences
        </p>
      </div>
      <div class="relative z-10 ml-[226px]">
        <button-component
          text="Get templates"
          :icon="rightArrow"
          class="mr-[66px] text-nowrap"
        />
      </div>
      <div
        class="absolute inset-[0px] left-[790px] bg-[url('src/assets/images/abstract1.svg')] bg-no-repeat bg-cover opacity-5"
      ></div>
    </div>
  </div>
</template>
