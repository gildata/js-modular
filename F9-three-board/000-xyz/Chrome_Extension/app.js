/**
 * @description JSON Format
 * @author xgqfrms
 * @license MIT
 * @copyright www.xgqfrms.xyz 2017-forever
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
    const debug = true;
    // fetch array data
    const FetchDatas = (url = `https://cdn.xgqfrms.xyz/json/data.json`) => {
        if (debug) {
            console.log(`Fetch Datas url =`, url);
        }
        // fetch data
        fetch(url)
        .then(
            (res) => {
                console.log(`res =\n`, res);
                // console.log(`res.json() =\n`, res.json());
                // duplicate ??? call `res.json()` ???
                return res.json();
            }
        )
        .then(
            (json) => {
                let datas = json || [];
                if (debug) {
                    console.log(`json =\n`, JSON.stringify(json));
                    console.log(`datas =\n`, JSON.stringify(datas, null, 4));
                }
                if (Array.isArray(datas) && datas.length > 0) {
                    let bd = document.querySelector(`bd`),
                        str = JSON.stringify(datas, null, 4);
                    if (debug) {
                        console.log(`origin str =\n`, str);
                        console.log(`1. bd.innerHTML =\n`, bd.innerHTML);
                        // tab page content ???
                        console.log(`1. bd.innerText =\n`, bd.innerText);
                    }
                    let obj = str.lastIndexOf("}"),
                        arr = str.lastIndexOf("]");
                    if (debug) {
                        console.log(`obj =\n`, obj);
                        console.log(`arr =\n`, arr);
                    }
                    if (obj > arr) {
                        str = str.substr(0, str.lastIndexOf("}")+1);
                    }else{
                        str = str.substr(0, str.lastIndexOf("]")+1);
                    }
                    if (debug) {
                        console.log(`shaped str =\n`, str);
                    }
                    // empty
                    bd.innerHTML = "<div></div>";
                    // TypeError: Cannot read property 'innerHTML' of null
                    if (debug) {
                        console.log(`2. bd.innerHTML =\n`, bd.innerHTML);
                        console.log(`2. bd.innerText =\n`, bd.innerText);
                    }
                    bd.firstChild.insertAdjacentHTML(`beforeend`, `<pre data-uid="string-to-json">${str}</pre>`);
                    if (debug) {
                        console.log(`3. bd.innerHTML =\n`, bd.innerHTML);
                        console.log(`3. bd.innerText =\n`, bd.innerText);
                    }
                }
            }
        )
        .catch(err => console.log(`\nError infos =\n`, err));
        // Error infos = 
        // SyntaxError: Unexpected token < in JSON at position 0 at FetchDatas.fetch.then.res (app.js:15)
    };
    // FetchDatas();
    const jf_btn = document.querySelector(`#fromatJSON`);
    // "http://10.1.5.202/webservice/fastview/otc/news"
    jf_btn.addEventListener('click', function () {
        // chrome.tabs ??? 
        // Uncaught TypeError: Cannot read property 'getSelected' of undefined
        chrome.tabs.getSelected(null, function (tab) {
            const url = tab.url;
            // const url = window.location.href || tab.url;
            // window.location.href === chrome-extension://jalagocmiicjcgnaeammikgiohbmdemf/app.html
            if (debug) {
                console.log(`window.location.href = `, window.location.href);
                console.log(`Chrome tab = `, tab);
                console.log(`Chrome tab.url = `, tab.url);
            }
            FetchDatas(url);
        });
    }, false);
}, false);



/* 

let json = ((debug = false) => {
    let bd.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    // copy(text);
    let obj = objs;
    let keys = [];
    const getKeys = (obj) => {
        let keys = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
                let keys_str = JSON.stringify(getKeys(obj[key][0]));
                keys.push(`${key}: ${keys_str}`);
            }else{
                keys.push(key);
            }
        }
        return keys;
    }
    keys = getKeys(obj);
    const result = {
        "keys": keys,
        "objs": objs
    };
    copy(result)
    return result;
})();

*/

/* 

TypeError: bd stream already read at FetchDatas.fetch.then

https://github.com/w3c/ServiceWorker/issues/452#issuecomment-342752255

https://stackoverflow.com/tags/fetch-api/hot


https://css-tricks.com/using-fetch/


https://developer.mozilla.org/en-US/docs/Web/API/Response

https://developer.mozilla.org/en-US/docs/Web/API/bd/json


https://stackoverflow.com/questions/41899251/unexpected-token-n-in-json-at-position-0


https://developer.chrome.com/extensions/content_scripts
https://superuser.com/questions/901417/how-do-i-change-the-default-chrome-tab-page
https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna

https://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension

https://www.sitepoint.com/premium/screencasts/interacting-with-browser-content-from-your-chrome-extension


https://github.com/learnable-content/chrome-extension-development



*/