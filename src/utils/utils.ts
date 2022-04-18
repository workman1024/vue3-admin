export const resolvePath = (path: string,cpath: string)=> {
    let p1 = path;
    let p2 = cpath;
    if(path.startsWith('/') || path == '/'){
        
    }else{
        p1 = '/'+p1;
    }
    if(cpath.startsWith('/')){
        
    }else{
        p2 = '/'+p2;
    }
    return p1+p2;
}