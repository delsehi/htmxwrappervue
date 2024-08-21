import { test, expect } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("Use HTMX components on start page", async ({ page }) => {
  await page.goto("/");

  const button = page.locator("#btn1");
  await button.click();

  await expect(page.locator("#div2")).toHaveText(
    "This button is outside of the wrapper but still works."
  );

  const button2 = page.locator("#btn2");
  await button2.click();

  await expect(page.locator("#div3")).toHaveText("Done!");
});
