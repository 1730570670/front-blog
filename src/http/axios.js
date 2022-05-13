import axios from "axios";
//简单封装axios
export async function Ajax(method,url,data){
    var i = 0;
    await axios({
        method,
        url:'http://hnhhjy.xyz:8089'+url,
        data,
    }).then(res=>{
        // 请求成功
        i = res
    }).catch(error=>{
        // 请求失败
        i = error
    })
    // 将最终的结果返回
    return i;
}
