<script setup>
import check from '@/assets/images/check.svg'

const checklist1 = [
    { id: 1, text: '100% secure', icon: check},
    { id: 2, text: 'Free figma file', icon: check},
    { id: 3, text: 'A fraction of the cost', icon: check},
    { id: 4, text: 'Powerful in performance', icon: check},
    ]
const checklist2 = [
    { id: 1, text: 'More durable', icon: check},
    { id: 2, text: 'Designed for crypto', icon: check},
    { id: 3, text: 'Easier to use', icon: check},
    { id: 4, text: '100% free framer template', icon: check},
]
</script>

<template>
  <div class="border">
    <!-- text and others -->
    <div class="w-[585px] border">
      <div>
        <p class="mb-[12px] font-400 text-18px leading-[21.6px]">
          Crypgo <span class="text-primary">upgrade</span>
        </p>
        <div>
          <h1 class="font-600 text-[40px] leading-[48px] w-[563px] mb-[12px]">
            Upgrade your crypto business
          </h1>
          <p
            class="font-400 text-16px leading-[22.4px] text-[#FFFFFF99] w-[450px]"
          >
            Get faster, safer, more affordable cloud object storage with no
            centeral point of failure.
          </p>
        </div>
      </div>
      <div class="flex space-x-[40px] mt-[40px]">
        <!-- left -->
        <div class="flex flex-col">
            <div v-for="checks in checklist1" :key="checklist1.id" class="flex items-center space-x-[12px] mb-[20px]">
            <img :src="checks.icon" alt="check-icon">
            <p class="font-500 text-16px leading-[19.2px] text-nowrap">{{ checks.text }}</p>
        </div>
        </div>
        <!-- right -->
        <div>
            <div v-for="checks2 in checklist2" :key="checklist2.id" class="flex items-center space-x-[12px] w-[232px] mb-[20px]">
            <img :src="checks2.icon" alt="check-icon">
            <p class="font-500 text-16px leading-[19.2px] text-nowrap">{{ checks2.text }}</p>
        </div>
      </div>
    </div>
    </div>
    <!-- image -->
    <div></div>
  </div>
</template>
