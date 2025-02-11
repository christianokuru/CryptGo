<script setup>
const props = defineProps({
    cryptoIcon: {
        type: String,
        required: true
    },
    cryptoName: {
        type: String,
        required: true
    },
    cryptoPair: {
        type: String,
        required: true
    },
    cryptoPercentValue: {
        type: String,
        required: true
    },
    upOrDownIcon: {
        type: String,
        required: true
    }
})
</script>

<template>
        <div class="flex flex-col mb-[32px] cursor-pointer hover:bg-[#ffffff18] rounded-16">
            <div class="grid grid-cols-2">
                <div class="flex items-center">
                    <img :src="cryptoIcon" alt="crypto-icon" class="w-[48px] h-[48px] mr-[16px]"/>
                    <div class="flex flex-col mr-[118px]">
                        <h2 class="text-white font-600 text-16px leading-[22.4px]">{{ cryptoName }}</h2>
                        <p class="font-400 text-[14px] leading-[19.6px] text-[#FFFFFFCC]">{{ cryptoPair }}</p>
                    </div>
                </div>
                <div class="flex items-center justify-end">
                    <p class="text-primary font-500 text-16px leading-[22.4px]">{{ cryptoPercentValue }}%</p>
                    <img :src="upOrDownIcon" alt="up-or-down-icon" class="w-[20px] h-[20px]" />
                </div>
            </div>
        </div>
</template>