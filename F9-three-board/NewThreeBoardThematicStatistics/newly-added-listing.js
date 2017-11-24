"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name newly-added-listing 新增挂牌
 * @createed 2017.11.07 
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

NSB_TS_FV.Modules.newlyAddedListing = NSB_TS_FV.Modules.newlyAddedListing || (() => console.log(`module testing!`));
// () => console.log(`module testing!`)

typeof NSB_TS_FV.Modules.newlyAddedListing
// "function"

NSB_TS_FV.Modules.newlyAddedListing();
// module testing!

*/





NSB_TS_FV.Modules.newlyAddedListing = NSB_TS_FV.Modules.newlyAddedListing || ((url = ``, debug = false, uid = `default_dom_uid`, ui_arr = ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]) => {
    // debug = true;
    let datas = {};
    const ui_keys = ui_arr;
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            let json_keys = [],
                json_values = [];
            if (json !== undefined && typeof json === "object") {
                // json_keys = Object.keys(json);
                json_keys = Object.keys(json).sort();
                json_values = Object.values(json);
                // show new add num
                let new_add = document.querySelector(`[data-ntb-new-add-num="ntb-new-add-num-listing"]`);
                // new_add.innerHTML = json[json_keys[0]]["gpjs"];
                new_add.innerHTML = json_values[0]["gpjs"];
                // table
                let init_uid = json_keys[0].replace(/(id)/i, ``);
                if (debug) {
                    console.log(`init_uid = \n`, init_uid);
                    // "id872356" => "872356"
                    console.log(`json = \n`, json);
                }
                NSB_TS_FV.Modules.newlyAddedListing.showTable(init_uid, json);
            }
            // async
            if (debug) {
                console.log(`json = \n`, json);
                // new_add.innerHTML = json[0]["gpjs"];
                // console.log(`json[0] = \n`, json[0]);
                // undefined
                console.log(`json.keys = \n`, json_keys);
                console.log(`json.values = \n`, json_values);
            }
            // sort json
            let new_json_values =[];
            // json_keys = json_keys.sort();
            json_keys.map(
                (key, i) => {
                    const {
                        mgsy: x,
                        mgjzc: y,
                        zgb: z,
                        zqjc: name,
                        zqdm: code
                    } = {...json[key]};
                    const new_obj = Object.assign(
                        {},
                        {
                            x,
                            y,
                            z: 6,// 气泡的大小
                            name,
                            code
                        }
                    );
                    if (debug) {
                        // console.log(`key = \n`, key);
                        console.log(`json[key] = \n`, json[key]);
                        // {gpjs: 12, zqdm: "872352", zqjc: "开元新材", sshy: "非金属矿物制品业", zbqs: "长江证券", …}
                        console.log(`new_obj =\n`, new_obj);
                        // {x: -0.21, y: 0.87, z: 20000000, name: "思源软件", code: "872343"}
                    }
                    new_json_values.push(new_obj);
                }
            );
            if (debug) {
                console.log(`json_keys = \n`, json_keys);
                console.log(`new_json_values = \n`, new_json_values);
            }
            datas = [].concat(new_json_values);
            // array
            NSB_TS_FV.Modules.newlyAddedListing.drawHC(datas, uid, json, false);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    return datas;
});




/**
 * @author xgqfrms
 * 
 * @param {* Array} datas 
 * @param {* String} container_uid 
 * @param {* Boolean} debug
 */
// NSB_TS_FV.Modules.newlyAddedListing.drawHC = NSB_TS_FV.Modules.newlyAddedListing.drawHC

