import Vue from 'vue'
import Router from 'vue-router'


const Index = resolve => require(['@/pages/Index'], resolve)
const Category = resolve => require(['@/pages/Category'], resolve)
const CategoryMain = resolve => require(['@/components/category/main'], resolve)
const Car = resolve => require(['@/pages/GoodsCar'],resolve)
const User = resolve => require(['@/pages/User'], resolve)
const Detail = resolve => require(['@/pages/Detail'], resolve)
const Search = resolve => require(['@/pages/Search'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay'], resolve)
const Login = resolve => require(['@/pages/login'], resolve)          //lazyloade 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
        }],
      },
      {
        path: '/car',
        name: '购物车页',
        component: Car
      }, 
      {
        path: '/car/pay',
        name: '支付页',
        component: Pay
      },
      {
        path: '/user',
        name: '用户页',
        component: User,
        meta: {
             requireAuth: true,  // 路由原信息，添加该字段，表示进入这个路由是需要登录才能进入的
         },
      }, {
        path: '/detail',
        name: '详情页',
        component: Detail
      }, {
        path: '/search',
        name: '搜索页',
        component: Search
      },{
        path: '/login',
        name: '登录页',
        component: Login
      }
  ]
})
