<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import plus from '@/assets/images/plus.svg'


const accordionItems = [
  {
    value: 'item-1',
    title: 'What is Crypgo?',
    content: 'Crypgo is a cryptocurrency trading platform that allows users to buy, sell, and manage digital assets securely.',
  },
  {
    value: 'item-2',
    title: 'Is Crypgo available worldwide?',
    content: 'Yes, Crypgo is available in multiple countries worldwide. However, availability may vary depending on local regulations.',
  },
  {
    value: 'item-3',
    title: 'Which cryptocurrencies are supported on Crypgo?',
    content: 'Crypgo supports a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and many others.',
  },
  {
    value: 'item-4',
    title: 'Are there any deposit or withdrawal fees?',
    content: 'Crypgo charges minimal fees for deposits and withdrawals. Fees may vary depending on the payment method and network congestion.',
  },
  {
    value: 'item-5',
    title: 'Does Crypgo offer advanced trading tools?',
    content: 'Yes, Crypgo provides advanced trading tools, including real-time market data, technical analysis indicators, and automated trading options.',
  },
];

</script>

<template>
    <AccordionRoot
      class="bg-background max-w-[992px] max-sm:w-[1000px] mx-auto px-4 md:px-0"
      default-value="item-1"
      type="single"
      :collapsible="true"
    >
      <template v-for="item in accordionItems" :key="item.value">
        <AccordionItem class="mb-[20px] overflow-hidden" :value="item.value">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="max-sm:text-[12px] max-sm: font-500 text-[20px] leading-[28px] flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-[#FFFFFF0D] rounded-[16px] pl-[24px] py-[30px] md:py-[20px]"
            >
              <span>{{ item.title }}</span>
              <img :src="plus" alt="plus" class="mr-[24px] w-[20px] md:w-[24px]" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="text-primary overflow-hidden">
            <div class="px-5 py-4 md:px-[32px]">
              {{ item.content }}
            </div>
          </AccordionContent>
        </AccordionItem>
      </template>
    </AccordionRoot>
  </template>
  
  