import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'

let notAuthorizedCounter = 0;
let fetchService = {
    fetchJsonp: (url,jsonpCallback,callback) => {
        try {
            let getText = async () => {
                let promise = await fetchJsonp(url, {
                        jsonpCallbackFunction: jsonpCallback
                    })
                ;
                let dataS = promise.json();
                dataS.then(data => {
                    callback(data)
                })
            };
            getText()
        } catch (error) {
            console.log(`错误为${error}`)
        }
    },
    fetch: (url, method, header, body) => {
        if (!header) {
            header = {}
        }
        return fetchService[method.toLowerCase()](url, header, body).catch(function(exception) {
            console.log('fetchService failed:', exception);

            // token过期，重新获取token并发起请求
            if (exception.code === '401' || exception.code === '403') {
                notAuthorizedCounter++;
                // 最多重试3次
                if (notAuthorizedCounter > 2) {
                    notAuthorizedCounter = 0;
                    console.log("401 or 403 received. Max attemps reached.");
                    return;
                } else {
                    return fetchService.fetch(url, method, header, body);
                }
            }
        });
    },
    get: (url, header) => {
        return fetch(url, {
            method: 'GET',
            headers: header
        }).then((response) => {
            return response.json();
        });
    },
    post: (url, header, body) => {
        header['Content-Type'] = 'application/json';
        return fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(body)
        }).then((response) => {
            console.log(response)
            return response.json();
        });
    }
};
export default fetchService;