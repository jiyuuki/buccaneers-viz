<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <div class="basis-1/2">
            <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl">Ahoy! pick a merchant from our dock</h1>
            <p class="mt-6 text-gray-500 300">
              Media Intelligence Unleashed: J+ Hooked - Elevate Your Awareness, Amplify Your Impact, and Master Your Budget Allocation!
            </p>
          </div>
          <div class="basis-1/4">
            <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              + new client
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid gap-3 grid-cols-3 container px-6 py-16 mx-auto text-center">
    <div
      v-for="(client, index) in clients"
      :key="index"
    >
      <clientCard :client="client" />
    </div>
  </div>
</template>
  
<script>
import data from '@/data.js'
import clientCard from '@/components/ClientCard.vue'
export default {
  name: 'homePage',

  components: {
    clientCard
  },

  props: {
    //
  },

  setup() {
    const clients = data
    console.log({ clients })
    return {
      clients
    }
  }
}
</script>
