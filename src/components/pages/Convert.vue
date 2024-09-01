<template>
    <div class="container container-sm py-3">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal text-body-emphasis">Конвертер валют</h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-body">
                        <div>
                            <div class="mb-3 d-flex gap-1">
                                <input v-model="input1" @input="convertCurrency('input1')" type="number" class="form-control flex-fill" />
                                <select v-model="currency1" class="form-select">
                                    <option v-for="curr in currencies" :key="curr.value" :value="curr.value">{{ curr.title }}</option>
                                </select>
                            </div>
                            <div class="d-flex gap-1">
                                <input v-model="input2" @input="convertCurrency('input2')" type="number" class="form-control flex-fill" />
                                <select v-model="currency2" class="form-select">
                                    <option v-for="curr in currencies" :key="curr.value" :value="curr.value">{{ curr.title }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { currencies } from "@/stores/currency";
import { reactive, ref, watch } from "vue";
import currencyService from "@/services/currency";

const currency1 = ref(currencies[0].value);
const currency2 = ref(currencies[1].value);
const input1 = ref(1);
const input2 = ref(0);

const conversionData = reactive({});

function convertCurrency(inputField) {
    if (inputField === "input1") {
        const rateKey = `${currency1.value}-${currency2.value}`;
        const rate = conversionData[rateKey];
        input2.value = (input1.value * rate).toFixed(2);
    } else {
        const rateKey = `${currency2.value}-${currency1.value}`;
        const rate = conversionData[rateKey];
        input1.value = (input2.value * rate).toFixed(2);
    }
}

watch(currency1, () => {
    convertCurrency("input1");
});
watch(currency2, () => {
    convertCurrency("input2");
});

currencyService.getConversions().then(result => {
    Object.assign(conversionData, result);
});
</script>

<script>
export default {
    route: { name: "convert", path: "/convert" }
};
</script>
