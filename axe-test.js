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

  var webData = await import("/Users/jiagill/Documents/VSCode/IncluSite/CodaAda/all-domains-30-days.json", {
    assert: { type: "json" },
  });
  webData = webData.default;
  
  try {
    await client.connect();

    for (var i = 0; i < Object.keys(webData).length; i++) {
      await driver.get(webData[i].domain);
      const results = await new AxeBuilder(driver).analyze();
      console.log(results);

      await addData(client, results);
    }

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }

  await driver.quit();
}

main();

// Source(s): 
// https://www.npmjs.com/package/@axe-core/webdriverjs
