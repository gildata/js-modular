http://10.1.5.202/webservice/fastview/otc/参数


http://10.1.5.202/webservice/fastview/otc/otcfast01


http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH



# 新三板专题统计 New Sanbanxi Thematic statistics (nsbts)


参数：		
    otcfast01	新增挂牌 newly-added-listing
    otcfast02	新增协议 newly-added-protocol // No Data
    otcfast03	交易排行榜 transactions-leaderboard /trading-rankings
    otcfast04	增发事项-预案 additional-issues-preplan
    otcfast05	增发事项-实施 additional-issues-implementation
    otcfast06	分红事项-预案 dividend-matters-preplan
    otcfast07	分红事项-实施 dividend-matters-implementation
    otcfast08	挂牌情况 listing-situation
    otcfast09	成交概况 transaction-overview
    otcfast10	成交走势-做市图 turnover-trend-make-market-diagram
    otcfast11	成交走势-协议图 turnover-trend-protocol-diagram
    news	    公司新闻 new-sb-thematic-statistics-news
    bulletion	公司公告 new-sb-thematic-statistics-bulletin




```js
Object.keys(obj);
// ["name", "gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
Object.values(obj);
// ["新增挂牌", "挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]

Object.keys(obj).slice(1);
// ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
Object.values(obj).slice(1);
// ["挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]




{
    "otcfast01": {
        name: "新增挂牌",// name
        gpjs: "挂牌家数",
        zqdm: "证券代码",
        zqjc: "证券简称",
        sshy: "所属行业",
        zbqs: "主板券商",
        mgsy: "每股收益",
        mgjzc: "每股净资产",
        jlrtbzz: "净利润同比增长",
        jzcsyl: "净资产收益率",
        zgb: "总股本",
        ltgb: "流通股本"
    },
    "otcfast02": {
        name: "新增协议",
    },
    "otcfast03": {
        name: "交易排行榜",
    },
    "otcfast04": {
        name: "增发事项-预案",
    },
    "otcfast05": {
        name: "增发事项-实施",
    },
    "otcfast06": {
        name: "分红事项-预案",
    },
    "otcfast07": {
        name: "分红事项-实施",
    },
    "otcfast08": {
        name: "挂牌情况",
    },
    "otcfast09": {
        name: "成交概况",
    },
    "otcfast10": {
        name: "成交走势-做市图",
    },
    "otcfast11": {
        name: "成交走势-协议图"
    },
    "news": {
        name: "新闻",
    },
    "bulletion": {
        name: "公告",
    }
}


Object.keys(obj);
// ["otcfast01", "otcfast02", "otcfast03", "otcfast04", "otcfast05", "otcfast06", "otcfast07", "otcfast08", "otcfast09", "otcfast10", "otcfast11", "news", "bulletion"]


```


```js
{
    gpjs: "挂牌家数",
    zqdm: "证券代码",
    zqjc: "证券简称",
    sshy: "所属行业",
    zbqs: "主板券商",
    mgsy: "每股收益",
    mgjzc: "每股净资产",
    jlrtbzz: "净利润同比增长",
    jzcsyl: "净资产收益率",
    zgb: "总股本",
    ltgb: "流通股本",
}
{
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
}
```

otcfast02:
    与otcfast01一样

otcfast03:分xy:协议和zs:做市
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 涨跌幅
     */
    private double zdf;
    /**
     * 成交额
     */
    private String cje;
       
otcfast04:
         /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 募集金额（万元）
     */
    private String mjje;
otcfast05:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 募集金额（万元）
     */
    private String mjje;
otcfast06:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 方案说明
     */
    private String mjje;
otcfast07:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 方案说明
     */
    private String mjje;
otcfast08:
        /**
     * 挂牌家数
     */
    private int gpjs;
    /**
     * 今日新增挂牌家数
     */
    private int xzjs;
    /**
     * 待挂牌家数
     */
    private int dgpjs;
    /**
     * 申报中家数
     */
    private int sbjs;
    /**
     * 标识(合计，协议，做市)
     */
    private String bz;
otcfast09:

    /**
     * 成交家数
     */
    private int cjjs;
    /**
     * 上涨家数
     */
    private int szjs;
    /**
     * 下跌家数
     */
    private int xdjs;
    /**
     * 成交量（亿股）
     */
    private String cjl;
    /**
     * 成交额（亿元）
     */
    private String cje;
    /**
     * 成交笔数
     */
    private String cjbs;
    /**
     * 名称(合计，协议，做市)
     */
    private String mc;
otcfast10:
        /**
     * 截止日期
     */
    private String rq;
    /**
     * 成交量（亿股）
     */
    private double cjl;
    /**
     * 成交额（亿元）
     */
    private double cje;
otcfast11:
        /**
     * 截止日期
     */
    private String rq;
    /**
     * 成交量（亿股）
     */
    private double cjl;
    /**
     * 成交额（亿元）
     */
    private double cje;







## multi tabs & multi modules  === one API(args) & click fetch data (default tab one)

## one tab & multi modules  === one API(objects in object)










