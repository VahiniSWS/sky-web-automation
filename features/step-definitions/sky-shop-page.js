const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {expect, assert} = require("chai")
const {initDriver} = require('features/step-definitions/support/driverUtil.js')
const {By} = require("selenium-webdriver");
const {setDefaultTimeout} = require('@cucumber/cucumber');
const { elementsLocated } = require('selenium-webdriver/lib/until')

Before(function (){
console.log('*********Inside Before********')
driver = initDriver()
});

After(function (){
console.log('##########Outside After#######')   
driver.quit(); 
});
 
Given('I am on the home page', {timeout:60*1000}, async () => {
await driver.get('https://www.sky.com', { waitUntil: 'domcontentloaded' });
driver.manage().window.maximize();
driver.findElement(By.id("sp_message_iframe_474555")).isDisplayed();
element = driver.switchTo().frame(driver.findElement(By.css("sp_message_iframe_474555")), { waitUntil: 'domcontentloaded' });
await driver.findElement(By.css(".sp_message-accept-button")).submit();
});
  /*
  --To abort the cookies 

public async gotoPage(): Promise<void> {
    await page.route(new RegExp('.*privacy-mgmt.*'), route => {
      route.abort();
    });
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  }
  */


 When('I navigate to ‘Deals’', function () {
    driver.findElement(By.xpath("//a[contains(text(),'Deals')]").click());
   });

 Then('The user should be on the {string} page', function (string) {
 const newBaseURL = driver.currentURL;
 Assert.assertEquals(newBaseURL,"https://www.sky.com/deals/tvandbroadband");
 });

 Given('I am on the {string} page', function (string) {   
await driver.get('https://www.sky.com/deals', { waitUntil: 'domcontentloaded' });   
driver.findElement(By.xpath("//div[@class='DealsFilter__ListWrapper-w2pnut-0 cqoSfD']//button[@class='Button-sc-1nypadi-0 dzgufN']")).click();
 });

Then('I see a list of deals with a price to it', function () {
  let actualText1 = driver.findElement(By.xpath("/span[@id='price.offer.blt842c920bfe4270ca']")).getText().Then(function(value){
return value;
}); 
let actualText2= driver.findElement(By.xpath("//span[@id='price.offer.blt8bd7cfb7bb3cf993']")).getText().Then(function(value){
  return value;
  }); 
let actualText3 = driver.findElement(By.xpath("//span[@id='price.offer.blt6fd199dca4c4855d']")).getText().Then(function(value){
    return value;
    }); 
assert.strictEqual(todoText, "£26");
assert.strictEqual(todoText, "£41");
assert.strictEqual(todoText, "£46");
});

 When('I try to sign in with invalid credentials', function () {
  driver.findElement(By.xpath("//a[@class='tab-focus sign-in-link']")).click();
  driver.findElement(By.xpath("//input[@id='username']")).sendKeys("vahini.l@sky.uk");
  driver.findElement(By.xpath("//span[@class='Buttonstyles__ButtonLabel-sc-1baq2ha-1 styledElement-sc-501xix-1 cLluLE']")).click();
});
       
Then('I should see a box with the text ‘Create your My Sky password’', function () {    
 let actualText = driver.findElement(By.xpath("//h1[@class='CardTitle__CardTitleH1-sc-14bi1sz-0 styledElement-sc-501xix-1 ePwemc']")).getText().Then(function(value){
return value;
}); 
assert.strictEqual(todoText, "Create your My Sky password");
});
