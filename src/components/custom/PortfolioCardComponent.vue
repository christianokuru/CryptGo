<script setup>
const props = defineProps({
    portfolioTotal: {
        type: String,
        required: true
    },
    cryptoIcon: {
        type: String,
        required: true
    },
    cryptoName: {
        type: String,
        required: true
    },
    crpyoPair: {
        type: String,
        required: true
    },
    cryptoValue: {
        type: String,
        required: true
    },
    upOrDownIcon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1>Your portfolio is up {{ portfolioTotal }}</h1>
        <div class="flex flex-col">
            <div>

            </div>
        </div>
    </div>
</template>