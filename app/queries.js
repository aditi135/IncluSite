require("dotenv").config();
// const {MongoClient} = require("mongodb");

// async function findDataByURL(client, URL) {
//     const data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
//                              .findOne({url : URL});
//     return data;
// }

// async function searchData(client, string) {
//     var data = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME_AXE_UPDATED)
//                              .find({url : {$regex: string}});
//     data = await data.toArray();
//     data.sort(function(a, b) {
//         a_score = a.pass_count / (a.pass_count + a.incomplete_count + a.violation_count); // DECISION: prioritize GENERAL or FILTERED accessibility? maybe let them pick?
//         b_score = b.pass_count / (b.pass_count + b.incomplete_count + b.violation_count);
//         return b_score - a_score;
//     });
//     return data;
// }

export function filterData(search_results, filters = []) {
  search_results.sort(function (a, b) {
    let a_score = 0;
    let b_score = 0;
    if (filters.length == 0) {
      a_score =
        a.pass_count / (a.pass_count + a.incomplete_count + a.violation_count);
      b_score =
        b.pass_count / (b.pass_count + b.incomplete_count + b.violation_count);
    }
    for (var i = 0; i < filters.length; i++) {
      try {
        if (a[filters[i]] == "pass") {
          a_score +=
            1 / (a.pass_count + a.incomplete_count + a.violation_count);
        } else if (a[filters[i]] == "violation") {
          a_score -=
            1 / (a.pass_count + a.incomplete_count + a.violation_count);
        }
      } catch {}
      try {
        if (b[filters[i]] == "pass") {
          b_score +=
            1 / (b.pass_count + b.incomplete_count + b.violation_count);
        } else if (b[filters[i]] == "violation") {
          b_score -=
            1 / (b.pass_count + b.incomplete_count + b.violation_count);
        }
      } catch {}
    }
    return b_score - a_score;
  });
  return search_results;
}

export function getScore(data, filters = []) {
  let score = 0;
  if (filters.length == 0) {
    score =
    data.pass_count / (data.pass_count + data.incomplete_count + data.violation_count);
    return Math.round(score * 100) + "%";
  }
  let count = 0;
  for (var i = 0; i < filters.length; i++) {
    try {
      if (data[filters[i]] == "pass") {
        score += 1;// / (filters.length);
      } else if (a[filters[i]] == "violation") {
        score -= 1;// / (filters.length);
      }
      count++;
    } catch {}
  }
  if (count == 0) {
    return "No data";
  }
  return Math.round(score * 100) + "%";
}

// async function connectToDb(query, filters=[]) {
//     console.log(query);
//     console.log(filters);
//     const client = new MongoClient(process.env.MONGO_DB_URI);
//     try {
//         await client.connect();

//         var query_data = await searchData(client, query);
//         query_data = await filterData(query_data, filters);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
//     return query_data;
// }
