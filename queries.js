require("dotenv").config();
const {MongoClient} = require("mongodb");

async function findURLData(client, URL) {
    const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
                             .findOne({url : URL});
    return data;
}

async function searchData(client, string) {
    const raw_results = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
                             .find({url : {$regex: string}});
    const search_results = raw_results.toArray();
    search_results.sort(function(a, b) {
        a_score = a.pass_count / (a.pass_count + a.incomplete_count + a.violation_count); // DECISION: prioritize GENERAL or FILTERED accessibility? maybe let them pick?
        b_score = b.pass_count / (b.pass_count + b.incomplete_count + b.violation_count);
        return b_score - a_score;
    });
    return search_results;
}

async function filterData(search_results, filters=[]) {
    search_results.sort(function(a, b) {
        a_score = 0;
        b_score = 0;
        for (var i = 0; i < filters.length; i++) {
            try {
                if (a[filters[i]] == "pass") {
                    a_score += 1 / (a.pass_count + a.incomplete_count + a.violation_count);
                } else if (a[filters[i]] == "violation") {
                    a_score -= 1 / (a.pass_count + a.incomplete_count + a.violation_count);
                }
            } catch {}
            try {
                if (b[filters[i]] == "pass") {
                    b_score += 1 / (b.pass_count + b.incomplete_count + b.violation_count);
                } else if (b[filters[i]] == "violation") {
                     b_score -= 1 / (b.pass_count + b.incomplete_count + b.violation_count);
                }
            } catch {}
        }
        return b_score - a_score;
    });
    return search_results;
}

async function main() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
    var test_query = "usps";
    try {
        await client.connect();

        var query_data = await searchData(client, test_query);  

        console.log(query_data);
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();

        console.log(query_data);
        query_data = filterData(query_data, ["color_contrast"]);


        // console.log(url_data);
        console.log(query_data);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
