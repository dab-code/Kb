<script setup lang="ts">
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
            :placeholder="[height,width]"
            quality="80"
        />
    </div>
</template>

<style>
.masonry-item {
  max-width: 100%;
  height: auto;
}
</style>
