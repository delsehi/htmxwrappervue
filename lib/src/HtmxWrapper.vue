<script setup lang="ts">
import htmx from "htmx.org";
import { useCurrentElement } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

const observer = ref<MutationObserver>();

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

onMounted(() => {
  const current = useCurrentElement();
  if (current.value) {
    htmx.process(current.value as Element);

    const newObserver = new MutationObserver(() => {
      htmx.process(current.value as Element);
    });
    newObserver.observe(current.value as Node, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    observer.value = newObserver;
  }
});
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
