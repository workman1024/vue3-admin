
export interface ComponentType {
    component:string,
    option:any,
    key:string,
    label:string,
    default?:any,
    data?:any
    event?:any,
    change?:any
}

export interface SelectType {
    label:string,
    value:string,
    disabled?:string
}