require("dotenv").config();
const {MongoClient} = require("mongodb");

async function findWebsiteAxeCore(client, url) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
                               .findOne({url : url});
    return result;
}

async function findLeastViolations(client, url) {
    // currently just prints a summary; can use numbers as wanted later
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
                       .findOne({url : url});
    var incser = 0;
    var incmod = 0;
    var vioser = 0;
    var viomod = 0;
    for (var i = 0; i < data.incomplete.length; i++) {
        if (data.incomplete[i].impact == "serious") {
            incser++;
        } else if (data.incomplete[i].impact == "moderate") {
            incmod++;
        }
    }
    for (var i = 0; i < data.violations.length; i++) {
        if (data.violations[i].impact == "serious") {
            vioser++;
        } else if (data.violations[i].impact == "moderate") {
            viomod++;
        }
    }
    console.log();
    console.log("-------------------------------------------");
    console.log("               TEST RESULTS");
    console.log("-------------------------------------------");
    console.log("Passes: " + data.passes.length);
    console.log("Incompletes: " + data.incomplete.length);
    console.log("    Moderate: " + incmod);
    console.log("    Serious: " + incser);
    console.log("Violations: " + data.violations.length);
    console.log("    Moderate: " + viomod);
    console.log("    Serious: " + vioser);
    console.log("-------------------------------------------");
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
    var test_url_axe = "https:\/\/www.noaa.gov\/";
    try {
        await client.connect();
        // const result = await findWebsiteAxeCore(client, test_url_axe);
        // console.log(result);
        await findLeastViolations(client, test_url_axe);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
