import { expect, test } from "@playwright/test";

test("Exercise: API Asserts", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  expect(
    typeof responseBody.timestamp,
    "responseBody.timestamp type is a string"
  ).toEqual("string");
  expect(responseBody.id, "responseBody.id have value").toEqual(1);
});
