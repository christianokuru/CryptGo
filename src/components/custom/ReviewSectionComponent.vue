<script setup>
import ReviewCardComponent from '@/components/custom/ReviewCardComponent.vue'
import { ref } from 'vue'

const reviews = ref([
    { bigText: '6M+', smallText: 'Active users'},
    { bigText: '24/7', smallText: 'User support'},
    { bigText: '160+', smallText: 'Countries'},
    { bigText: '$22B+', smallText: 'Trade volume'},
])
</script>

<template>
<div>
    <div class="my-[72px]">
        <div class="flex my-[72px] mx-[102px]">
            <review-card-component 
            v-for="(review, index) in reviews"
            :key="index"
            :big-text="review.bigText"
            :small-text="review.smallText"
            class=" mr-[24px] border text-nowrap"
            />
        </div>
    </div>
</div>
</template>