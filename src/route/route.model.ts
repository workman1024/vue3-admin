interface RouteItem {
    path:string,
    name:string,
    redirect?:string,
    meta:{
        title:string,
        icon:string,
        singleShowChildren?:true
    },
    hidden?:boolean,
    children?:any
}

export default RouteItem
