<template>
  <div class="relative isolate overflow-hidden bg-white sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-6 px-40 my-10 text-base lg:flex lg:justify-between lg: leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10"
      >
        <router-link
          to="/dashboard/menu/employee/data"
          class="flex-row justify-center"
        >
          <img src="../../assets/image.png" alt="" />
          <div class="text-2xl flex justify-center">Employee Management</div>
        </router-link>
        <div class="flex-row justify-center">
          <img src="../../assets/Screenshot 2024-03-20 012555.png" alt="" />
          <div class="text-2xl flex justify-center">Recruitment</div>
        </div>
        <div class="flex-row justify-center">
          <img src="../../assets/Screenshot 2024-03-20 012622.png" alt="" />
          <div class="text-2xl flex justify-center">Report & Analysis</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
