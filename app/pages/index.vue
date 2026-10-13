<template>
  <div>
    <SiteHeader />

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_10%,#FEF5EE_0%,transparent_70%),radial-gradient(50%_50%_at_0%_100%,#F3F6F9_0%,transparent_70%)]" />
        <LogoMark class="pointer-events-none absolute -right-24 top-24 hidden h-[620px] w-auto opacity-[0.05] lg:block" />

        <div class="container-site relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span class="eyebrow">From ideas to impact</span>
            <h1 class="mt-6 text-[42px] font-extrabold leading-[1.05] text-navy sm:text-6xl lg:text-[68px]">
              We turn ideas into products people <span class="text-orange">actually use.</span>
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-8 text-muted">
              Peechbuilder Technologies designs, builds and runs digital products: mobile apps, web platforms and the cloud systems behind them. One team, from first sketch to launch day and beyond.
            </p>
            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" class="btn-primary">
                Start a project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#products" class="btn-ghost">See what we've built</a>
            </div>
          </div>

          <!-- Visual: a product build board -->
          <div class="relative mx-auto w-full max-w-md lg:max-w-none">
            <div class="rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_80px_-30px_rgba(20,35,58,0.35)]">
              <div class="flex items-center justify-between">
                <p class="text-sm font-semibold text-navy">Product roadmap</p>
                <span class="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange">In progress</span>
              </div>
              <div class="mt-6 space-y-4">
                <div v-for="(step, i) in roadmap" :key="step.label" class="flex items-center gap-4">
                  <span
                    class="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold"
                    :class="step.done ? 'bg-navy text-white' : i === doneCount ? 'bg-orange text-white' : 'bg-navy-50 text-muted'"
                  >
                    <svg v-if="step.done" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    <template v-else>{{ i + 1 }}</template>
                  </span>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-baseline justify-between gap-3">
                      <p class="truncate text-[15px] font-semibold text-navy">{{ step.label }}</p>
                      <p class="text-xs text-muted">{{ step.progress }}%</p>
                    </div>
                    <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-50">
                      <div class="h-full rounded-full" :class="step.done ? 'bg-navy' : 'bg-orange'" :style="{ width: step.progress + '%' }" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-12 -left-6 hidden rounded-2xl bg-navy px-5 py-4 text-white shadow-xl sm:block">
              <p class="text-xs uppercase tracking-[0.18em] text-white/60">Shipping to</p>
              <p class="mt-1 font-display text-lg font-bold">iOS · Android · Web</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pillars -->
      <section class="border-y border-line bg-navy-50">
        <div class="container-site grid grid-cols-2 md:grid-cols-4">
          <div v-for="(p, i) in pillars" :key="p.title" class="border-line px-2 py-8 md:px-6" :class="[i % 2 ? 'border-l pl-5' : '', i > 1 ? 'border-t md:border-t-0' : '', i === 2 ? 'md:border-l md:pl-6' : '']">
            <p class="font-display text-lg font-bold text-navy">{{ p.title }}</p>
            <p class="mt-1 text-sm leading-6 text-muted">{{ p.text }}</p>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section id="services" class="py-24 md:py-32">
        <div class="container-site">
          <div class="max-w-2xl">
            <span class="eyebrow">What we do</span>
            <h2 class="section-title">Everything it takes to build and grow a digital product.</h2>
            <p class="mt-5 text-lg leading-8 text-muted">Bring us an idea, a half-built app, or a system that's struggling to scale. We'll take it the rest of the way.</p>
          </div>

          <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="s in services" :key="s.title" class="group rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_20px_50px_-25px_rgba(20,35,58,0.35)]">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white transition group-hover:bg-orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" v-html="s.icon" />
              </div>
              <h3 class="mt-6 text-xl font-bold text-navy">{{ s.title }}</h3>
              <p class="mt-3 text-[15px] leading-7 text-muted">{{ s.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Products -->
      <section id="products" class="bg-navy py-24 text-white md:py-32">
        <div class="container-site">
          <div class="max-w-2xl">
            <span class="eyebrow">Our products</span>
            <h2 class="mt-4 text-3xl font-bold md:text-[42px] md:leading-[1.15]">We build our own products, too.</h2>
            <p class="mt-5 text-lg leading-8 text-white/65">Running our own apps keeps us honest. Every lesson from shipping and supporting them goes into the work we do for clients.</p>
          </div>

          <div class="mt-14 grid overflow-hidden rounded-[28px] bg-navy-700 lg:grid-cols-2">
            <div class="p-8 md:p-12">
              <div class="flex items-center gap-3">
                <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#FF3F8E] to-[#8747FF] font-display text-xl font-extrabold">L</span>
                <div>
                  <p class="font-display text-2xl font-bold">Luvhere</p>
                  <p class="text-sm text-white/60">Privacy-first dating · iOS &amp; Android</p>
                </div>
              </div>
              <p class="mt-8 text-lg leading-8 text-white/80">
                Meet verified people for who they are. Luvhere hides photos and names until you both like each other, so connections start with personality.
              </p>
              <ul class="mt-8 space-y-3 text-[15px] text-white/75">
                <li v-for="f in luvhereFeatures" :key="f" class="flex gap-3">
                  <svg class="mt-1 shrink-0 text-orange-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  {{ f }}
                </li>
              </ul>
              <a href="https://luvhere.com" target="_blank" rel="noopener" class="btn mt-10 bg-white text-navy hover:bg-orange-50">
                Visit luvhere.com
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
              </a>
            </div>
            <div class="relative hidden min-h-[360px] items-center justify-center overflow-hidden bg-[#0B070D] lg:flex">
              <div class="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(255,63,142,0.35),transparent_70%),radial-gradient(40%_40%_at_70%_80%,rgba(135,71,255,0.35),transparent_70%)]" />
              <div class="relative w-[230px] rounded-[36px] border border-white/10 bg-[#151019] p-4 shadow-2xl">
                <div class="mx-auto h-1.5 w-16 rounded-full bg-white/15" />
                <div class="mt-5 aspect-[3/4] rounded-[22px] bg-gradient-to-br from-[#2a1d33] to-[#1D1621] p-4">
                  <div class="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                </div>
                <p class="mt-4 text-center text-sm font-semibold">Photo hidden until you match</p>
                <div class="mt-4 flex justify-center gap-3">
                  <span class="h-11 w-11 rounded-full border border-white/15" />
                  <span class="h-11 w-11 rounded-full bg-gradient-to-br from-[#FF3F8E] to-[#8747FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section id="process" class="py-24 md:py-32">
        <div class="container-site">
          <div class="max-w-2xl">
            <span class="eyebrow">How we work</span>
            <h2 class="section-title">A clear path from idea to launch.</h2>
            <p class="mt-5 text-lg leading-8 text-muted">No black boxes. You see working software early and often, and you always know what's next.</p>
          </div>

          <ol class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <li v-for="(step, i) in process" :key="step.title" class="relative rounded-3xl border border-line bg-navy-50 p-7">
              <span class="font-display text-5xl font-extrabold text-orange/25">0{{ i + 1 }}</span>
              <h3 class="mt-4 text-xl font-bold text-navy">{{ step.title }}</h3>
              <p class="mt-3 text-[15px] leading-7 text-muted">{{ step.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="pb-24 md:pb-32">
        <div class="container-site">
          <div class="grid items-center gap-12 overflow-hidden rounded-[32px] bg-orange-50 p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span class="eyebrow">About us</span>
              <h2 class="section-title">A product studio from Punjab, building for everywhere.</h2>
              <p class="mt-6 text-lg leading-8 text-muted">
                Peechbuilder Technologies (OPC) Private Limited is a technology company based in Kharar, Punjab. We started with a simple belief: good ideas deserve good engineering. We work closely with founders and businesses, treat their product like our own, and stay on after launch to help it grow.
              </p>
            </div>
            <ul class="grid gap-4">
              <li v-for="v in values" :key="v.title" class="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-20px_rgba(20,35,58,0.4)]">
                <p class="font-display text-lg font-bold text-navy">{{ v.title }}</p>
                <p class="mt-1.5 text-[15px] leading-6 text-muted">{{ v.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="border-t border-line bg-navy-50 py-24 md:py-32">
        <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <span class="eyebrow">Contact</span>
            <h2 class="section-title">Let's build something together.</h2>
            <p class="mt-5 text-lg leading-8 text-muted">Tell us a little about your idea. We'll get back within one business day with next steps, no strings attached.</p>

            <ul class="mt-10 space-y-6">
              <li v-for="c in contacts" :key="c.label" class="flex gap-4">
                <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="c.icon" />
                </span>
                <div>
                  <p class="text-sm font-medium text-muted">{{ c.label }}</p>
                  <a v-if="c.href" :href="c.href" class="text-[17px] font-semibold text-navy hover:text-orange">{{ c.value }}</a>
                  <p v-else class="text-[17px] font-semibold leading-7 text-navy">{{ c.value }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_80px_-40px_rgba(20,35,58,0.35)] md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const roadmap = [
  { label: 'Discovery & scope', progress: 100, done: true },
  { label: 'UX & visual design', progress: 100, done: true },
  { label: 'App & API build', progress: 68, done: false },
  { label: 'Launch & growth', progress: 12, done: false },
]
const doneCount = roadmap.filter(s => s.done).length

const pillars = [
  { title: 'Products', text: 'Apps and platforms built to last.' },
  { title: 'Technology', text: 'Modern, proven, maintainable stacks.' },
  { title: 'People', text: 'A team that owns the outcome.' },
  { title: 'Possibilities', text: 'Room to grow after launch.' },
]

const services = [
  { title: 'Mobile apps', text: 'Native-quality iOS and Android apps from a single codebase, ready for the App Store and Google Play.', icon: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>' },
  { title: 'Web platforms', text: 'Fast websites, dashboards and SaaS products that look sharp and stay quick as you grow.', icon: '<rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/>' },
  { title: 'UI/UX design', text: 'Research-led product design: flows, wireframes and polished interfaces your users understand instantly.', icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>' },
  { title: 'Backend & APIs', text: 'Secure, well-documented APIs, databases, real-time features, payments and third-party integrations.', icon: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>' },
  { title: 'Cloud & DevOps', text: 'AWS infrastructure, CI/CD pipelines, monitoring and cost-aware hosting that just keeps running.', icon: '<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12 3.5 3.5 0 0 0 6 19Z"/>' },
  { title: 'Support & growth', text: 'Ongoing maintenance, performance work and new features after launch, so your product keeps improving.', icon: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>' },
]

const luvhereFeatures = [
  'Verified profiles for a safer community',
  'Photos and names revealed only after a mutual like',
  'Built end to end by our team: app, backend and cloud',
]

const process = [
  { title: 'Discover', text: 'We dig into your goals, users and constraints, then agree on a focused scope and timeline.' },
  { title: 'Design', text: 'Wireframes, then high-fidelity screens you can click through before a line of code is written.' },
  { title: 'Build', text: 'Short sprints with regular demos. You see real, working software every step of the way.' },
  { title: 'Launch & grow', text: 'We ship to the stores and the web, monitor everything, and keep improving with you.' },
]

const values = [
  { title: 'Ownership', text: 'We care about your outcome, not just the ticket list.' },
  { title: 'Transparency', text: 'Honest estimates, clear updates, no surprises.' },
  { title: 'Craft', text: 'Clean code and thoughtful design that hold up over time.' },
]

const contacts = [
  { label: 'Email', value: 'admin@peechbuilder.com', href: 'mailto:admin@peechbuilder.com', icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>' },
]
</script>
