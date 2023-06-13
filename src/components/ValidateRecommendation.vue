<template>
    <button class="hack" text @click="dialogFormVisible = true">
        LET'S APPLY THE HACK!
    </button>

    <el-dialog v-model="dialogFormVisible" title="Valide Recommandation">
            <div class="flex flex-col items-start justify-between">
                <div class="flex items-center">
                    <p>
                        <svg class="tendency-icon h-5 w-5 text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="7" y1="7" x2="17" y2="17" />  <polyline points="17 8 17 17 8 17" /></svg>
                    </p>
                    <p class="text-sm mt-2 text-gray-600 300" tabindex="0" role="link">Fashion Lovers budget decrease by <strong>10%</strong></p>
                </div>
                <div class="flex items-center">
                    <p>
                        <svg class="tendency-icon h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                    </p>
                    <p class="text-sm mt-2 text-gray-600 300" tabindex="0" role="link">Millennials increase budget by <strong>10%</strong></p>
                </div>
            </div>

        <div class="recommendation-container flex flex-col items-start justify-between">
            <h2 class="text-lg font-semibold text-purple-700 capitalize ">Estimated incremental revenue increase by 30%</h2>
        </div>


        <div class="form-container">
            <el-form :model="form" :label-position="'top'" ref="formRef">
                <el-form-item label="Application type" prop="type">
                    <el-select v-model="form.type" placeholder="">
                        <el-option label="Manual" value="manual" />
                        <el-option label="Automatique" value="auto" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-checkbox label="Send notification by email" name="isSend" v-model="form.isSend"  />
                </el-form-item>
                <div v-if="form.isSend">
                    <el-form-item label="Recipients" prop="recipients">
                        <el-select v-model="form.recipients" placeholder="">
                            <el-option label="john.doe@jellyfish.com" value="john.doe@jellyfish.com" />
                            <el-option label="ishita.mishra@jellyfish.com" value="ishita.mishra@jellyfish.com" />
                            <el-option label="theo.blou@jellyfish.com" value="theo.blou@jellyfish.com" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input :autosize="{ minRows: 2, maxRows: 4 }" v-model="form.email" type="textarea" />
                    </el-form-item>
                </div>
            </el-form>
        </div>


        <div class="flex justify-end mt-6">
            <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-400 rounded-lg hover:bg-gray-300 lg:mx-0 lg:w-auto focus:outline-none" >
                CANCEL
            </button>
            <button @click="dialogFormVisible = false" class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none" >
                SEND
            </button>
        </div>

    </el-dialog>
</template>

<style>
.el-button--text {
    margin-right: 15px;
}
.el-select {
    width: 300px;
}
.el-input {
    width: 300px;
}
.dialog-footer button:first-child {
    margin-right: 10px;
}

.tendency-icon {
    transform: translateY(3px);
}

.form-container {
    margin-top: 30px;
}

.recommendation-container {
    margin-top: 30px;
}

.email-input {
    height: 100px;
}

</style>

<script>

import {ref} from "vue";

export default {
    name: 'ValidateRecommendation',
    setup() {
        let dialogFormVisible = ref(false);
        const formLabelWidth = '140px'

        let form = ref({
            type: '',
            isSend: false,
            recipients: [],
            email: 'Dear [Name],\n' +
                'Strategic actions have been made regarding your media budget allocation on YouTube to drive incremental revenue \n' +
                'growth while ensuring effective audience engagement:\n' +
                'Fashion Lovers Budget: We have reduced the budget for the Fashion Lovers segment by 10% to maximize your return on investment.\n' +
                'Millennials Budget: We have increased the budget for the Millennials segment by 10% to tap into their purchasing power.\n' +
                'Based on J+ Hooked analysis and historical data, we anticipate a significant 30% increase in incremental revenue as a result.\n' +
                'If you have any questions or require further clarification, don\'t hesitate to reach out to your dedicated account manager.\n' +
                'Thank you for your trust in our expertise.\n' +
                'Best regards,\n' +
                'Your Jellyfish team'
        })


        return {
            dialogFormVisible,
            form,
            formLabelWidth,
        }
    }
}
</script>
