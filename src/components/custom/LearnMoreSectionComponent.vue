<script setup>
import { AccordionRoot } from "radix-vue"
import AccordionComponent from '@/components/custom/AccordionComponent.vue'


</script>

<template>
    <div >
        <!-- text -->
        <div class="mt-[72px] mb-[40px] text-center">
            <p class="mb-[8px] font-400 text-18px leading-[25.2px]">Popular <span class="text-primary">questions</span></p>
            <div>
                <h1 class="font-600 text-[40px] leading-[48px] mb-[12px]">Learn more about Crypgo</h1>
                <p class="font 400 text-18px leading-[22.4px] text-[#FFFFFF99]">We accept 100+ cryptocurrencies around the world</p>
            </div>
        </div>
        <!-- Accordion component -->
        <div>
            <accordion-component />
        </div>
    </div>
</template>