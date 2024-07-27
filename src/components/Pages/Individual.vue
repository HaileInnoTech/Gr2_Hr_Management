<template>
  <div class="relative isolate overflow-hidden bg-white py-10 sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-3 hidden lg:block"
      >
        Exit
      </button>
      <h2
        class="text-4xl font-bold tracking-tight text-blue-500 justify-center sm:text-6xl flex"
      >
        Employee information
      </h2>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
      <div class="flex flex-row">
        <div
          class="basis-1/3 flex justify-center w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        >
          <img src="../../assets/user.png" alt="" class="" />
        </div>

        <div class="basis-2/3 ml-10">
          <h1
            class="font-semibold text-3xl text-blue-500 underline flex justify-center"
          >
            Personal Information
          </h1>
          <div class="grid grid-rows-3 grid-flow-col gap-4 pt-5">
            <div class="flex justify-start">
              <strong class="">Full Name:</strong>
              <div class="pl-10">
                {{ data.firstName + " " + data.lastName }}
              </div>
            </div>
            <div class="flex justify-start">
              <strong>Date of Birth: </strong>
              <div class="pl-10">{{}}</div>
            </div>
            <div class="flex justify-start">
              <strong>Gender: </strong>
              <div class="pl-10">{{ data.gender }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Phone Number: </strong>
              <div class="pl-10">{{ data.phone }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Email: </strong>
              <div class="pl-10">{{ data.email }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Resume: </strong>
              <div class="pl-10">{{}}</div>
            </div>
          </div>

          <h1
            class="font-semibold text-3xl text-blue-500 underline flex justify-center pt-5"
          >
            Work Information
          </h1>

          <div class="grid grid-rows-3 grid-flow-col gap-4 pt-5">
            <div class="flex justify-start">
              <strong>Staff ID:</strong>
              <div class="pl-10">{{ data.id }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Department: </strong>
              <div class="pl-10">{{ data.department }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Position: </strong>
              <div class="pl-10">{{ data.position }}</div>
            </div>
            <div class="flex justify-start">
              <strong>Day Joined: </strong>
              <div class="pl-10">{{}}</div>
            </div>
            <div class="flex justify-start">
              <strong>Hour Rate: </strong>
              <div class="pl-10">{{}}</div>
            </div>
            <div class="flex justify-start">
              <strong>PTO: </strong>
              <div class="pl-10">{{}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-20 border-blue-500 border-2">
      <p
        class="text-base font-bold tracking-tight text-blue-500 justify-center sm:text-6xl flex mt-5"
      >
        Attendance Report
      </p>
      <div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select Month</label
        >
        <select
          v-model="selected"
          @change="updateChart"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option v-for="(month, index) in month" :key="index" :value="month">
            {{ month }}
          </option>
        </select>
      </div>

      <div class="flex-row flex my-5">
        <div class="basis-2/3 flex" id="mychart">
          <Bar
            :data="chartData2"
            :options="chartOptions"
            :style="myStyles"
            :key="selected"
          />
        </div>
        <div class="basis-1/3 flex">
          <Pie :data="pieData" :options="pieOptions" :style="pieStyle" />
        </div>
      </div>
      <p
        class="text-base font-bold tracking-tight text-blue-500 justify-center sm:text-6xl flex my-10"
      >
        Recent Activities
      </p>

      <div class="pb-10">
        <div
          v-for="(value, index) in userBacklog"
          :key="index"
          class="flex justify-between"
        >
          <div><strong>Date: </strong> {{ value.date }}</div>
          <div><strong>Check In: </strong> {{ value.checkin }}</div>
          <div><strong>Check Out: </strong> {{ value.checkout }}</div>
          <div><strong>Check Out: </strong> {{ value.checkout }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Bar, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  PieController,
  Legend,
  BarElement,
  CategoryScale,
  BarController,
  ArcElement,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar, Pie },
  data() {
    return {
      selected: "",
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      chartData2: {
        labels: [],
        datasets: [
          {
            label: "Attendance",
            backgroundColor: "rgba(0, 0, 255, 1)",
            data: [],
          },
        ],
      },
      data: {},
      email: "",
      loaded: false,
      userAttendance: [],
      userBacklog: [],
    };
  },
  async beforeMount() {
    this.chartData2 = this.chartData();
    this.email = this.$route.params.curEmp;

    const userData = await axios
      .get("https://gr2-hr-management-be.onrender.com/employeedatabyemail", {
        params: {
          email: this.email,
        },
      })
      .then((response) => {
        return response.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
    this.data = userData;

    const userAttendance = await axios
      .get("https://gr2-hr-management-be.onrender.com/counattendancebyemail", {
        params: {
          email: this.email,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.userBacklog = userAttendance.slice(0, userAttendance.length - 1);
    const total = userAttendance[userAttendance.length - 1];
    this.userAttendance = total;
  },

  computed: {
    myStyles() {
      return {
        position: "relative",
      };
    },

    chartOptions() {
      return {
        type: "line",
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Floating Bar Chart",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
            color: "rbg(0, 0, 255)",
          },
          y: {
            color: "blue",
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      };
    },
    pieStyle() {
      return {
        position: "relative",
      };
    },
    pieData() {
      return {
        Title: "Attendance",
        labels: ["Present", "Absent", "Late"],
        datasets: [
          {
            label: "Attendance",
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            data: [30, 20, 50],
          },
        ],
      };
    },
    pieOptions() {
      return {
        type: "pie",
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Floating Bar Chart",
          },
        },
      };
    },
  },
  methods: {
    async updateChart() {
      console.log(this.selected);
      // Fetch data based on selected month
      // Example: const data = await fetchData(this.selected);
      // Replace the following line with your actual data
      this.chartData2.labels = [this.selected];
      this.chartData2.datasets[0].data = [12, 19, 3]; // Replace with actual data
    },
    chartData() {
      return {
        labels: this.month,
        datasets: [
          {
            label: "Attendance",
            backgroundColor: "rgba(0, 0, 255, 1)",
            data: [12, 19, 3, 5, 2, 3, 7, 8, 9, 10, 11, 12],
          },
        ],
      };
    },
  },
};
</script>

<style></style>
