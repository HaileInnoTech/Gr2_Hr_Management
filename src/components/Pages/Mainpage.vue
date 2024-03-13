<!-- <template>
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
            <h3 class="font-semibold flex justify-center">Employee Checked In</h3>
            <div class="flex justify-center">349</div>
          </div>
          <div class="">
            <h3 class="font-semibold flex justify-center">Time</h3>
            <div class="flex justify-center">{{ currentTime }}</div>
          </div>
          <div class="">
            <h3 class="font-semibold flex justify-center">Employee Checked Out</h3>
            <div class="flex justify-center">349</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTime = ref(new Date().toLocaleTimeString());

// Update current time every second
setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString();
  currentTime.value = curent;
}, 1000);
</script> -->
