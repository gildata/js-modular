"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name listing-situation 挂牌情况
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};
// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};


/*

NSB_TS_FV.Modules.listingSituation = NSB_TS_FV.Modules.listingSituation || (() => console.log(`module testing!`));
// () => console.log(`module testing!`)


*/


NSB_TS_FV.Modules.listingSituation = NSB_TS_FV.Modules.listingSituation || ((url = ``, debug = false, uid = `default_dom_uid`) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                let data = json || [];
                const new_obj = {};
                // fixed order!
                const keys = ["total", "protocol", "market"];
                let listed_number = [],
                    new_add_listed_number = [],
                    waiting_number = [],
                    reporting_number = [];
                data.map(
                    (obj, i) => {
                        let temp_obj = {};
                        let key = obj["bz"];
                        switch (key) {
                            case "合计":
                                temp_obj = obj;
                                Object.assign(new_obj, {"total": temp_obj});
                                break;
                            case "协议":
                                temp_obj = obj;
                                Object.assign(new_obj, {"protocol": temp_obj});
                                break;
                            case "做市":
                                temp_obj = obj;
                                Object.assign(new_obj, {"market": temp_obj});
                                break;
                            default:
                                break;
                        }
                        if (debug) {
                            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                        }
                    }
                );
                if (debug) {
                    console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                }
                keys.map(
                    (key, i) => {
                        listed_number.push(new_obj[key]["gpjs"]);
                        // listed_number.push(new_obj["total"]["gpjs"]);
                        new_add_listed_number.push(new_obj[key]["xzjs"]);
                        waiting_number.push(new_obj[key]["dgpjs"]);
                        reporting_number.push(new_obj[key]["sbjs"]);
                    }
                );
                result_obj = {
                    listed_number,
                    new_add_listed_number,
                    waiting_number,
                    reporting_number
                };
            }
            // array
            NSB_TS_FV.Modules.listingSituation.showTable(result_obj, uid, false);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});


NSB_TS_FV.Modules.listingSituation.showTable = NSB_TS_FV.Modules.listingSituation.showTable || (
    (datas = {}, uid = ``, debug = false) => {
        console.log(`datas = \n`, JSON.stringify(datas, null, 4));
        const {
            listed_number,
            new_add_listed_number,
            waiting_number,
            reporting_number
        } = datas;
        let order_arr = [listed_number, new_add_listed_number, waiting_number, reporting_number];
        let trs = document.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-listing-situation"]`);
        /*
            // data-table-tr & data-table-tbody-tr ??? can not duplication ??? data-*-name
            let trs = document.querySelectorAll(`[data-table-tr="ntb-table-tbody-tr-listing-situation"]`);
            // []
            let trs = document.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-listing-situation"]`);
            // (3) [tr, tr, tr]
        */
        for (let i = 0; i < trs.length; i++) {
            // const tr1_tds = trs[i].children;
            let tds = ``;
            tds = trs[i].querySelectorAll(`[data-td-value="ntb-td-value"]`);
            for (let ii = 0; ii < tds.length; ii++) {
                tds[ii].innerHTML = order_arr[i][ii];
            }
        }
    }
);



// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `otcfast08`;
    const url = `http://10.1.5.202/webservice/fastview/otc/${sf_num}/`;
    let uid = `newly_added_listing_hs_container`;
    let hs_datas = NSB_TS_FV.Modules.listingSituation(url, false, uid);
}, 0);




































/*

const data = [
    {
        "gpjs": 11713,
        "xzjs": 3,
        "dgpjs": 85,
        "sbjs": 476,
        "bz": "合计"
    },
    {
        "gpjs": 10268,
        "xzjs": 3,
        "dgpjs": 0,
        "sbjs": 0,
        "bz": "协议"
    },
    {
        "gpjs": 1383,
        "xzjs": 0,
        "dgpjs": 0,
        "sbjs": 0,
        "bz": "做市"
    }
];


const new_obj = {
   "total": {
       "gpjs": 11713,
       "xzjs": 3,
       "dgpjs": 85,
       "sbjs": 476,
       "bz": "合计"
   },
   "protocol": {
       "gpjs": 10268,
       "xzjs": 3,
       "dgpjs": 0,
       "sbjs": 0,
       "bz": "协议"
   },
   "market": {
       "gpjs": 1383,
       "xzjs": 0,
       "dgpjs": 0,
       "sbjs": 0,
       "bz": "做市"
   }
};




let keys = Object.keys(new_obj),
    values = Object.values(new_obj);
let listed_number = [],
    new_add_listed_number = [],
    waiting_number = [],
    reporting_number = [];
for (let i = 0; i < keys.length; i++) {
    listed_number.push(new_obj[keys[i]]["gpjs"]);
    // listed_number.push(new_obj["total"]["gpjs"]);
    // listed_number.push(new_obj["protocol"]["gpjs"]);
    // listed_number.push(new_obj["market"]["gpjs"]);
    new_add_listed_number.push(new_obj[keys[i]]["xzjs"]);
    waiting_number.push(new_obj[keys[i]]["dgpjs"]);
    reporting_number.push(new_obj[keys[i]]["sbjs"]);
}
// sort ??? key order ???


*/

