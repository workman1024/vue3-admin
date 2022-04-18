export function formComponent(app){
    const modules = fileModules();
    for (const [key, value] of Object.entries(modules)) {
        app.component(key, value);
    }
    const basicForm = import.meta.globEager('./basicForm.vue')['./basicForm.vue'].default
    app.component('hnwf-basic-form',basicForm)
}
function fileModules() {
  const modulesFiles = import.meta.globEager('./item/*.vue');
  const modules = Object.keys(modulesFiles).reduce((modules,path)=>{
    let npath = path.replace('/item','');
    const moduleName = npath.replace(/^\.\/(.*)\.\w+$/, '$1');
    modules[moduleName] = modulesFiles[path].default;
    return modules;
  },{})
  return modules;
}