NSB_TS_FV.Modules.newlyAddedListing.drawHC = NSB_TS_FV.Modules.newlyAddedListing.drawHC || ((datas = [], container_uid = `container`, json = {}, debug = false) => {
    let dataLength = datas.length;
    // datas
    const chart_css = {
        color: `#0B1016`,
        colors: ['#ff1919', '#ffff66', '#92d050'],
        optioncolor: `red`,
        gridColor: `#2D3039`,
        legendColor: `#fff`,
        yAxisColor: `#FFB400`,
    };
    const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
    // webpack / rollup
    if (debug) {
        console.log(`Highcharts datas =\n`, datas);
        console.log(`%c Highcharts container_uid =`, `color: #f0f; font-size: 23px;`, container_uid);
    }
    /* 
        Highcharts.setOptions({
            lang: {
                rangeSelectorZoom: '缩放',// 放大
                rangeSelectorFrom: '从',
                rangeSelectorTo: '到',
                contextButtonTitle: '图表导出菜单',
                decimalPoint: '.',
                downloadJPEG: "下载JPEG图片",
                downloadPDF: "下载PDF文件",
                downloadPNG: "下载PNG文件",
                downloadSVG: "下载SVG文件",
                drillUpText: "返回 {series.name}",
                loading: '加载中...',
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                noData: "没有数据",
                // noData: "没有数据显示!",
                numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
                printChart: "打印图表",
                resetZoom: '重置缩放比例',
                resetZoomTitle: '重置为原始大小',
                shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                thousandsSep: ',',
                shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdays: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
        });
    */
    Highcharts.chart(container_uid, {
        noData: {
            attr: undefined,
            position: {
                align: "center",
                verticalAlign: "middle",
                x: 0,
                y: 0
            },
            style: { "fontSize": "12px", "fontWeight": "bold", "color": "#777" },
            useHTML: false
        },
        credits: {
            enabled: true,// enabled: false,
            href: `https://www.gildata.com`,
            text: `gildata`,
        },
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            // ???决定用户可以通过拖动鼠标来缩放的尺寸。可以是x，y或xy中的一个。
            // Can be one of x, y or xy. Defaults to undefined.
        },
        legend: {
            enabled: false
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: '每股收益'
            },
            labels: {
                format: '{value}'
            },
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 65,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常脂肪摄入量65g/天'
                    },
                    zIndex: 3
                },
                // x line 2 
            ]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: '每股净资产'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 3,// 
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常 ??? 天',// 50
                        x: -10
                    },
                    zIndex: 3
                },
                // y line no
            ]
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: `
                <tr>
                    <th colspan="2">
                        <h3>{point.name}({point.code})</h3>
                    </th>
                </tr>
                <tr>
                    <th>每股收益:</th>
                    <td>{point.x}元</td>
                </tr>
                <tr>
                    <th>每股净资产:</th>
                    <td>{point.y}万元</td>
                </tr>
                <tr>
                    <th>总股本:</th>
                    <td>{point.z}万股</td>
                </tr>
            `,// point.???
            footerFormat: '</table>',
            followPointer: true
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,// counter name
                    format: '{point.name}'
                },
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        // alert(
                        //     this.name + ' clicked\n' +
                        //     "\ncode: "+ event.point.code + 
                        //     "\nX: "+ event.point.x + 
                        //     "\nY: "+event.point.y + 
                        //     "\nZ: "+event.point.z
                        // );
                        if (debug) {
                            console.log(`event = \n`, event);
                            console.log(`event.point.code= \n`, event.point.code, typeof(event.point.code));
                        }
                        // 300725 & string
                        let code_uid = event.point.code;
                        if (debug) {
                            console.log(`code_uid = \n`, code_uid);
                            // "id872356" => "872356"
                            console.log(`json = \n`, json);
                        }
                        NSB_TS_FV.Modules.newlyAddedListing.showTable(code_uid, json);
                    }
                },
                point: {
                    events: {
                        click: function (event) {
                            if (debug) {
                                console.log(`event.point = \n ${event.point}`);
                                console.log(`event.point.code = \n ${event.point.code}`);
                                // 300725
                            }
                        }
                    }
                }
            },
        },// ponit data
        series: [
            {
                data: [...datas],
            }
        ],
    });
});



/**
 * @author xgqfrms
 * 
 * @param {* String} code
 * @param {* String} table_dom_uid 
 * @param {* Boolean} debug
 * @param {* Object} data 
 */



NSB_TS_FV.Modules.newlyAddedListing.showTable = NSB_TS_FV.Modules.newlyAddedListing.showTable || ((uid = `6000570`, datas = {}, debug = false) => {
    let new_uid = `id${uid}`;
    if (debug) {
        console.log(`uid = `, uid);
        console.log(`new_uid = `, new_uid);
        console.log(`data = `, JSON.stringify(data, null, 4));
    }
    // datas["id872358"]
    let table_obj = datas[new_uid];
    if (debug) {
        console.log(`table_obj`, JSON.stringify(table_obj, null, 4));
    }
    let sa = document.querySelector(`[data-ntb-th-title="Securities-Abbreviation-listing"]`),
        sc = document.querySelector(`[data-ntb-th-title="Securities-Code-listing"]`),
        // new_add = document.querySelector(`[data-ntb-new-add-num="ntb-new-add-num-listing"]`),
        tb = document.querySelector(`[data-table-body="ntb-table-body-newly-added-listing"]`);
    // let tr1 = tb.firstElementChild;
    // let tr3 = tb.lastElementChild;
    // [tr, tr, tr]
    let trs = tb.children;
    let tds1 = trs[0].children,
        tds2 = trs[1].children,
        tds3 = trs[2].children;
    // const {zqjc, gpjs, zqdm, zqjc, sshy, zbqs} = table_obj;
    // ES6 => ES5
    // header
    sa.innerHTML = `${table_obj.zqjc}`;
    sc.innerHTML = `${table_obj.zqdm}.OC`;
    // 博商管理(836000.OC) - 新三板
    tds1[1].innerHTML = `${table_obj.sshy}`;
    tds1[3].innerHTML = `${table_obj.zbqs}`;
    tds1[1].setAttribute(`title`, `${table_obj.sshy}`);
    tds1[3].setAttribute(`title`, `${table_obj.zbqs}`);
    // tr1
    tds2[1].innerHTML = `${table_obj.mgsy}`;
    tds2[3].innerHTML = `${table_obj.jlrtbzz}`;
    tds2[5].innerHTML = `${table_obj.zgb}`;
    tds2[1].setAttribute(`title`, `${table_obj.mgsy}`);
    tds2[3].setAttribute(`title`, `${table_obj.jlrtbzz}`);
    tds2[5].setAttribute(`title`, `${table_obj.zgb}`);
    // tr2
    tds3[1].innerHTML = `${table_obj.mgjzc}`;
    tds3[3].innerHTML = `${table_obj.jzcsyl}`;
    tds3[5].innerHTML = `${table_obj.ltgb}`;
    tds3[1].setAttribute(`title`, `${table_obj.mgjzc}`);
    tds3[3].setAttribute(`title`, `${table_obj.jzcsyl}`);
    tds3[5].setAttribute(`title`, `${table_obj.ltgb}`);
    //tr3
});






// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `otcfast01`;
    const url = `http://10.1.5.202/webservice/fastview/otc/${sf_num}/`;
    let uid = `newly_added_listing_hs_container`;
    let hs_datas = NSB_TS_FV.Modules.newlyAddedListing(url, false, uid);
}, 0);



