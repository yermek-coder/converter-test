import api from "@/services/api";

export class CurrencyService {
    getConversions() {
        return api.get("https://status.neuralgeneration.com/api/currency");
    }

    convertCurrency(conversionData, from, to, value) {
        return conversionData[`${from}-${to}`] * value;
    }
}

export default new CurrencyService();
