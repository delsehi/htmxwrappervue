<script setup lang="ts">
import HtmxWrapper from "@delsehi/htmxwrappervue";
</script>

<template>
  <main>
    <h1>HTMX Wrapper for Vue</h1>

    <HtmxWrapper>
      <button id="btn1" hx-get="/api/1" hx-target="#div1">Button 1</button>
    </HtmxWrapper>

    <div id="div1">
      Click on button 1 to replace this. This should be replace this div.
    </div>
  </main>
</template>
