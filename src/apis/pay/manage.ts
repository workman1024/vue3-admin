import request from '@/utils/request'
import { getSel } from '../data/test'
export function getManageData(params={}){
    console.log('api params => ', params);
    
    return new Promise((resolve)=>{
        const res = getSel(params);
        resolve(res.data.data)
        // request({
        //     url:'pay/get',
        //     method: "GET",
        //     params,
        // }).then(res=>{
        //     resolve(res.data)
        // })

    })
}