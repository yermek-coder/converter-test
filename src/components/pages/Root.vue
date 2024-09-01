<template>
    <div class="container py-3">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal text-body-emphasis">Курсы валют</h1>
            <p class="fs-5 text-body-secondary">Активные курсы валют на данный момент</p>
        </div>

        <div class="row mb-3 text-center">
            <div v-for="curr in displayCurrrencies" :key="curr.value" class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">{{ curr.title }}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            1 {{ curr.title }}<small class="text-body-secondary fw-light"> = {{ convertCurrency(curr.value) }} {{ activeCurrency.title }}</small>
                        </h1>
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Конвертировать</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { currencies, activeCurrency } from "@/stores/currency";
import { computed, reactive } from "vue";
import currencyService from "@/services/currency";

const displayCurrrencies = computed(() => currencies.filter(curr => curr.value !== activeCurrency.value.value));
const conversionData = reactive({});

currencyService.getConversions().then(result => {
    Object.assign(conversionData, result);
});

function convertCurrency(from) {
    return currencyService.convertCurrency(conversionData, from, activeCurrency.value.value, 1).toFixed(2);
}
</script>

<script>
export default {
    route: { name: "root", path: "" }
};
</script>
