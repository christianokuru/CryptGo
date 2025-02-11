<script setup>
const props = defineProps({
    bigText: {
        type: String,
        required: true,
    },
    smallText: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="w-[231px] rounded-16 p-[47px] bg-[#FFFFFF0D] border border-[#FFFFFF1A]">
        <div class="w-[90px]">
            <h1 class="text-primary font-500 text-[32px] leading-[38.4px] text-center">{{ bigText }}</h1>
            <p class="font-400 text-16px leading-[19.2px] text-center">{{ smallText }}</p>
        </div>
    </div>
</template>