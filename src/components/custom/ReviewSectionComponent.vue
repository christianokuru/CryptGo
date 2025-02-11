<script setup>
import ReviewCardComponent from '@/component/custom/ReviewCardComponent.vue'
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
    <div>
        <div>
            <review-card-component 
            v-for="(review, index) in reviews"
            :key="index"
            :big-text="review.bigText"
            :small-text="review.smallText"
            />
        </div>
    </div>
</div>
</template>