// ajax请求函数模块 
//  返回值：promise对象（异步返回的数据是response.data）

import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        //执行异步ajax请求
        let Promise
        if (type === 'GET') {
            //准备url query参数数据
            let DataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key=>{
                DataStr += key+'='+data[key]+'&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url+'?'+dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            promise = axios.post(url,data)
        }
        promise.then(function(response){
            //成功了调用resolve()
            resolve(response.data)
        }).catch(function(error){
            //失败了调用reject()
            reject(error)
        })
    })
}
