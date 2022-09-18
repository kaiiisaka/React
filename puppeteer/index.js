const puppeteer = require('puppeteer');

(async function(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://my-deploy-228.herokuapp.com/login')

    await page.waitForSelector('.MyButton_myBtn__1-x89')
    await page.click('.MyButton_myBtn__1-x89');

    await page.viewport({
        width: 4200,
        height: 1600
    })

    await page.waitForSelector('.post')

    await page.screenshot({path: 'screenshot1.png'})

    await browser.close();
})();