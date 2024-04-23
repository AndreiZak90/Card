import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("test master_card", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".card_block");

    const form = await page.$(".form");
    const input = await form.$(".input");

    await input.type("5353721377749273");
    await page.waitForSelector(".active_master_card");
    await page.click(".submit");
    await page.waitForSelector(".active_result_true");
  });

  test("test visa", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".card_block");

    const form = await page.$(".form");
    const input = await form.$(".input");

    await input.type("4346317004998392");
    await page.waitForSelector(".active_visa");
    await page.click(".submit");
    await page.waitForSelector(".active_result_true");
  });

  test("the test is not valid", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".card_block");

    const form = await page.$(".form");
    const input = await form.$(".input");

    await input.type("4346fghskk04998392");
    await page.click(".submit");
    await page.waitForSelector(".active_result_false");
  });

  afterAll(async () => {
    await browser.close();
  });
});
