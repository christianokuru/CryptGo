<script setup>
import FeatureGridComponent from '@/components/custom/FeatureGridComponent.vue'
import { ref } from 'vue'

const features = ref([
    { text: 'Designed for crypto trading platforms'}
])

</script>

<template>
    <div>
        <!-- left div -->
        <div>
            <div>
                <p>Why choose crypgo</p>
                <h1>Features of the crypto framer mobile application</h1>
            </div>
            <!-- grid section -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <feature-grid-component 
                    
                    />
                </div>
            </div>
        </div>
        
        <!-- right div -->
        <div></div>
    </div>
</template>