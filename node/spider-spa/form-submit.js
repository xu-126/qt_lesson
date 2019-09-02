const puppeteer = require('puppeteer');
async function formSubmit() {
    // async await 
    // await 后面接promise
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://github.com/login');
    await page.waitFor(2000);
    await page.type('#login_field','xu-126');
    await page.type('#password','xujiaying123');
    await page.click('input[type="submit"]');
}
formSubmit();