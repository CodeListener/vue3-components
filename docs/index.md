---
layout: home

hero:
  name: VuePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---

<script setup>
  import { ref } from 'vue';
  const data = ref({
    '2023-04-05': {
      color: '#005dd6',
      value: 5.19,
    },
    '2023-04-04': {
      color: '#1e80ff',
      value: 5.19,
    },
    '2023-04-03': {
      color: '#1e80ff',
      value: 5.2,
    },
    //   ...
  })
</script>
<ActiveCalendarChart :value="data" />
<ActiveCalendarChart :date="2022" :value="data" />
<ActiveCalendarChart
  :date="{ start: '2022-04-01', end: '2022-10-10' }"
  :value="data"
/>
