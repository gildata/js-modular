"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name transactions-leaderboard 交易排行榜-做市 & 交易排行榜-协议
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};

// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};
// transactionsLeaderboard
NSB_TS_FV.Modules.transactionsLeaderboard = NSB_TS_FV.Modules.transactionsLeaderboard || (() => {});

// Utils
NSB_TS_FV.Modules.Utils = NSB_TS_FV.Modules.Utils || {};
// sub Utils
NSB_TS_FV.Modules.transactionsLeaderboard.Utils = NSB_TS_FV.Modules.transactionsLeaderboard.Utils || {};

// Utils & reusable dataHandler
NSB_TS_FV.Modules.transactionsLeaderboard.Utils.dataHandler = NSB_TS_FV.Modules.transactionsLeaderboard.Utils.dataHandler || (
    (arr = []) => {
        if (debug) {
            console.log(`arr = \n`, arr);
            console.log(`arr keys = \n`, Object.keys(arr[0]));
        }
        let ranking_code = [],
            ranking_brief = [],
            ranking_amplitude = [],
            ranking_amount = [];
        arr.map(
            (obj, i) => {
                if (debug && (i === 0)) {
                    console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                }
                // ["zqdm", "zqjc", "zdf", "cje"]
                ranking_code.push(obj["zqdm"]);
                ranking_brief.push(obj["zqjc"]);
                ranking_amplitude.push(obj["zdf"]);
                ranking_amount.push(obj["cje"]);
            }
        );
        const new_obj = {
            ranking_code,
            ranking_brief,
            ranking_amplitude,
            ranking_amount
        };
        if (debug) {
            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
        }
        return new_obj;
    }
);
