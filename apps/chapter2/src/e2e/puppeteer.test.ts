import puppeteer, { Browser } from "puppeteer";

describe("e2e test with puppeteer", () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  it("a search keyword will be on the page title in google.com", async () => {
    const page = await browser.newPage();
    await page.goto("https://google.com/ncr");

    await page.type('input[name="q"]', "puppeteer");
    await page.keyboard.press("Enter");

    await page.waitForNavigation({
      timeout: 50000,
      waitUntil: "networkidle0",
    });
    expect(await page.title()).toBe("puppeteer - Google Search");
  });
});
