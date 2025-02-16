<script setup>
import NavbarComponent from '@/components/custom/NavbarComponent.vue';
import FooterComponent from '@/components/custom/FooterComponent.vue';
</script>

<template>
    <div class="mx-auto px-[50px] max-w-[1300px] border">
        <div>
            <navbar-component />
        </div>
        <slot />
        <footer-component />
    </div>
</template>