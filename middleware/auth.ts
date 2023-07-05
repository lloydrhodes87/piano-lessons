import { useAuthStore } from '@/store/authStore';

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('MIddleware not running');
  const authStore = useAuthStore();

  const isAuthenticated = authStore.isLoggedIn;
  const access = authStore.access;

  console.log(isAuthenticated);

  // If user is not authenticated and trying to access a restricted page
  if (!isAuthenticated && access === 'none') {
    return navigateTo('/login'); // Redirect to login page
  }
});
