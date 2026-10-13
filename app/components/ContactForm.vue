<template>
  <div v-if="status === 'sent'" class="flex min-h-[420px] flex-col items-center justify-center text-center">
    <div class="grid h-16 w-16 place-items-center rounded-full bg-orange-100 text-orange">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
    </div>
    <h3 class="mt-6 text-2xl font-bold text-navy">Thanks, {{ sentName }}!</h3>
    <p class="mt-3 max-w-sm text-muted">Your message is with our team. We usually reply within one business day.</p>
    <button type="button" class="btn-ghost mt-8" @click="reset">Send another message</button>
  </div>

  <form v-else class="grid gap-5" novalidate @submit.prevent="submit">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="name" class="label">Full name <span class="text-orange">*</span></label>
        <input id="name" v-model="form.name" type="text" class="field" autocomplete="name" required placeholder="Your name">
      </div>
      <div>
        <label for="email" class="label">Email <span class="text-orange">*</span></label>
        <input id="email" v-model="form.email" type="email" class="field" autocomplete="email" required placeholder="you@company.com">
      </div>
      <div>
        <label for="phone" class="label">Phone</label>
        <input id="phone" v-model="form.phone" type="tel" class="field" autocomplete="tel" placeholder="+91">
      </div>
      <div>
        <label for="company" class="label">Company</label>
        <input id="company" v-model="form.company" type="text" class="field" autocomplete="organization" placeholder="Optional">
      </div>
    </div>

    <div>
      <label for="service" class="label">What do you need?</label>
      <select id="service" v-model="form.service" class="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235B6778%22 stroke-width=%223%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10">
        <option value="">Choose one (optional)</option>
        <option v-for="s in services" :key="s">{{ s }}</option>
      </select>
    </div>

    <div>
      <label for="message" class="label">Tell us about your project <span class="text-orange">*</span></label>
      <textarea id="message" v-model="form.message" rows="5" class="field resize-y" required placeholder="What are you building, and where are you stuck?" />
    </div>

    <!-- Honeypot: hidden from people, tempting to bots -->
    <div class="absolute -left-[9999px]" aria-hidden="true">
      <label for="website">Website</label>
      <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off">
    </div>

    <p v-if="error" class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{{ error }}</p>

    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-[13px] text-muted">We only use your details to reply to you.</p>
      <button type="submit" class="btn-primary min-w-[180px]" :disabled="status === 'sending'">
        <svg v-if="status === 'sending'" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".3" stroke-width="3" /><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const services = ['Mobile app', 'Web platform', 'UI/UX design', 'Backend & APIs', 'Cloud & DevOps', 'Ongoing support', 'Something else']

const blank = () => ({ name: '', email: '', phone: '', company: '', service: '', message: '', website: '' })
const form = reactive(blank())
const status = ref<'idle' | 'sending' | 'sent'>('idle')
const error = ref('')
const sentName = ref('')

async function submit() {
  error.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Please fill in your name, email and message.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    error.value = 'Please enter a valid email address.'
    return
  }

  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    sentName.value = form.name.trim().split(' ')[0]!
    status.value = 'sent'
  } catch (e: any) {
    error.value = e?.data?.statusMessage || e?.statusMessage || 'Something went wrong. Please email admin@peechbuilder.com.'
    status.value = 'idle'
  }
}

function reset() {
  Object.assign(form, blank())
  status.value = 'idle'
}
</script>
