<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition duration-300"
    :class="scrolled || open ? 'border-b border-line bg-white/90 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container-site flex h-[76px] items-center justify-between">
      <Logo />

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Main">
        <a v-for="link in links" :key="link.href" :href="link.href" class="text-[15px] font-medium text-muted transition hover:text-navy">
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden lg:block">
        <a href="#contact" class="btn-primary h-11 px-5">Start a project</a>
      </div>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full border border-line bg-white lg:hidden"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg v-if="!open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>

    <nav v-if="open" class="container-site flex flex-col gap-1 pb-6 lg:hidden" aria-label="Mobile">
      <a v-for="link in links" :key="link.href" :href="link.href" class="rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-navy-50" @click="open = false">
        {{ link.label }}
      </a>
      <a href="#contact" class="btn-primary mt-3" @click="open = false">Start a project</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 12 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
