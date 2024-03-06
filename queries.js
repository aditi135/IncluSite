require("dotenv").config();
const {MongoClient} = require("mongodb");

async function findWebsiteAxeCore(client, url) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
                               .findOne({url : url});
    return result;
}

async function findLeastViolations(client) {
    //
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
    var test_url_axe = "https:\/\/www.noaa.gov\/";
    try {
        await client.connect();
        const result = await findWebsiteAxeCore(client, test_url_axe);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
