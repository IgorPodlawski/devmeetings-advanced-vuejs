export default (to, from, next) => {
  const isAdmin = localStorage.getItem('is-admin');
  (to.meta.requiresAuth && !isAdmin) ? next('/') : next();
};