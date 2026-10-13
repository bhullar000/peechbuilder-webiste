<template>
  <NuxtLink to="/" class="flex items-center gap-3" aria-label="Peechbuilder Technologies home">
    <LogoMark class="h-10 w-auto" :navy="light ? '#FFFFFF' : '#14233A'" />
    <span class="leading-none">
      <span class="block font-display text-[22px] font-bold tracking-tight" :class="light ? 'text-white' : 'text-navy'">Peechbuilder</span>
      <span class="mt-1 block text-[9.5px] font-medium uppercase tracking-[0.22em]" :class="light ? 'text-white/60' : 'text-navy/70'">Technologies (OPC) Pvt Ltd</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ light?: boolean }>()
</script>
