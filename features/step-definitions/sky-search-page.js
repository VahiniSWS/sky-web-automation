const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {expect, assert} = require("chai")
const {initDriver} = require('features/step-definitions/sky-search-page.js')
const {By} = require("selenium-webdriver");
const {setDefaultTimeout} = require('@cucumber/cucumber');
const { elementsLocated } = require('selenium-webdriver/lib/until')

Before(function (){
console.log('*********Inside Before********')
driver = initDriver()
});

After(function (){
console.log('##########Outside After#######')   
sdriver.quit(); 
});

When('I search ‘sky’ in the search bar', function () {
  driver.findElement(By.xpath("//button[@id='masthead-search-toggle']//*[name()='svg']")).click()
driver.findElement(By.xpath("//input[@aria-label='Enter text to search for content on sky.com. Results will display below as you type. Press enter for all search results.']")).sendKeys("sky");
});

Then('I should see an editorial section', function () {
 let editorial = driver.findElement(By.id("search-results-container"));
  Assert.assertEquals(true, editorial.isDisplayed())
  console.log("Editorial section is displayed - Asertion Passed");
});

  