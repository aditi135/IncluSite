require("dotenv").config();
const {MongoClient} = require("mongodb");

async function findWebsiteAxeCore(client, url) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
                               .findOne({statistics : {pageurl : url}});
    return result;
}

async function findWebsiteWAVE(client, url) {
    const result = await client.db(process.env.DB_NAME_WAVE).collection(process.env.COLLECTION_NAME_WAVE)
                               .findOne({statistics : {pageurl : url}});
    return result;
}

// putting data into MongoDB database
async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);

    //  //formatting data for websites
    // const webData = await import(ALL_DOMAINS, {
    //     assert: { type: "json" },
    // }).default;

    try {
        await client.connect();
        const result = await findWebsiteWAVE(client, "osha.gov")
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
