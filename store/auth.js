import { defineStore } from "pinia";
import axiosApi from "~/config/axios";
// import { navigateTo } from "~/utils/navigation"; // Assuming navigateTo is imported from some navigation utility

export const useAuthStore = defineStore("auth", {
  state: () => ({
    message: null,
    loading: false,
  }),

  actions: {
    async getToken() {
      const token = localStorage.getItem("token") ?? null;
      this.token = token;
    },

    async login(userData) {
      try {
        this.loading = true;
        var response = await axiosApi.post("login", userData);

        if (response.status == 200) {
          if (response.data.data.token !== null) {
            this.message = "login success"
            localStorage.setItem("token", `${response.data.data.token}`);
            navigateTo("/");
          }
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        var token = localStorage.getItem("token");
        this.loading = true;
        var response = await axiosApi.get("logout", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.warn(response.data);
        if (response.status === 200) {
          this.isLoggedIn = false;
          localStorage.removeItem("token");
          navigateTo("/login");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
