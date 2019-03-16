export default (to, from, next, isAdmin) => {
  (to.meta.requiresAuth && !isAdmin) ? next('/') : next();
};