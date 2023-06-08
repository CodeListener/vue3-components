<template>
  <button class="bg-red">
    <slot />
  </button>
</template>
<script setup lang="ts">
import "uno.css";
defineOptions({
  name: "ButtonSfc",
});
</script>
