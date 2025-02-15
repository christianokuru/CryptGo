<script setup>
import LogoComponent from '@/components/custom/LogoComponent.vue'
import { navlinks } from '@/lib/Navlinks'
import SocialMediaComponent from '@/components/custom/SocialMediaComponent.vue'
import fb from '@/assets/images/socials/facebook.svg'
import twitter from '@/assets/images/socials/twitter.svg'
import instagram from '@/assets/images/socials/instagram.svg'


const socialMediaIcons = [
    { bgColor: 'bg-[#FFFFFF1A]', icon: instagram, altText: 'instagram-icon', link: 'https://www.instagram.com/dannn_sparrow/'},
    { bgColor: 'bg-[#FFFFFF1A]', icon: fb, altText: 'facebook-icon', link: 'www.facebook.com'},
    { bgColor: 'bg-[#FFFFFF1A]', icon: twitter, altText: 'twitter-icon', link: 'https://x.com/Dev_Chrisss'},
]
</script>

<template>
    <footer class="border py-[88.5px]">
        <!-- top -->
        <div class="flex items-center w-[486px] border">
            <!-- left -->
            <div>
                <div>
                    <div class="mb-[24px]">
                        <logo-component />
                    </div>
                    <p>Transform your crypto business with Crypgo <br/>Framer, a template for startups and blockchain services.</p>
                </div>
                <!-- social icons -->
                <div class="flex items-center space-x-[8px] mt-[24px] ">
                    <social-media-component 
                    v-for="(icons, index) in socialMediaIcons"
                    :key="index"
                    :bg-color="icons.bgColor"
                    :icon="icons.icon"
                    :alt-text="icons.altText"
                    :link="icons.link"
                    class="hover:bg-primary"
                    />
                </div>
            </div>
            <!-- right -->
            <div></div>
        </div>
        <!-- bottom -->
        <div></div>
    </footer>
</template>




<!-- <p>&copy; 2021 Crypgo</p> -->