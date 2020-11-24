import  Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>import('../views/home/home');
const buy = () =>import('../views/buy/buy');
const caot = () =>import('../views/caot/caot');
const person = () =>import('../views/preson/preson')
const detail = () =>import('../views/detail/Detail')
Vue.use(VueRouter)
const routes=[
  {
    path:'',
    redirect:'home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path:'/buy',
    component:buy
  },
  {
    path:'/caot',
    component:caot
  },
  {
    path:'/person',
    component:person
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]
const  router=new VueRouter({
     routes,
     mode:'history'
})

 export default router

