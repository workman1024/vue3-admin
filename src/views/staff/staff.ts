export const statudsData = [{
    label: '全部',
    value: 0
}, {
    label: '签约中',
    value: 1
}, {
    label: '签约解除',
    value: 2
}]

export const projectsData = [{
    label: '全部',
    value: 0
}, {
    label: '加盟就业',
    value: 1
}]
export const comparesData = [{
    label: '小于',
    value: 0
}, {
    label: '小于等于',
    value: 1
}, {
    label: '等于',
    value: 2
}, {
    label: '大于',
    value: 3
}, {
    label: '大于等于',
    value: 4
}]

export interface tableData {
    staffNum?:number,
    name?:string,
    phone?:string,
    idcard?:string,
    status?:string,
    count?:number
}

export function tableSourceData(size:number=10){
    let source:tableData[] = [];
    for (let index = 0; index < size; index++) {
        let obj:tableData = {
            staffNum:index+1,
            phone:'15637846796',
            idcard:'410410410210246543',
            count:Math.round(Math.random() * 10)
        };
        obj.name = '张'+(index+1);
        obj.status = '签约解除';
        source.push(obj);
    }
    return source;
}