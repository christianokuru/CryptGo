<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    cryptoLogo: {
        type: String,
        required: true,
    },
    cryptoName: {
        type: String,
        required: true,
    },
    cryptoPrice: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="w-[180px] h-[161px] rounded-[16px] p-[20px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] hover:bg-[#ffffff1e] cursor-pointer" data-aos="fade-down">
        <h2 class="font-400 text-[14px] leading-[16.8px] text-[#FFFFFF99] mb-[16px]">{{ title }}</h2>
        <img :src="cryptoLogo" alt="crypto logo" class="w-[32px] h-[32px] mb-[16px]"/>
        <div class="">
            <p class="font-600 text-16px leading-[19.2px] text-white">{{ cryptoName }}</p>
            <p class="font-400 text-[14px] leading-[18.8px] text-white ">{{ cryptoPrice }}<span class="uppercase font-400 text-[14px] leading-[18.8px] text-[#FFFFFF99] ml-[3px]">usd</span></p>
        </div>
    </div>
</template>