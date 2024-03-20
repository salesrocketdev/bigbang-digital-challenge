import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: MainLayout,
      children: [
        { path: 'dashboard', component: () => import('@/views/DashboardView.vue') },
        { path: 'payments', component: () => import('@/views/PaymentsView.vue') },
        { path: 'invoices', component: () => import('@/views/InvoicesView.vue') },
        { path: 'insights', component: () => import('@/views/InsightsView.vue') }
      ]
    },

    { path: '/:catchAll(.*)', component: NotFoundView }
  ]
})

export default router
