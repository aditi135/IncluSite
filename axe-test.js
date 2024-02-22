// const axecore = require("./axe-core/axe.js");
// console.log(axecore.getRules(["wcag2aa"]));

// source: https://www.npmjs.com/package/@axe-core/webdriverjs
require("dotenv").config();


const { AxeBuilder } = require("@axe-core/webdriverjs");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { MongoClient } = require("mongodb");

async function addData(client, newData) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME).insertOne(newData);
    console.log(`New data added with ID ${result.insertedId}`)
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);

    const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();
  await driver.get("https://www.noaa.gov/");

  try {
    const results = await new AxeBuilder(driver).analyze();
    addData(client, results);
  } catch (e) {
    console.log(e);
  }

  await driver.quit();
}

main();
