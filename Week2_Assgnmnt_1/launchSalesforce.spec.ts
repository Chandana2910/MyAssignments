import { chromium, test} from "@playwright/test";
test("To launch salesforce browser", async () => {
    // step1: launching the required browser in headless mode
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome"});
    // step2. create new browser context
    const browserContext = await browserInstance.newContext();
    // step3: create a new page/tab
    const page = await browserContext.newPage();
    //step4: Loaded the url using goto()
    await page.goto("https://login.salesforce.com/")
    // step-5: Enter username and password
    await page.locator(`#username`).fill("chandana@raghava.io")
    await page.locator('#password').fill('12345')
    await page.locator(`#Login`).click();
    // wait for 10 seconds
    await page.waitForTimeout(10000)
    // Print the page title and URL 
    const titleOfPage = await page.title()
    const currentURL = await page.url()
    console.log(`the landing page title is ${titleOfPage}`)
    console.log(`the current URL is ${currentURL}`)
});