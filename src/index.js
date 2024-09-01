// @ts-check
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes, routeList } from "./routes";
import components from "./components";
import App from "./App.vue";

// Start
async function start() {
    // Create App
    const app = createApp(App);
    const globals = app.config.globalProperties;

    // Register components
    Object.entries(components).forEach(([name, component]) => app.component(name, component));

    // Register additional global properties / functions
    globals.$routeList = routeList;
    globals.$components = components;

    // Create router
    const router = createRouter({ history: createWebHistory(), routes });

    // Configure app
    app.use(router);

    // Provide global properties
    Object.keys(globals).forEach(name => app.provide(name, globals[name]));

    // Mount
    app.mount("#app");
}

// Bootup
start();
