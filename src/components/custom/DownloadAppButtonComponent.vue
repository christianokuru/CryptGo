<script setup>
const props = defineProps({
    bgColor: String,
    icon: String,
    smallText: String,
    largeText: String,
    altText: String,
})
</script>

<template>
    <div :class="[bgColor, 'p-[3.38px] rounded-[6.77px] w-[132.85px] hover:bg-[#ffffff2a] cursor-pointer']">
        <div class="flex items-center">
            <img :src="icon" :alt="altText" class="mx-[7.72px]">
            <div>
                <p class="text-[9px] font-500">{{ smallText }}</p>
                <h1 class="text-[14px] font-600">{{ largeText }}</h1>
            </div>
        </div>
    </div>
</template>