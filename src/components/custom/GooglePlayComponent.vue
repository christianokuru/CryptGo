<script setup>
import google from '@/assets/images/google-play.svg'
import DownloadAppButtonComponent from "@/components/custom/DownloadAppButtonComponent.vue"

const googlePlay = [
    { bgColor: 'bg-[#FFFFFF1A]', icon: google, smallText: 'GET IT ON', largeText: 'Google Play', altText: 'google-play-icon' }
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
  
