<script setup>
import apple from '@/assets/images/apple.svg'
import DownloadAppButtonComponent from "@/components/custom/DownloadAppButtonComponent.vue"

const googlePlay = [
    { bgColor: 'bg-[#FFFFFF1A]', icon: apple, smallText: 'Download on the', largeText: 'App Store', altText: 'apple-store-icon' }
]
</script>

<template>
    <div>
      <download-app-button-component 
        :bg-color="googlePlay[0].bgColor"
        :icon="googlePlay[0].icon"
        :small-text="googlePlay[0].smallText"
        :large-text="googlePlay[0].largeText"
        :alt-text="googlePlay[0].altText"
      />
    </div>
  </template>
  
