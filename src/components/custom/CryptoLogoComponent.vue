<script setup>
import { platforms } from "@/lib/Platforms"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/free-mode"
import { Autoplay, FreeMode } from "swiper/modules"

</script>

<template>
  <div class="w-full px-4 py-8 bg-background" data-aos="fade-down">
    <Swiper
      :slides-per-view="5"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 1000, disableOnInteraction: false }"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      class="w-full"
    >
      <SwiperSlide v-for="crypto in platforms" :key="crypto.id">
        <div class="flex items-center">
          <img :src="crypto.src" :alt="crypto.name" class="w-28 h-28 object-contain" />
          <h1 class="ml-4 text-sm text-gray-600">{{ crypto.name }}</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
