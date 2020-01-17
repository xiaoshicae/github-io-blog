import Vue from "vue";
import Router from "vue-router";
import GitHubAwesome from "./GitHubAwesome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "GitHubAwesome",
      component: GitHubAwesome,
      children: []
    }
  ]
});
