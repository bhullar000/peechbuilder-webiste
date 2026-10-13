<template>
  <svg viewBox="0 0 64 72" fill="none" aria-hidden="true">
    <path :fill="navy" d="M4 16a12 12 0 0 1 12-12h18a23 23 0 0 1 0 46h-5V37h5a10 10 0 0 0 0-20H17v17c-6 2.5-10.5 6.5-13 12V16Z" />
    <path fill="#F26B1D" d="M4 70V58c0-10.5 8.5-18 21-18h1c0 16-9 28-22 30Z" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ navy?: string }>(), { navy: '#14233A' })
</script>
