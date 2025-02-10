<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="flex items-center gap-4">
        <div :class="[bgColor, 'w-[40px] h-[40px] rounded-[999px] p-[10px] bg-[#FFFFFF1A]']">
            <img :src="icon" :alt="text" class="w-[20px] h-[20px] object-contain" />
        </div>
        <div>
            <h1>{{ text }}</h1>
        </div>
    </div>
</template>