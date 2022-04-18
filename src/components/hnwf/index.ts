export function fileComponent(app){
    const modules = fileModules();
    for (const [key, value] of Object.entries(modules)) {
        app.component(key, value);
    }
}
function fileModules() {
  const modulesFiles = import.meta.globEager('./component/*.vue');
  const modules = Object.keys(modulesFiles).reduce((modules,path)=>{
    let npath = path.replace('/component','');
    const moduleName = npath.replace(/^\.\/(.*)\.\w+$/, '$1');
    modules[moduleName] = modulesFiles[path].default;
    return modules;
  },{})
  return modules;
}
