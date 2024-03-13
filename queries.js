require("dotenv").config();
const {MongoClient} = require("mongodb");

async function printSummary(client, url) {
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

async function formatAxeData(client, url) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
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
    var test_url_axe = "https:\/\/www.noaa.gov\/";
    try {
        await client.connect();
        // await printSummary(client, test_url_axe);
        var data = await formatAxeData(client, test_url_axe);  
        console.log(data);
        console.log(data["url"]);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
