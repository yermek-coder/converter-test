<template>
    <header>
        <div class="px-3 py-2 text-bg-dark border-bottom">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-end">
                    <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <RouterLink to="/" class="nav-link text-secondary" :active-class="'text-white'">
                                <Icon icon="house" />
                                Главная
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/convert" class="nav-link text-secondary" :active-class="'text-white'">
                                <Icon icon="calculator" />
                                Конвертация
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="dropdown text-end">
                        <button class="btn btn-secondary dropdown-toggle badge bg-primary fs-4" data-bs-toggle="dropdown">
                            {{ activeCurrency.title }}
                        </button>
                        <ul class="dropdown-menu">
                            <li @click="activeCurrency = currency" v-for="currency in currencies" :key="currency.value" :class="{ active: activeCurrency.value === currency.value }" class="dropdown-item" role="button">{{ currency.title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { currencies, activeCurrency } from "@/stores/currency";
</script>
