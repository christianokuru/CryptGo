<script setup>
const props = defineProps({
    bgColor: {
        type: String,
    },
    icon: {
        type: String,
    },
    iconColor: {
        type: String,
    },
    altText: {
        type: String,
    }
})
</script>

<template>
<div :class="[bgColor, 'w-[38px] rounded-[999px] p-[9px]']">
    <div class="">
        <img :src="icon" :alt="altText" class="w-[20px] h-[20px]">
    </div>
</div>
</template>