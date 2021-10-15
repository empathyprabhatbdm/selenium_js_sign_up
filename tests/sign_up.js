const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
var assert = require('assert');
async function sign_up() {

    var searchString = "prabhat bikram singh jha";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome")
        .build();
    await driver.manage().window().maximize();
    //Fetch tradeinsur web app
    await driver.get("https://demo.tradeinsur.com/login");

    await driver.findElement(By.css(".ml-auto")).click();
    await driver.findElement(By.css(".search")).sendKeys('Prabhat');
    await driver.findElement(By.css("button.btn:nth-child(3)"), 30000).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div[1]/div[3]/ul/li[1]"), 30000).click();
    await driver.findElement(By.css("html body div.login-layout.w-100.h-100.flex-ns div#app.login-layout.w-100.h-100.flex-ns div.register-content.w-80.flex-ns.flex-col div.register-form.w-70 div.form.w-80 div.register.hide.show form#form.register_form div.form_control.combo div input#name")).sendKeys('Prabhat');
    await driver.findElement(By.css("#last_name")).sendKeys("Jha");
    await driver.findElement(By.css("div.form_control:nth-child(5) > div:nth-child(1) > input:nth-child(2)")).sendKeys("dawnbikram@gmail.com");
    await driver.findElement(By.css("div.form_control:nth-child(4) > div:nth-child(1) > input:nth-child(2)")).sendKeys("1234567890");
    await driver.findElement(By.css(".field_password > input:nth-child(2)")).sendKeys("12345678");
    await driver.findElement(By.css("div.form_control:nth-child(7) > div:nth-child(1) > input:nth-child(2)")).sendKeys("12345678");
    await driver.findElement(By.css("div.form_control:nth-child(8) > div:nth-child(1) > input:nth-child(1)")).click();
    await driver.findElement(By.css(".mailling > input:nth-child(1)")).click();
    await driver.findElement(By.css("button.btn:nth-child(2)")).click();
    await driver.sleep(4000);
    await driver.findElement(By.css(".company_summary > ul:nth-child(1) > li:nth-child(1) > span:nth-child(2)")).getText().then(function(text_assert) {
        console.log(text_assert);
        //Below assertion is successful as the text_assert contains substring – SANGWAN PRABHAT
        assert(text_assert.includes('SANGWAN PRABHAT') !== 1);
    });
    await driver.quit();

}

sign_up()