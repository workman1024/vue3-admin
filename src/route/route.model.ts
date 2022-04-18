interface RouteItem {
    path:string,
    name:string,
    redirect?:string,
    alwaysShow?:boolean,
    meta:{
        title:string,
        icon:string,
        singleShowChildren?:true
    },
    hidden?:boolean,
    children?:any
}

export default RouteItem
