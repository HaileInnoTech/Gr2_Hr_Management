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
    <ul class="grid grid-cols-1 sm:grid-cols-4 gap-4  ">
      <li class=" " v-for="(item, index) in employeeData" :key="index">
        <div class="max-w-xs ">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src="../../assets/user.png"
                alt="{{ item.id }}"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {{ item.firstName + ' ' + item.lastName}}
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{{ item.position }}</p>
              </div>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td class="px-2 py-2">{{item.address}}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{{ item.phone }}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{{item.email}}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3">
                <a
                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                  >View Profile</a
                >
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const currentTime = ref(new Date().toLocaleTimeString());

// Update current time every second
setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString();
}, 1000);

const employeeData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/employeedata");
    employeeData.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
