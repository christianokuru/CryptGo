<script setup>

const props = defineProps({
    text: String,
})
</script>

<template>
    <div class="bg-[#99E39E1A] border border-[#FFFFFF1A] rounded-[999px] w-[220px]">
        <h1 class="text-primary font-500 text-16px leading-[19.2px] py-[6px] px-[16px]">{{ text }}</h1>
    </div>
</template>