<template>
  <footer class="relative overflow-hidden bg-navy-900 text-white">
    <div class="pointer-events-none absolute -bottom-10 right-0 h-1/2 w-1/2 bg-orange [clip-path:polygon(35%_100%,100%_10%,100%_100%)]" />

    <div class="container-site relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Logo light />
        <p class="mt-6 max-w-sm text-[15px] leading-7 text-white/65">
          From ideas to impact. We design, build and run digital products for founders and businesses.
        </p>
        <p class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
          Products · Technology · People · Possibilities
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Company</h3>
        <ul class="mt-5 space-y-3 text-[15px] text-white/80">
          <li><a href="#services" class="hover:text-orange-400">Services</a></li>
          <li><a href="#products" class="hover:text-orange-400">Products</a></li>
          <li><a href="#process" class="hover:text-orange-400">Process</a></li>
          <li><a href="#contact" class="hover:text-orange-400">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Reach us</h3>
        <ul class="mt-5 space-y-3 text-[15px] text-white/80">
          <li><a href="mailto:admin@peechbuilder.com" class="hover:text-orange-400">admin@peechbuilder.com</a></li>
          <li><a href="tel:+919779538704" class="hover:text-orange-400">+91 97795 38704</a></li>
          <li class="leading-6 text-white/65">8057FF, Sector 125, Sunny Enclave,<br>Kharar (Rupnagar), Punjab 140301, India</li>
        </ul>
      </div>
    </div>

    <div class="relative border-t border-white/10">
      <div class="container-site flex flex-col gap-2 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {{ year }} Peechbuilder Technologies (OPC) Private Limited. All rights reserved.</p>
        <p>CIN: U62011PB2026OPC069666</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
