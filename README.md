# HTMX Wrapper Vue

## Overview

`HTMX Wrapper Vue` is a Vue component that allows you to integrate [HTMX](https://htmx.org/) into your Vue.js applications. It ensures that HTMX is aware of any DOM changes made by Vue, enabling you to sprinkle in some HTMX functionality for server-side rendering.

## Features

- **Seamless Integration:** Easily integrate HTMX into your existing Vue.js applications.
- **Reactive Updates:** HTMX will be notified of any DOM changes made by Vue, ensuring accurate updates.
- **Server-Side Rendering:** Leverage HTMX to perform server-side rendering of HTML within your Vue components.
- **Islands Of Non-Reactivity** Islands of reactivity with Alpine.js in your HTMX app is cool, but you're already stuck with a Vue SPA 💸

## Installation

You can install the `HTMX Wrapper Vue` via npm:

```bash
npm install @delsehi/htmxwrappervue
```

Or do what I would've done: copy the file `lib/src/HtmxWrapper.vue` into your own project. 

## Usage

First, import the `HTMX Wrapper Vue` component in your Vue component:

```javascript
import HtmxWrapper from "@delsehi/htmxwrappervue";
```

Then, use the `HTMX Wrapper Vue` component to wrap any part of your template where you want to use HTMX:

```vue
<template>
  <div>
    <h1>My Vue App with HTMX</h1>
    <HtmxWrapper>
      <!-- Add a base div if you're not serving your Vue app from your server :) -->
      <base href="http://localhost:3000/your/api" />
      <div
        hx-get="/some-endpoint"
        hx-trigger="click"
        hx-swap="innerHTML"
        hx-target="#outsideWrapper"
      >
        Click me to load content from the server!
      </div>
    </HtmxWrapper>

    <div id="outsideWrapper">
      A target does not have to be withing the wrapper. HX-attributes swapped
      inside here should also work! :)
    </div>
  </div>
</template>

<script setup lang="ts">
import HtmxWrapper from "@delsehi/htmxwrappervue";
</script>
```
