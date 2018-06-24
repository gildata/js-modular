"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description URLHashChange
 * @augments
 * @example
 *
 */

const HashHandler = (debug = false) => {
    let hash = "";
    // window.STOCK_F10_HASH = window.parent.location.hash.slice(1);
    hash = window.parent.location.hash.slice(1);
    if (hash.includes(`%`)) {
        // zh-Hans
        hash = decodeURIComponent(hash);
    }
    if (debug) {
        console.log("The Hash has been changed!", hash);
    }
    window.STOCK_F10_HASH = hash;
    return hash;
};

const URLHashChange = (debug = false) => {
    window.STOCK_F10_HASH = window.STOCK_F10_HASH || "";
    // sub/pub & publisher
    window.addEventListener("hashchange", HashHandler, false);
};

// const URLHashChange = (debug = false) => {
//     window.STOCK_F10_HASH = window.STOCK_F10_HASH || "";
//     window.addEventListener("hashchange", HashHandler, false);
//     let result = ``;
//     result = HashHandler();
//     return result;
// };

export default URLHashChange;

export {
    URLHashChange,
    HashHandler
};
