require("dotenv").config();
const {MongoClient} = require("mongodb");

async function findURLData(client, URL) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
                             .findOne({url : URL});
    return data;
}

async function searchData(client, string) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
                             .find({url : {$regex: string}});
    return data.toArray();
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
    // var test_url_axe = "tools.usps.com";
    var test_query = "usps";
    try {
        await client.connect();

        // var url_data = await findURLData(client, test_url_axe);  
        var query_data = await searchData(client, test_query);  

        // console.log(url_data);
        console.log(query_data);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
