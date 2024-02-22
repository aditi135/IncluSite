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
  
  try {
    await client.connect();
    await driver.get("https://www.noaa.gov/");
    const results = await new AxeBuilder(driver).analyze();
    console.log(results);

    await addData(client, JSON.parse("{}"));
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }

  await driver.quit();
}

main();
