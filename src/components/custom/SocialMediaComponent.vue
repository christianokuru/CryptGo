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
    },
    link: {
        type: String,
        default: '#',
        required: true,
    }
})
</script>

<template>
<div :class="[bgColor, 'w-[38px] rounded-[999px] p-[9px]']">
    <div class="">
        <a :href="link" target="_blank" rel="noopener noreferrer">
            <img :src="icon" :alt="altText" class="w-[20px] h-[20px]">
        </a>
    </div>
</div>
</template>