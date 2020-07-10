import * as querystring from "querystring";
import md5 = require("md5");
import {appId, appSecret} from "./private";
const https = require('https');

//表驱动编程,错误提示
let errorMap: { "52001":string; "52002": string;"52003": string;"52004": string; "52005": string; unknown: string };
errorMap = { 52001:'请求超时',52002: '系统错误', 52003: '用户未授权',52004: '账户余额不足', 52005: '长query请求频繁', unknown: '服务器繁忙' };

export const translate = (word) => {
    const salt = Math.random();
    const sign = md5(appId + word + salt + appSecret);
    //使用 querystring 构造查询字符串
    const query: string = querystring.stringify({ q: word, from: 'en', to: 'zh', appid: appId, salt: salt, sign: sign });

    const options = { hostname: 'fanyi-api.baidu.com', port: 443, path: '/api/trans/vip/translate?' + query, method: 'GET' };

    const request = https.request(options, (response) => {
        let chunks = [];
        //data 就是每次请求得到的数据
        response.on('data', (chunk) => { chunks.push(chunk) });
        //end表示就是请求结束了
        response.on('end', () => {
            const string = Buffer.concat(chunks).toString();
            //下面折行代码最后加的 []，表示 trans_result 是一个数组,数组里面的每一项都是一个对象
            type BaiduResult = { error_code?: string, error_msg?: string, from: string, to: string, trans_result: { src: string, dst: string }[] }
            const object: BaiduResult = JSON.parse(string);
            if (object.error_code in errorMap) { //表驱动编程
                console.error(errorMap[object.error_code] || object.error_msg);
                //退出当前进行，这里的数字可以随便给，这里给出的是2，可以理解为第2个错误
                process.exit(2)
            } else {
                console.log(object.trans_result[0].dst);
                //这里的 0 表示没有错误，成功退出当前进程
                process.exit(0)
            }

        })
    });

    request.on('error', (e) => { console.error(e); });
    request.end();

};
