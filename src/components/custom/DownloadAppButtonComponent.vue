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
    <div class="p-[3.38px] rounded-[6.77px] w-[132.85px]">
        <div class="flex items-center">
            <img :src="icon" :alt="altText" class="mr-[7.72px]">
            <div>
                <p class="text-16px font-500 mb-[44.46px]">{{ smallText }}</p>
                <h1 class="text-[24px] font-600">{{ largeText }}</h1>
            </div>
        </div>
    </div>
</template>