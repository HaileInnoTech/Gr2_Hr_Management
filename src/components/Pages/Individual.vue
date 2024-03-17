<template>
  <div class="relative isolate overflow-hidden bg-white py-10 sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <button
        class="bg-blue-500 fixed hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-3 hidden lg:block"
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
      <p
        class="text-base font-bold tracking-tight text-blue-500 justify-center sm:text-6xl flex"
      >
        Attendance Report
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      email: "",
    };
  },
  beforeMount() {
    this.email = this.$route.params.email;
    axios
      .get("http://localhost:4000/employeedatabyemail", {
        params: {
          email: this.email,
        },
      })
      .then((response) => {
        this.data = response.data[0];
        console.log(this.data);
      });
  },
  mounted() {
    this.email = this.$route.params.email;
    this.message = "Component is mounted!";
  },
};
</script>

<style></style>
