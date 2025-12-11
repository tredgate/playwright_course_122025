// tests/
// tags_tests.spec.ts
import { test } from "@playwright/test";

test.describe(
  "Tagged Describe",
  {
    tag: "@describeTag",
  },
  () => {
    test("Tagged Describe Test 1", async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool");
    });

    test("Tagged Describe Test 2", async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool");
    });
  }
);

test.describe("Untagged Describe", () => {
  test(
    "Untagged Describe, tagged Test",
    {
      tag: "@testTag",
    },
    async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool");
    }
  );

  test("Untagged Describe, untagged Test", async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool");
  });
});
