<template>
  <Navigation />

  <div class="relative isolate overflow-hidden bg-white sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-6 px-40 my-10 text-base lg:flex lg:justify-between lg: leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10"
      >
        <router-link
          to="/dashboard/menu/employee/data"
          class="flex-row justify-center w-full border-r-2 border-gray-900"
          
        >
          <div class="text-2xl flex justify-center w-full" exact
          :class="{
            'bg-blue-500':
              $route.path === '/dashboard/menu/employee/data' ||
              $route.path.startsWith(
                '/dashboard/menu/employee/data/individual'
              ),
          }">
            Employee Information
          </div>
        </router-link>
        <router-link
          to="/dashboard/menu/employee/payroll"
          class="flex-row justify-center w-full border-r-2 border-gray-900"
         
        >
          <div class="text-2xl flex justify-center"  
          exact
          :class="{
            'bg-blue-500':
              $route.path === '/dashboard/menu/employee/payroll',
          }">Payroll Mangement</div>
        </router-link>
        <div class="flex-row justify-center w-full">
          <div class="text-2xl flex justify-center">Overall Tracking</div>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import router from "../router";
import Navigation from "../Navigate/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style></style>
