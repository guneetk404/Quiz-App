
import Vue from "vue";
import VueRouter from "vue-router";
import addQuiz from "../views/addQuiz.vue";
import AdminQuiz from "../views/AdminQuiz.vue";

Vue.use(VueRouter);

const routes = [
  {
    name:'adminQuiz',
    path:'/',
    component:AdminQuiz
  },
    {
      name:'addQuiz',
      path:'/addQuiz',
      component:addQuiz
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;