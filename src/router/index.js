import Vue from 'vue'
import VueRouter from 'vue-router'

import SignUpForm from '../views/SignUpForm.vue'
import LoginForm from '../views/LoginForm.vue'
import WorkoutPage from '../views/WorkoutPage.vue'
import MembershipPage from '../views/MembershipPage.vue'
import ViewMembers from '../views/ViewMembers.vue'
import LogoutBtn from "../views/LogoutBtn.vue";
import UpdateMember from "../views/UpdateMember.vue";
//import UpdateWorkoutPage from "../views/UpdateWorkoutPage.vue"

import FeedbackPage from '../views/FeedbackPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WorkoutPage',
    component: WorkoutPage,

  },
  //{
  // path: '/updateworkout',
  // name: 'UpdateWorkoutPage',
  // component: UpdateWorkoutPage,

  //},
  {
    path: '/updatemember',
    name: 'UpdateMmeber',
    component: UpdateMember,

  },
  {
    path: '/members',
    name: 'ViewMmebers',
    component: ViewMembers,



  },
  {
    path: '/logout',
    name: 'LogoutBtn',
    component: LogoutBtn,
  },
  {
    path: '/memberships',
    name: 'MembershipPage',
    component: MembershipPage,

  },
  {
    path: '/feedback',
    name: 'FeedbackPage',
    component: FeedbackPage,

  },

  {
    path: '/signup',
    name: 'SignUpForm',
    component: SignUpForm,

  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,

  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
