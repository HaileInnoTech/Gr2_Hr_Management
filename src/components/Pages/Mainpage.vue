<template>
  <div class="relative isolate overflow-hidden bg-white py-10 sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2
        class="text-4xl font-bold tracking-tight text-blue flex justify-center sm:text-6xl"
      >
        HR Management
      </h2>

      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-6 px-40 text-base lg:flex lg:justify-between lg: leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10"
        >
          <div class="">
            <h3 class="font-semibold flex justify-center">
              Employee Checked In
            </h3>
            <div class="flex justify-center">349</div>
          </div>
          <div class="">
            <h3 class="font-semibold flex justify-center">Time</h3>
            <div class="flex justify-center">{{ currentTime }}</div>
          </div>
          <div class="">
            <h3 class="font-semibold flex justify-center">
              Employee Checked Out
            </h3>
            <div class="flex justify-center">349</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="relative flex items-center my-5 w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden border border-gray-300"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300">
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
                  :to="{ name: 'Individual', params: { email: item.email } }"
                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  >View Profile</router-link
                >
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
            {{ emploteeQty }}
            <span class="font-medium"></span>
            {{}} results
          </p>
        </div>
        <div class="flex items-center justify-center">
          <vue-awesome-paginate
            :total-items="emploteeQty"
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
import axios from "axios";

const currentTime = ref(new Date().toLocaleTimeString());
// Update current time every second
setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString();
}, 1000);
const searchName = ref("");
const employeeData = ref([]);
let start = ref(0);
let end = ref(0);
let currentPage = ref(1);
let itemperPage = ref(8);
let emploteeQty = ref();
let totalPage = ref();
let data = ref();
let rawdata = ref();

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/employeedata");
    emploteeQty = response.data.length;

    totalPage.value = Math.ceil(emploteeQty / itemperPage.value);

    start.value = (currentPage.value - 1) * itemperPage.value;
    end.value = currentPage.value * itemperPage.value;
    rawdata.value = response.data;
    data = response.data;
    employeeData.value = data.slice(start.value, end.value);
  } catch (error) {
    console.error(error);
  }
});
function onClickHandler() {
  start.value = (currentPage.value - 1) * itemperPage.value;
  if (currentPage.value * itemperPage.value > emploteeQty) {
    end.value = emploteeQty;
  } else {
    end.value = currentPage.value * itemperPage.value;
  }
  employeeData.value = data.slice(start.value, end.value);
}

function nextPage() {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
    console.log(emploteeQty);
    start.value = (currentPage.value - 1) * itemperPage.value;
    if (currentPage.value * itemperPage.value > emploteeQty) {
      end.value = emploteeQty;
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
    if (currentPage.value * itemperPage.value > emploteeQty) {
      end.value = emploteeQty;
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
