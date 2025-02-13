<script setup>
import pic from "@/assets/images/glowing-cards.png";
import pie from "@/assets/images/pie.svg";
import vault from "@/assets/images/vault.svg";
import mobile from "@/assets/images/mobile.svg";

const list = [
  { icon: pie, altName: "pie-icon", text: "Manage your portfolio", id: 1 },
  { icon: vault, altName: "vault-icon", text: "Vault protection", id: 2 },
  { icon: mobile, altName: "mobile-icon", text: "Mobile apps", id: 3 },
];
</script>

<template>
  <div class="flex items-center justify-between" data-aos="fade-right">
    <div class="w-[700px]" >
      <img :src="pic" alt="image-on-the-left" />
    </div>
    <div class="pl-[32px] ml-[29px] w-[585px]">
      <div class="space-y-[12px] mb-[40px]">
        <p class="font-400 text-18px leading-[21.6px]">
          Crypto landing page <span class="text-primary">template</span>
        </p>
        <h1 class="font-600 text-[40px] leading-[48px]">
          Create your cryptocurrency portfolio today
        </h1>
        <p class="font-400 text-16px leading-[22.4px] text-[#FFFFFF99]">
          Coinbase has a variety of features that make it the best place to
          start trading.
        </p>
      </div>
      <div
        v-for="lists in list"
        :key="list.id"
        class="flex items-center border-b-[1px] border-[#FFFFFF1A] py-[20px]"
        data-aos="fade-left"
      >
        <img :src="lists.icon" alt="lists.altName" class="mr-[12px]" />
        <h1 class="font-500 text-[20px] leading-[24px]">{{ lists.text }}</h1>
      </div>
    </div>
  </div>
</template>
