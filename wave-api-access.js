// sets up .env file
require('dotenv').config();

// sets up MongoDB
const {MongoClient} = require("mongodb");

// gets data from API
async function getAPI(url) {
    var response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    return data;
}

// ads data to given database
async function addData(client, newData) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME).insertOne(newData);
    console.log(`New data added with ID ${result.insertedId}`)
}

// putting data into MongoDB database
async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);

    //formatting data for websites
    var webData = await import(process.env.ALL_DOMAINS_30_DAYS, {
        assert: { type: "json" },
    });
    webData = webData.default;

    var credNum = 4;
    var fedURL = "";
    var reportType = 1;
    console.log(process.env.API_KEY)

    try {
        await client.connect();

        for (var i = 0; i < credNum; i++) { // TBD: handle how many credits each request takes
            fedURL = webData[i].domain;
            url = `https://wave.webaim.org/api/request?key=${process.env.API_KEY}&url=${fedURL}&reporttype=${reportType}`;
            reportType++;
            console.log(url);

            var newData = await getAPI(url);
            await addData(client, newData);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
  