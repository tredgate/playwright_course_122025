// tests/
// api_asserts.spec.ts

import { expect, test } from "@playwright/test";

test("Assert Response Status 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  expect(response.status(), "Response Status is 200").toBe(200);
});

test("Assert Header Content-Type", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/1234"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType, "Response Header Content-Type have Value").toEqual(
    "application/json; charset=utf-8"
  );
});

test("Assert Response Body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/1234"
  );
  const responseBody = await response.json();
  // * Kontrola, že body obsahuje property (klíč)
  expect(responseBody, "Response Body have Property createdAt").toHaveProperty(
    "createdAt"
  );

  // * Kontrola, že userId je číslo
  expect(typeof responseBody.userId, "body.userId is a Number").toBe("number");

  // * Kontrola hodnoty dat
  expect(responseBody.email, "body.email have Value").toBe(
    "Tiburcius63@example.org"
  );
});
