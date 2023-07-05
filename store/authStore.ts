import { defineStore } from 'pinia';

export type access = 'guest' | 'member' | 'none';
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return { isLoggedIn: false, access: 'none' };
  },
  actions: {
    loginIn() {
      this.isLoggedIn = true;
    },
    setAccess(access: access) {
      this.access = access;
    },
  },
});
