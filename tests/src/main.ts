import "./assets/main.css";
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { createApp } from "vue";
import App from "./App.vue";

const main = async () => {
  const worker = setupWorker(
    http.get("/api/1", () => {
      return HttpResponse.xml(
        `<div id="div2">This button is outside of the wrapper but still works.</div>
        <button id="btn2" hx-get="/api/2" hx-swap="outerHTML">Button 2</button>`
      );
    }),
    http.get("/api/2", () => {
      return HttpResponse.xml(`<div id="div3">Done!</div>`);
    })
  );

  await worker.start();

  createApp(App).mount("#app");
};

main();
