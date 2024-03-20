<template>
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

    <div class="flex justify-center mt-10">
      <table class="min-w-full bg-white shadow-md rounded-xl">
        <thead>
          <tr class="bg-blue-gray-100 text-gray-700">
            <th class="py-3 px-4 text-left">ID</th>
            <th class="py-3 px-4 text-left">Employee Email</th>
            <th class="py-3 px-4 text-left">Salary (per hour)</th>
            <th class="py-3 px-4 text-left">WeaklyHours</th>
            <th class="py-3 px-4 text-left">Bonus</th>
            <th class="py-3 px-4 text-left">Monthly Salary</th>

            <th class="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody class="text-blue-gray-900">
          <tr
            class="border-b border-blue-gray-200"
            v-for="item in payrollData"
            :key="item"
          >
            <td class="py-3 px-1">{{ item.id }}</td>
            <td class="py-3 px-4">{{ item.email }}</td>
            <td class="py-3 px-4">{{ item.base_salary }}</td>
            <td class="py-3 px-4">{{ item.total_work_hour }}</td>
            <td class="py-3 px-4  flex flex-row justify-end">

              <div class="basic-1/2 ">{{ item.bonus }}</div>
              <button
                class="  pl-2 basis-1/2 justify-end flex"
                @click="handleBonus(item.email)"
              >
                <img src="../../assets/pencil.png" alt="" class="h-5 w-5" />
              </button>
            </td>

            <td class="py-3 px-4">{{ item.actual_pay }}</td>

            <td class="py-3 px-4">
              <a href="#" class="font-medium text-red-600 hover:text-red-800"
                >Suspending</a
              >
            </td>
          </tr>
          <!-- Add more rows as needed -->
          <tr class="border-b border-blue-gray-200">
            <td class="py-3 px-4 font-medium">Total Wallet Value</td>
            <td class="py-3 px-4"></td>
            <td class="py-3 px-4"></td>
            <td class="py-3 px-4 font-medium">$22525.00</td>
            <td class="py-3 px-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      searchName: "",
      payrollData: [],
    };
  },
  created() {
    this.fetchPayrollData();
    console.log(this.payrollData.email);
  },
  methods: {
    async fetchPayrollData() {
      try {
        const response = await axios.get(
          "https://gr2-hr-management-be.onrender.com/employeepayrolldata"
        );
        console.log(response.data);
        this.payrollData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    handleBonus(email) {
      Swal.fire({
        title: "Enter bonus amount",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        preConfirm: async (bonus) => {
          try {
            console.log(email, bonus);

            const url = `
            https://gr2-hr-management-be.onrender.com/updateemployeebonus/`;

            const response = await fetch(
              url + "?" +
                new URLSearchParams({
                  email: email,
                  bonus: bonus,
                }),
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
              return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `);
            }
            this.fetchPayrollData();
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
        Request failed: ${error}
      `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Bonus updated successfully",
            text: "Employee bonus has been updated",
           
          });
        }
      });
    },
  },
};
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
