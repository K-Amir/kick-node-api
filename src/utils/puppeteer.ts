import puppeteer from "puppeteer";

export const makeHttpRequest = async <T>(url: string): Promise<T> => {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto(url);

  const object = await page.evaluate(() => {
    return JSON.parse(document.querySelector("body").innerText);
  });

  browser.close();

  return object;
};
