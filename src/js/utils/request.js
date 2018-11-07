import * as fetchhJsonp from 'fetch-jsonp';

function getJson(url, params, setting) {
    let me = this;

    if (setting.syncId && BaseHttpRequest.requestSet.has(setting.syncId)) {
        console.log('重复提交')
        return;
    }

    let host = getGwHost();
    if (url.indexOf('\/\/') == -1 && (url.indexOf('api/menu') == -1 && url.indexOf('api/user') == -1)) {
        url = host + url;
    }

    let beforeResult = me.beforeRequest(params);
    if (beforeResult != BEFORE_RESUlT.OK) {
        return new Promise < BaseResponse < T >> (function (resolve, reject) {
            throw new Error('请求被拦截');
        });
    }

    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => {
            let value = params[key];
            var isJson = typeof(value) == 'object' &&
                Object.prototype.toString.call(value).toLowerCase() == '[object object]' && !value.length;
            let isArray = Array.isArray(value);
            if (isJson || isArray) {
                value = JSON.stringify(value);
            }
            paramsArray.push(key + '=' + value);
        })
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    return new Promise(function (resolve, reject) {
        if (setting.syncId) {
            BaseHttpRequest.requestSet.add(setting.syncId)
        }
        if (url.indexOf('\/\/') === 0 && url.indexOf('127.0.0.1') == -1) {
            fetchJsonp(url, {
                timeout: setting.timeout || 5000
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.status);
                    reject({
                        code: ERROR_MAP.OTHER_ERROR,
                        message: '出错啦'
                    })
                }
            })
                .then((response) => {
                    if (setting.syncId) {
                        BaseHttpRequest.requestSet.delete(setting.syncId)
                    }
                    if (setting.noAuth) resolve(response);
                    else me.afterRequest(resolve, reject, response);
                })
                .catch((err) => {
                    if (setting.syncId) {
                        BaseHttpRequest.requestSet.delete(setting.syncId)
                    }
                    me.afterRequest(resolve, reject, {
                        code: ERROR_MAP.OTHER_ERROR,
                        data: null,
                        message: '出错啦'
                    });
                });
        } else {
            fetch(url, {
                method: 'GET',
                headers: setting.headers
            }).then((response) => {
                if (setting.syncId) {
                    BaseHttpRequest.requestSet.delete(setting.syncId)
                }
                if (response.ok) {
                    return response.json();
                } else {
                    me.afterRequest(resolve, reject, {
                        code: ERROR_MAP.OTHER_ERROR,
                        data: null,
                        message: '出错啦'
                    });
                }
            }).then((response: BaseResponse < T >) => {
                if (setting.syncId) {
                    BaseHttpRequest.requestSet.delete(setting.syncId)
                }
                me.afterRequest(resolve, reject, response);
            }).catch((err) => {
                if (setting.syncId) {
                    BaseHttpRequest.requestSet.delete(setting.syncId)
                }
                console.log(err);
                me.afterRequest(resolve, reject, {
                    code: ERROR_MAP.OTHER_ERROR,
                    data: null,
                    message: '出错啦'
                });
            })
        }
    })
}


function getGwHost(){
    return ''
}


module.exports = getJson;
