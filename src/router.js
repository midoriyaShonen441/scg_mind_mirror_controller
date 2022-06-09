import { createWebHistory, createRouter } from "vue-router";
import MainControl from "./components/MainControl.vue";
import RegisterPage from "./components/RegisterPage.vue";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "RegistPage",
    component: RegisterPage,
  },
  {
    path: "/control",
    name: "MainControl",
    component: MainControl,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;