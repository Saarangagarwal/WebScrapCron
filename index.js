const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer')
const cron = require('node-cron');
const express = require('express');

const app = express();

//Schedule tasks to be run on the server.
cron.schedule('10 1 * * *', function() {
    console.log('running cron job');
    puppet();
});

app.listen(process.env.PORT);

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your port is ${process.env.PORT}`);

//nodemailer transporter
const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    },
});

const EMAIL_SECRET = process.env.EMAILSECRET;

let value1;
let value2;

async function puppet () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // //kya80332@eoopy.com
    // //insta@qwerty123walmart
    // await page.goto('https://www.instacart.ca/');
    // //await page.type('input[name="nextgen-authenticate.all.postal_code"]', 'N2L3B8') ;

    // //await page.click('button[data-var="loginBtn"]');
    // //await page.click('[name="button"]')
    
    // const form = await page.$('#root > div > div.css-l6ct9h > div.css-1wfm2tp > div.css-8atqhb > form > p > span > button');
    // await form.evaluate( form => form.click() );

    // await page.type('input[name="nextgen-authenticate\.all\.log_in_email"]', 'kya80332@eoopy.com') ;
    // await page.type('input[name="nextgen-authenticate\.all\.log_in_password"]', 'insta@qwerty123walmart') ;

    // const form1 = await page.$('#root > div > div.css-l6ct9h > div.css-1wfm2tp > div.css-8atqhb > form > div:nth-child(6) > button');
    // //const form1 = await page.$('#root > div > div.css-l6ct9h > div.css-1wfm2tp > div.css-8atqhb > form > div:nth-child(7) > button');
    // await form1.evaluate( form1 => form1.click() );


    // // var time = 0;

    // // const timer =  setInterval(function() {
    // //     time += 1;
    // //     console.log(time + " seconds have passed");
    // //     if (time > 5) {
    // //         clearInterval(timer);
    // //     }
    // // }, 2000);
    
     
    // // await page.waitForNavigation()
    // //await page._frameManager._mainFrame.waitForNavigation();
    // await page.screenshot({path: 'test.png'});
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');

    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    // await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');

    // await page.goto('https://www.instacart.ca/store/items/item_792008452');
    // await page.waitForSelector('#react-views-container > div > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > div > div.col-md-5.itemModalHeader > div:nth-child(1) > div:nth-child(3) > div > div.item-price > span:nth-child(2)')
    // element = await page.$('#react-views-container > div > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > div > div.col-md-5.itemModalHeader > div:nth-child(1) > div:nth-child(3) > div > div.item-price > span:nth-child(2)')
    // value2 = await page.evaluate(el => el.textContent, element)
    // console.log("instacart: "+value2)
    // await page.screenshot({path: 'test1.png'});

    await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004SUS');
    await page.waitForSelector('#longscroll-subseries > div.backgroundColor.subseriesHeader.noeSpot > div.hero-column.hero-column-one > div.cta > div.cta-group-price > dl > dd')
    let element = await page.$('#longscroll-subseries > div.backgroundColor.subseriesHeader.noeSpot > div.hero-column.hero-column-one > div.cta > div.cta-group-price > dl > dd')
    value1 = await page.evaluate(el => el.textContent, element)
    console.log("SUS: " +value1)
    await page.screenshot({path: 'screenshot_SUS.png'});


    await page.goto('https://www.lenovo.com/ca/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T14-G1/p/20S0004RUS');
    await page.waitForSelector('#longscroll-subseries > div.backgroundColor.subseriesHeader.noeSpot > div.hero-column.hero-column-one > div.cta > div.cta-group-price > dl > dd')
    element = await page.$('#longscroll-subseries > div.backgroundColor.subseriesHeader.noeSpot > div.hero-column.hero-column-one > div.cta > div.cta-group-price > dl > dd')
    value2 = await page.evaluate(el => el.textContent, element)
    console.log("RUS: "+value2)
    await page.screenshot({path: 'screenshot_RUS.png'});

    await transporter.sendMail({
        to: process.env.TOEMAIL,
        subject: 'Cron Job Daily Update :)',
        html: `Hello ${process.env.MYNAME}, <br/><br/>
                Here is your daily update! <br/>
                SUS:  ${value1} <br/>
                RUS:  ${value2}

                <br/><br/>
                Regards, <br/>
                Your cron job!`
    })

    browser.close();
}
puppet();

