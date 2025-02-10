<script setup>
import TopCryptoCards from '@/components/custom/TopCryptoCards.vue'
import { cards } from '@/lib/Crypto-card-detials.js'

</script>

<template>
    <div>
        <div class="text-center">
            <p class="font-400 text-18px heading-[21.6px] mb-[12px]">Features<span class="text-primary font-400 text-18px leading-[21.6px]"> crypto coins</span></p>
            <h1 class="text-white font-600 text-44px leading-[48px] mb-[40px]">Top crypto coins updates</h1>
        </div>
        
        <div class="flex items-center justify-around mb-[72px]">
            <top-crypto-cards
            v-for="(cryptoCards, index) in cards"
            :key="index"
            :title="cryptoCards.title"
            :cryptoLogo="cryptoCards.cryptoLogo"
            :cryptoName="cryptoCards.cryptoName"
            :cryptoPrice="cryptoCards.cryptoPrice"
            />
        </div>
    </div>
</template>