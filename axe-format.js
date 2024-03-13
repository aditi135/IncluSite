// formatting existing axe-core data into new collection
require("dotenv").config();

const { MongoClient } = require("mongodb");

async function addData(client, newData) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED).insertOne(newData);
    console.log(`New data added with ID ${result.insertedId}`)
}

async function formatAxeData(client, url) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
                       .findOne({url : url});
    var result = JSON.parse("{}");
    result.url = url;
    result.passes_count = data.passes.length;
    result.incompletes_count = data.incomplete.length;
    result.violations_count = data.violations.length;
    result.list_of_elems = []
    for (var i = 0; i < result.passes_count; i++) {
        // .replaceAll used because JSON doesn't support "-"
        result[data.passes[i].id.replaceAll("-", "_")] = "pass";
        result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
    }
    for (var i = 0; i < result.incompletes_count; i++) {
        result[data.incomplete[i].id.replaceAll("-", "_")] = "incomplete";
        result[data.violations[i].id.replaceAll("-", "_")].type = data.violations[i].impact;
        result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
    }
    for (var i = 0; i < result.violations_count; i++) {
        result[data.violations[i].id.replaceAll("-", "_")] = "violation";
        result[data.violations[i].id.replaceAll("-", "_")].type = data.violations[i].impact;
        result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
    }
    return result;
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
  
    try {
      await client.connect();
      // const results = await new AxeBuilder(driver).analyze();
      // await addData(client, results);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
