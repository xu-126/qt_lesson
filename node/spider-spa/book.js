const puppeteer = require('puppeteer');
const url = 'https://juejin.im/books';
const $ = require('cheerio');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url,{ waitUntil : 'networkidle2'});// 只有两个网络连接时触发（至少500毫秒后）
    const html = await page.content();
    // $('.text','')  cheerio规定第一个选择器的作用域
    const books = $('.info',html);
    books.each(function() {
        const price = $('.price-text',this).text();
        console.log(price);
    })
}
run();