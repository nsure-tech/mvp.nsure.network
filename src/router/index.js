import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/insure'
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: "Withdraw" */ '../views/Withdraw.vue')
  },
  {
    path: '/stake-pool',
    name: 'Stake Pool',
    component: () => import(/* webpackChunkName: "StakePool" */ '../views/StakePool.vue')
  },
  {
    path: '/insure',
    name: 'Insure',
    component: () => import(/* webpackChunkName: "Insure" */ '../views/Insure.vue')
  },
  {
    path: '/liquidity-mining',
    name: 'Liquidity Mining',
    component: () => import(/* webpackChunkName: "LiquidityMining" */ '../views/LiquidityMining.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
