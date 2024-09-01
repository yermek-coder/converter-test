import { ref } from "vue";

export const currencies = [
    { title: "USD", value: "usd" },
    { title: "EUR", value: "eur" },
    { title: "RUB", value: "rub" }
];
export const activeCurrency = ref(currencies[0]);
