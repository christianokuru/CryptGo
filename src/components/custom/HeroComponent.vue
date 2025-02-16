<script setup>
import AlertComponent from "@/components/custom/AlertComponent.vue"
import ButtonComponent from "@/components/custom/ButtonComponent.vue"
import arrow from "@/assets/images/right-arrow.svg"
import hero from "@/assets/images/hero.svg"
</script>

<template>
  <div class="flex items-center justify-between"  data-aos="zoom-in-down">
    <div class="w-[588px] mt-[72px] mb-[137px]" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div>
        <div>
          <alert-component text="Future of crypto trading" />
        </div>
        <h1
          class="mt-[12px] font-500 text-[72px] text-[#FFFFFFCC] leading-[86.4px]"
        >
          Fast and Secure Cryptocurrency Exchange
        </h1>
        <p class="mt-[12px] text-[#ffffffa8] font-[400] text-16px leading-[22.4px] w-[450px]">
          Trade cryptocurrencies with ease, security, and advanced features on
          our cutting-edge platform.
        </p>
      </div>
      <div class="mt-[40px]">
        <button-component text="Explore more" :icon="arrow" />
      </div>
    </div>


    <div class="w-[584px] h-[582px] mt-[72px]">
        <img :src="hero" alt="hero" class=""/>
    </div>
  </div>
</template>
