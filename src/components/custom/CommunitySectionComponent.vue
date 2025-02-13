<script setup>
import community from '@/assets/images/community.svg'
</script>

<template>
    <div class="text-center">
        <div class="mt-[72px] mb-[40px]">
            <p class="font-400 text-18px leading-[21.6px] mb-[12px]">Always by <span class="text-primary">your side</span></p>
            <div>
                <h1 class="text-center font-600 text-[40px] leading-[48px] mb-[12px]">Be the first to use our Crypgo!</h1>
                <p class="font-400 text-[16px] leading-[22.4px] text-[#FFFFFF99]">Get faster, safer, more affordable cloud object storage with <br/>no centeral point of failure.</p>
            </div>
        </div>
        <div>
            <img :src="community" alt="community" class="mt-[72px] w-full">
        </div>
    </div>
</template>