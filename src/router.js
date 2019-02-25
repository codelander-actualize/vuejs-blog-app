import Vue from 'vue'
import Router from 'vue-router'
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import PostsIndex from './views/posts/Index.vue'
import PostsNew from './views/posts/New.vue'
import PostsShow from './views/posts/Show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/',
      name: 'posts-index',
      component: PostsIndex
    },
    {
      path: '/posts/new',
      name: 'posts-new',
      component: PostsNew
    },
    {
      path: '/posts/:id',
      name: 'posts-show',
      component: PostsShow
    },
  ]
})
