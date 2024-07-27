<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="relative flex items-center my-5 w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden border border-gray-300"
    >
      <div class="grid place-items-center h-full w-12 text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        v-model="searchName"
        placeholder="Search employee by Name"
      />
    </div>
    <div
      v-show="!isUser"
      class="relative flex justify-end items-center my-5 w-full h-12 "
    >
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
Add User      </button>
    </div>

    <div>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900"
                  >
                    Register new Accouter
                  </DialogTitle>
                  <div class="mt-2">
                    <div>
                      <form>
                        <div class="mb-6">
                          <label
                            for="id"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >ID</label
                          >
                          <input
                            type="text"
                            id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                            placeholder="sws00129"
                            required
                          />
                        </div>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >First name</label
                            >
                            <input
                              type="text"
                              id="first_name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="last_name"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Last name</label
                            >
                            <input
                              type="text"
                              id="last_name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="Doe"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="gender"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Gender</label
                            >
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                              <option selected>Choose one</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="NA">Not Prefer</option>
                            </select>
                          </div>

                          <div>
                            <label
                              for="phone"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Phone number</label
                            >
                            <input
                              type="tel"
                              id="phone"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="123-45-678"
                              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="Address"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Address</label
                            >
                            <input
                              type="text"
                              id="address"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="78/K4 Cong Hoa"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="Department"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Department</label
                            >
                            <input
                              type="text"
                              id="Department"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="Technical"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="Position"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Position</label
                            >
                            <input
                              type="text"
                              id="Position"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                              placeholder="Technical Intern"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="role"
                              class="block mb-2 text-sm font-medium text-gray-900"
                              >Role</label
                            >
                            <select
                              id="role"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                              <option selected>Choose one</option>
                              <option value="admin">Admin</option>
                              <option value="user">User</option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-6">
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Email address</label
                          >
                          <input
                            type="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                            placeholder="john.doe@company.com"
                            required
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Password</label
                          >
                          <input
                            v-model="password"
                            type="password"
                            id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                            placeholder="•••••••••"
                            required
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            for="confirm_password"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Confirm password</label
                          >
                          <input
                            v-model="confirm_password"
                            type="password"
                            id="confirm_password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="•••••••••"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="mt-4 flex justify-around">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      @click="signinHandle"
                    >
                      Register
                    </button>
                    <button
                      type="reset"
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Reset
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <li class=" " v-for="(item, index) in employeeData" :key="index">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src="../../assets/user.png"
                alt="{{ item.id }}"
              />
            </div>
            <div class="p-2">
              <h3
                class="text-center text-xl text-gray-900 font-medium leading-8"
              >
                {{ item.firstName + " " + item.lastName }}
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{{ item.position }}</p>
              </div>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td class="px-2 py-2">{{ item.address }}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{{ item.phone }}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{{ item.email }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3">
                <router-link
                  :to="{
                    name: 'Individual',
                    params: { role: role, email: email, curEmp: item.email },
                  }"
                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  >View Profile</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div class="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          @click="prePage"
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >Previous</a
        >
        <a
          href="#"
          @click="nextPage"
          class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >Next</a
        >
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            {{ start }}
            <span class="font-medium"></span>
            {{ " " }}
            to
            {{ end }}
            <span class="font-medium"></span>
            {{ " " }}
            of
            {{ employeeQty }}
            <span class="font-medium"></span>
            {{}} results
          </p>
        </div>
        <div class="flex items-center justify-center">
          <vue-awesome-paginate
            :total-items="employeeQty"
            v-model="currentPage"
            :items-per-page="8"
            :max-pages-shown="3"
            :hide-prev-next="false"
            :on-click="onClickHandler"
            :hide-prev-next-when-ends="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, compile, watch } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
const isOpen = ref(false);

import axios from "axios";
import { defineProps } from "vue";
import Swal from "sweetalert2";
defineProps(["email", "role"]);

const searchName = ref("");
const employeeData = ref([]);
let start = ref(0);
let end = ref(0);
let currentPage = ref(1);
let itemperPage = ref(8);
let employeeQty = ref();
let totalPage = ref();
let data;
let rawdata = ref();

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
const isUser = ref(false);

const checkCurrentUser = () => {
  const currentUserRole = localStorage.getItem("role");
  isUser.value = currentUserRole === "user";
};

onMounted(async () => {
  const accessToken = localStorage.getItem("accessToken");
  checkCurrentUser();

  try {
    const  response = await axios.get(
      "https://gr2-hr-management-be.onrender.com/employeedata",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    data =   response.data;
    employeeQty.value = data.length;
      
      totalPage.value = Math.ceil(employeeQty / itemperPage.value);
      start.value = (currentPage.value - 1) * itemperPage.value;
      end.value = currentPage.value * itemperPage.value;
      rawdata.value = data;
      employeeData.value = data.slice(start.value, end.value);
      
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You are not authorized! Please login again!",
    });
  }
});

function onClickHandler() {
  start.value = (currentPage.value - 1) * itemperPage.value;
  if (currentPage.value * itemperPage.value > employeeQty) {
    end.value = employeeQty;
  } else {
    end.value = currentPage.value * itemperPage.value;
  }
  employeeData.value = data.slice(start.value, end.value);
}

function nextPage() {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
    console.log(employeeQty);
    start.value = (currentPage.value - 1) * itemperPage.value;
    if (currentPage.value * itemperPage.value > employeeQty) {
      end.value = employeeQty;
    } else {
      end.value = currentPage.value * itemperPage.value;
    }

    employeeData.value = data.slice(start.value, end.value);
  } else {
    currentPage.value = 1;
    start.value = (currentPage.value - 1) * itemperPage.value;
    end.value = currentPage.value * itemperPage.value;
    employeeData.value = data.slice(start.value, end.value);
  }
}
function prePage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    start.value = (currentPage.value - 1) * itemperPage.value;
    end.value = currentPage.value * itemperPage.value;
    employeeData.value = data.slice(start.value, end.value);
  } else {
    currentPage.value = totalPage.value;
    start.value = (currentPage.value - 1) * itemperPage.value;
    if (currentPage.value * itemperPage.value > employeeQty) {
      end.value = employeeQty;
    } else {
      end.value = currentPage.value * itemperPage.value;
    }
    employeeData.value = data.slice(start.value, end.value);
  }
}
const filterInput = computed(() => {
  const newdata = [];
  if (!searchName.value || !searchName.value.trim()) {
    return employeeData.value;
  } else {
    const searchTerm = searchName.value.trim().toLowerCase();
    const result = rawdata.value.filter((item, key) => {
      if (
        item.email.toLowerCase().includes(searchTerm) ||
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.position.toLowerCase().includes(searchTerm)
      ) {
        newdata.push(item);
      }
    });
    return newdata;
  }
});
watch(searchName, (newValue, oldValue) => {
  if (newValue === "") {
    employeeData.value = data.slice(start.value, end.value);
  } else {
    employeeData.value = filterInput.value;
  }
});
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
