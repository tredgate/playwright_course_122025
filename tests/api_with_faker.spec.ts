// tests/
// api_with_faker.spec.ts

import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("POST Request with Generated Data", async ({ request }) => {
  const email = faker.internet.email();
  const username = faker.internet.username();
  const password = "123456";

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username,
        password: password,
        email: email,
      },
    }
  );
});
