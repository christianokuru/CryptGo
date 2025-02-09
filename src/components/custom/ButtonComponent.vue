<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="flex items-center bg-primary font-600 text-16px text-background leading-[22.4px] pl-[24px] py-[13px] rounded-12 hover:bg-[#99e39eb9]"
  >
    {{ text }}
    <img
      :src="icon"
      alt="icon"
      class="w-[20px] h-[20px] ml-[8px] mr-[24px]"
    />
  </button>
</template>
