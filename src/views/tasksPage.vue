<template>
  <section class="container px-4 mx-auto">
    <h2 class="text-lg font-medium text-gray-800 ">This month</h2>
    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200  md:rounded-lg">

            <table class="min-w-full divide-y divide-gray-200 ">
              <thead class="bg-gray-50 ">
              <tr>
                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                    Recommandations
                </th>

                <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                  People
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                  Status
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Priority</th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Action</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200  ">
              <tr v-for="task in tasks" :key="task.id">
                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div>
                   {{task.recommandation}}
                  </div>
                </td>
                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                  {{task.people}}
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <button v-if="task.status === 'done'" class="px-2 py-1 text-xs text-white transition-colors bg-green-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'reverted'" class="px-2 py-1 text-xs text-white transition-colors bg-purple-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'sent'" class="px-2 py-1 text-xs text-white transition-colors bg-blue-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'rejected'" class="px-2 py-1 text-xs text-white transition-colors bg-red-500 rounded-lg">{{ task.status }}</button>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <span v-if="task.priority === 5" class="font-bold">High</span>
                  <span v-if="task.priority === 3">Medium</span>
                  <span v-if="task.priority === 1">Low</span>
                </td>

                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <button v-if="task.status !== 'done'" class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Revert
                  </button>
                  <button v-if="task.status === 'done'"  class="px-6 py-2 font-medium bg-gray-400 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg ">
                    Revert
                  </button>
                </td>
              </tr>

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container px-4 pt-20 mx-auto">
    <h2 class="text-lg font-medium text-gray-800 ">Previous month</h2>
    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200  md:rounded-lg">

            <table class="min-w-full divide-y divide-gray-200 ">
              <thead class="bg-gray-50 ">
              <tr>
                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                    Recommandations
                </th>

                <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                  People
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                  Status
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Priority</th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Action</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200  ">
              <tr v-for="task in tasksPrevious" :key="task.id">
                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div>
                   {{task.recommandation}}
                  </div>
                </td>
                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                  {{task.people}}
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <button v-if="task.status === 'done'" class="px-2 py-1 text-xs text-white transition-colors bg-green-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'reverted'" class="px-2 py-1 text-xs text-white transition-colors bg-purple-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'sent'" class="px-2 py-1 text-xs text-white transition-colors bg-blue-500 rounded-lg">{{ task.status }}</button>
                  <button v-if="task.status === 'rejected'" class="px-2 py-1 text-xs text-white transition-colors bg-red-500 rounded-lg">{{ task.status }}</button>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <span v-if="task.priority === 5" class="font-bold">High</span>
                  <span v-if="task.priority === 3">Medium</span>
                  <span v-if="task.priority === 1">Low</span>
                </td>

                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <button v-if="task.status !== 'done'" class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Revert
                  </button>
                  <button v-if="task.status === 'done'"  class="px-6 py-2 font-medium bg-gray-400 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg ">
                    Revert
                  </button>
                </td>
              </tr>

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { onMounted } from 'vue'

export default {
  name: 'homePage',

  components: {
    //
  },

  props: {
    //
  },

  setup() {
    const tasks = [{
      id: "1",
      recommandation: 'Active automatic custom bidding development to define impression...',
      people: 'Thomas',
      status: "done",
      priority: 5
    }, {
      id: "1",
      recommandation: 'Increase budget by 30% on ecology sensitive audience',
      people: 'Thomas',
      status: "reverted",
      priority: 5
    }, {
      id: "1",
      recommandation: 'Increase budget by 20% on Student audience',
      people: 'Apolline',
      status: "sent",
      priority: 3
    }, {
      id: "1",
      recommandation: 'Decrease budget by 10% on Fashion Lovers audience',
      people: 'Thomas',
      status: "sent",
      priority: 3
    }, {
      id: "1",
      recommandation: 'Increase budget by 10% on Milenials audience',
      people: 'Thomas',
      status: "rejected",
      priority: 1
    }, {
      id: "1",
      recommandation: 'Increase budget by 30% on travelers audience',
      people: 'Thomas',
      status: "done",
      priority: 1
    }]

    const tasksPrevious = [{
      id: "1",
      recommandation: 'Decrease budget by 10% on Fashion Lovers audience',
      people: 'Thomas',
      status: "sent",
      priority: 3
    }, {
      id: "1",
      recommandation: 'Increase budget by 10% on Milenials audience',
      people: 'Thomas',
      status: "rejected",
      priority: 1
    }, {
      id: "1",
      recommandation: 'Increase budget by 30% on travelers audience',
      people: 'Thomas',
      status: "done",
      priority: 1
    }]

    onMounted(() => {
      console.log("Mounted!")
    })

    return {
      tasks,
      tasksPrevious
    }
  }
}
</script>
