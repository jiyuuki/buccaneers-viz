<template>
  <div class="flex flex-col container px-6 py-16 mx-auto text-center">
    <div class="flex justify-start px-15 py-5 mx-8">Overview</div>
    <div class="grid grid-cols-4">
      <div class="max-w-sm px-5 py-2 mx-8 bg-white rounded-md shadow-md 800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-800 400">ROI</span>
          <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full 300 900">i</span>
        </div>

        <div>
          <h1 class="mt-2 text-lg font-semibold text-gray-800 ">3,2</h1>
        </div>
      </div>
      <div class="max-w-sm px-5 py-2 mx-8 bg-white rounded-md shadow-md 800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-800 400">ROI</span>
          <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full 300 900">i</span>
        </div>

        <div>
          <h1 class="mt-2 text-lg font-semibold text-gray-800 ">3,2</h1>
        </div>
      </div>
      <div class="max-w-sm px-5 py-2 mx-8 bg-white rounded-md shadow-md 800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-800 400">ROI</span>
          <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full 300 900">i</span>
        </div>

        <div>
          <h1 class="mt-2 text-lg font-semibold text-gray-800 ">3,2</h1>
        </div>
      </div>
      <div class="max-w-sm px-5 py-2 mx-8 bg-white rounded-md shadow-md">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-800 400">ROI</span>
          <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full 300 900">i</span>
        </div>

        <div>
          <h1 class="mt-2 text-lg font-semibold text-gray-800 ">3,2</h1>
        </div>
      </div>
    </div>
    <div class="flex px-15 py-5 ">
      <div class="h-90 w-full px-5 py-2 mx-8 bg-white rounded-md">
        <img src="@/assets/chart.png" alt="">
      </div>
    </div>
    <div class="flex justify-start px-15 py-5 mx-8">Top recommendations</div>
    
    <div class="demo-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="1 - Increase budget by 30% on ecology sensitive audience" name="1">
          <div>
            <img src="@/assets/collaps1.png" alt="">
          </div>
          <div class="recommendation">
            <ValidateRecommendation />
          </div>
        </el-collapse-item>
        <el-collapse-item title="2 - Increase budget by 20% on Student audience" name="2">
          <div>
            <img src="@/assets/collaps1.png" alt="">
          </div>
        </el-collapse-item>
        <el-collapse-item title="3 - Decrease budget by 10% on Fashion Lovers audience" name="3">
          <div>
            <img src="@/assets/collaps1.png" alt="">
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue'
import ValidateRecommendation from '@/components/ValidateRecommendation.vue'

export default {
  name: 'clientDetail',

  components: {
    ValidateRecommendation
  },

  setup() {
    const activeNames = ref(['1'])
    const handleChange = () => {
      console.log('val')
    }
    return {
      activeNames,
      handleChange
    }
  }
}
</script>

<style scoped>
.recommendation {
  text-align: end;
}
::v-deep .recommendation .hack {
  background: #0169df;
  color: white;
  padding: 8px;
  border-radius: 7px;
}
</style>
