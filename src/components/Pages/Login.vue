<template>
  <div class="grid h-screen place-items-center bg-black">
    <h1 class="text-white text-5xl">Hr Management</h1>

    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-40"
    >
      <div class="p-5">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Email</label
          >
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path
                  d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                />
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                />
              </svg>
            </div>
            <input
              v-model="email"
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="name@gmail.com"
            />
          </div>

          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <div class="flex">
            <span
              class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 rounded-e- rounded-s-md dark:text-gray-400 border-y border-l border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 25 2 C 17.832484 2 12 7.8324839 12 15 L 12 21 L 8 21 C 6.3550302 21 5 22.35503 5 24 L 5 47 C 5 48.64497 6.3550302 50 8 50 L 42 50 C 43.64497 50 45 48.64497 45 47 L 45 24 C 45 22.35503 43.64497 21 42 21 L 38 21 L 38 15 C 38 7.8324839 32.167516 2 25 2 z M 25 4 C 31.086484 4 36 8.9135161 36 15 L 36 21 L 14 21 L 14 15 C 14 8.9135161 18.913516 4 25 4 z M 8 23 L 42 23 C 42.56503 23 43 23.43497 43 24 L 43 47 C 43 47.56503 42.56503 48 42 48 L 8 48 C 7.4349698 48 7 47.56503 7 47 L 7 24 C 7 23.43497 7.4349698 23 8 23 z M 13 34 A 2 2 0 0 0 11 36 A 2 2 0 0 0 13 38 A 2 2 0 0 0 15 36 A 2 2 0 0 0 13 34 z M 21 34 A 2 2 0 0 0 19 36 A 2 2 0 0 0 21 38 A 2 2 0 0 0 23 36 A 2 2 0 0 0 21 34 z M 29 34 A 2 2 0 0 0 27 36 A 2 2 0 0 0 29 38 A 2 2 0 0 0 31 36 A 2 2 0 0 0 29 34 z M 37 34 A 2 2 0 0 0 35 36 A 2 2 0 0 0 37 38 A 2 2 0 0 0 39 36 A 2 2 0 0 0 37 34 z"
                ></path>
              </svg>
            </span>
            <input
              v-model="password"
              type="password"
              id="password"
              class="rounded-e-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 border border-gray-600"
              placeholder="Password"
            />
          </div>

          <div class="mt-6 flex justify-center">
            <button
              @click="loginHandle"
              to="/dashboard/menu"
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import axios from "axios";
import { data } from "autoprefixer";

export default {
  data() {
    return {
      email: "",
      password: "",
      accessToken: "",
    };
  },
  methods: {
    async loginHandle() {
      Swal.fire({
        title: "Loading...",
        html: `<div class="text-center">
          <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>`,
        allowOutsideClick: false,
        showConfirmButton: false,
        showDenyButton: false,
      });
      try {
        const { data, status } = await axios.post(
          "https://gr2-hr-management-be.onrender.com/user/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        if (status !== 200) {
          return Swal.fire({
            title: "Error",
            text: "Email or Password is incorrect. Please try again!",
            icon: "error",
          });
        }
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "You are now logged in",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Continue",
        }).then(async (result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("email", data.email);
            localStorage.setItem("role", data.role);
            this.$router.push({
              name: "Menu",
              params: { email: data.email, role: data.role },
            });
          }
        });
      } catch (error) {
        return Swal.fire({
          title: "Error",
          text: "Email or Password is incorrect. Please try again!",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style></style>
