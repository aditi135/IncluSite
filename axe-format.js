// formatting existing axe-core data into new collection
require("dotenv").config();

const { MongoClient } = require("mongodb");

async function addData(client, newData) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED).insertOne(newData);
    console.log(`New data added with ID ${result.insertedId} with url ${newData.url}`)
}

var count = 0;
async function formatAxeData(client, URL) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
                       .findOne({url : {$regex : URL}});
    if (data == null) {
        return null;
    }
    var result = JSON.parse("{}");
    result.url = URL;
    result.url_dom = data.url;
    result.passes_count = data.passes.length;
    result.incompletes_count = data.incomplete.length;
    result.violations_count = data.violations.length;
    result.list_of_elems = []
    try {
        for (var i = 0; i < result.passes_count; i++) {
            // .replaceAll used because JSON doesn't support "-"
            result[data.passes[i].id.replaceAll("-", "_")] = "pass";
            result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
        }
        for (var i = 0; i < result.incompletes_count; i++) {
            // .replaceAll used because JSON doesn't support "-"
            result[data.incomplete[i].id.replaceAll("-", "_")] = "incomplete";//_" + data.incomplete[i].impact;
            result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
        }
        for (var i = 0; i < result.violations_count; i++) {
            // .replaceAll used because JSON doesn't support "-"
            result[data.violations[i].id.replaceAll("-", "_")] = "violation_";//" + data.incomplete[i].impact;
            result.list_of_elems.push(data.passes[i].id.replaceAll("-", "_"));
        }
    } catch (e) {
        count++;
        console.log(count);
        return null;
    }
    return result;
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);

    var webData = await import("/Users/jiagill/Documents/VSCode/IncluSite/CodaAda/all-domains-30-days.json", {
        assert: { type: "json" },
    });
    webData = webData.default;
  
    try {
        await client.connect();
        
        for (let i = 0; i < webData.length; i++) {
            const data = await formatAxeData(client, webData[i].domain);
            if (data == null) {
                continue;
            }
            await addData(client, data);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
