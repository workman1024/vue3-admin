const getters = {
    userinfo: state => state.user.userinfo || {},
    userRoute: state => state.user.routes,
    permissionRouters: state => state.permission.allRouters,
    permissionAddRoutes: state => state.permission.addRoutes,
    app: state => state.app
  }
  export default getters
  