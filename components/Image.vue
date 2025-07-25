<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
}>()
</script>

<template>
    <div class="item">
        <NuxtImage
            :src="src"
            format="webp"
            loading="lazy"
            :alt="alt"
            :width="width"
            :height="height"
            :placeholder="[width || 100, height || 100, 80, 5]"
            quality="80"
        />
    </div>
</template>
