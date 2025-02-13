<script setup>
import NavbarComponent from '@/components/custom/NavbarComponent.vue';
import FooterComponent from '@/components/custom/FooterComponent.vue';
</script>

<template>
    <div class="ml-[50px] mr-[47px]">
        <div>
            <navbar-component />
        </div>
        <slot />
        <footer-component />
    </div>
</template>