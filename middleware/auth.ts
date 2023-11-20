export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == '/register' || to.path == '/login') {
        return;
    }

    const user = useSupabaseUser();
    if (!user.value) {
      return navigateTo('/login');
    }
  });