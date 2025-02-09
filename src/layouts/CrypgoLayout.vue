<script setup>
import NavbarComponent from '@/components/custom/NavbarComponent.vue';
import FooterComponent from '@/components/custom/FooterComponent.vue';
</script>

<template>
    <div class="border border-[#47474798] mx-[50px]">
        <div>
            <navbar-component />
        </div>
        <slot />
        <footer-component />
    </div>
</template>