/**
 * @description JSON Format
 * @author xgqfrms
 * @license MIT
 * @copyright www.xgqfrms.xyz 2017-forever
 * 
 */

/* 

https://developer.chrome.com/extensions/examples/tutorials/getstarted/icon.png

https://gtmetrix.com/reports/www.xgqfrms.xyz/8Vrf6yKQ

https://gtmetrix.com/api/

https://gtmetrix.com/api/0.1/

https://github.com/fvdm/nodejs-gtmetrix

POST /api/0.1/test

https://gtmetrix.com/api/0.1/test?url="www.xgqfrms.xyz"

https://gtmetrix.com/api/0.1/test?url=%22www.xgqfrms.xyz%22
// {"error":"Invalid e-mail and/or API key"}

https://gtmetrix.com/blog/developer-toolkit-released/

https://gtmetrix.com/pro/

https://gtmetrix.com/api/#api-details
https://gtmetrix.com/api/#api-browsers

Use your `e-mail address` as the username and the `API key` as the password.

https://github.com/fvdm/nodejs-gtmetrix


API Key: 727fcec2246026e92be534f6c8a80c5a

// {"error":"Request must use POST method"}


https://gtmetrix.com/reports/www.xgqfrms.xyz/kXYISkd9

*/


document.addEventListener('DOMContentLoaded', function () {
    // var fromatJSONButton = document.getElementById('fromatJSON');
    const jf_btn = document.querySelector(`#fromatJSON`);
    const url = window.location.href;
    jf_btn.addEventListener('click', function () {
        let jf_document = document,
        // #document & "object"
        jf_form = jf_document.createElement('form'),
        jf_input = jf_document.createElement('input');
        // input
        jf_input.type = 'hidden';
        jf_input.name = 'url';
        jf_input.value = url;
        // form
        // jf_form.action = 'https://gtmetrix.com/analyze.html?bm';//400 - Bad Request
        // xgqfrms@163.com
        // https://gtmetrix.com/api/0.1/test?url="www.xgqfrms.xyz"
        // https://gtmetrix.com/analyze.html
        jf_form.action = `https://gtmetrix.com/api/0.1/test?url=`;
        jf_form.method = `POST`;
        // 
        jf_form.appendChild(jf_input);
        // jf_form.insertAdjacentElement(`beforeend`, jf_input);
        jf_document.body.appendChild(jf_form);
        // jf_document.body.insertAdjacentElement(`beforeend`, jf_form);
        jf_form.submit();
        // auto click submit button!
    });
    // "http://10.1.5.202/webservice/fastview/otc/news"
    // jf_btn.addEventListener('click', function () {
    //     // chrome.tabs ??? 
    //     // Uncaught TypeError: Cannot read property 'getSelected' of undefined
    //     chrome.tabs.getSelected(null, function (tab) {
    //         let jf_document = document,
    //             // #document & "object"
    //             jf_form = jf_document.createElement('form'),
    //             jf_input = jf_document.createElement('input');
    //         // input
    //         jf_input.type = 'hidden';
    //         jf_input.name = 'url';
    //         jf_input.value = tab.url;
    //         // form
    //         // jf_form.action = 'https://gtmetrix.com/analyze.html?bm';//400 - Bad Request
    //         // xgqfrms@163.com
    //         // https://gtmetrix.com/api/0.1/test?url="www.xgqfrms.xyz"
    //         // https://gtmetrix.com/analyze.html
    //         jf_form.action = `https://gtmetrix.com/api/0.1/test?url=`;
    //         jf_form.method = `POST`;
    //         // 
    //         jf_form.appendChild(jf_input);
    //         // jf_form.insertAdjacentElement(`beforeend`, jf_input);
    //         jf_document.body.appendChild(jf_form);
    //         // jf_document.body.insertAdjacentElement(`beforeend`, jf_form);
    //         jf_form.submit();
    //         // auto click submit button!
    //     });
    // }, false);
}, false);

// https://googlechrome.github.io/samples/fetch-api/fetch-post.html

const FetchDatas = (url = `https://cdn.xgqfrms.xyz`) => {
    const api_url = `https://gtmetrix.com/api/0.1/test`;
    const data = {
        email: "xgqfrms@163.com",
        apikey: "727fcec2246026e92be534f6c8a80c5a",
        url: url
    };
    console.log(`data = \n`, JSON.stringify(data, null, 4));
    let myHeaders = new Headers({
        // "Content-Type": "text/plain",
        "Content-Type": "application/json",
        // "Content-Length": content.length.toString(),
        "X-Custom-Header": "ProcessThisImmediately"
    });
    fetch(
        api_url,
        {
            mode: "no-cors",
            method: "POST",
            // headers: myHeaders,
            body: JSON.stringify(data),
            cache: 'default',
            credentials: 'include'
        }
    )
    .then(res => res.json())
    .then(
        (json) => {
            let datas = json || [];
            // ???
            console.log(JSON.stringify(datas, null, 4));
        }
    )
    .catch(err => console.log(`\nError infos =\n`, err));
};

FetchDatas();

/* 

https://api.github.com/gists


credentials: 'include',// 'omit'(default)/'same-origin'/'include'
// {"error": "Invalid URL: No URL specified"}
//credentials: 'user:passwd'
//credentials: 'xgqfrms@163.com:727fcec2246026e92be534f6c8a80c5a'


{
    "description":"Fetch API Post example",
    "public":true,
    "files":{
        "test.js":{
            "content":"// Enter some JavaScript here\n// e.g\n"
        }
    }
}


https://gtmetrix.com/api/0.1/test?url=%22www.xgqfrms.xyz%22

https://gtmetrix.com/api/0.1/test

{
    url: "www.xgqfrms.xyz",
    email: "xgqfrms@163.com",
    apikey: "727fcec2246026e92be534f6c8a80c5a"
}

// JS Fetch API with Windows AD Authenticated Web Api | The ASP.NET Forums

https://forums.asp.net/t/2131082.aspx?JS+Fetch+API+with+Windows+AD+Authenticated+Web+Api


https://stackoverflow.com/questions/43842793/basic-authentication-with-fetch


https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
https://developer.mozilla.org/en-US/docs/Web/API/Credential
https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials

https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Request/Request

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

meta

content-type

MIME_type

https://developer.mozilla.org/en-US/docs/Glossary/MIME_type

https://developer.mozilla.org/en-US/docs/Web/API/MimeType

https://html.spec.whatwg.org/multipage/#mimetype

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

https://www.iana.org/assignments/media-types/media-types.xhtml

https://www.iana.org/assignments/media-types/application/json

https://en.wikipedia.org/wiki/Media_type

application/json

https://en.wikipedia.org/wiki/Media_type#Common_examples


https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types


https://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type



https://stackoverflow.com/questions/36014475/basic-authentication-or-any-authentication-with-fetch
https://serverfault.com/questions/371907/can-you-pass-user-pass-for-http-basic-authentication-in-url-parameters/371918

*/



/*  
    let base64 = require('base-64');
    // libs ??? native btoa & atob
    let url = 'http://eu.httpbin.org/basic-auth/user/passwd';
    let username = 'user';
    let password = 'passwd';

    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));

    fetch(url, 
        {
            method:'GET',
            headers: headers,
            //credentials: 'user:passwd'
        })
    .then(response => response.json())
    .then(json => console.log(json));
    //.done();

    function parseJSON(response) {
        return response.json()
    }
*/


/* 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob



let encodedData = window.btoa("Hello, world"); // 编码
// "SGVsbG8sIHdvcmxk"

let decodedData = window.atob(encodedData); // 解码
// "Hello, world"

*/