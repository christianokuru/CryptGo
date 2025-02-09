<script setup>
import NavbarComponent from '@/components/custom/NavbarComponent.vue';
import FooterComponent from '@/components/custom/FooterComponent.vue';
</script>

<template>
    <div class="border border-primary mx-[50px]">
        <div>
            <navbar-component />
        </div>
        <slot />
        <footer-component />
    </div>
</template>