export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
    children: [
      {
        path: 'inscricao',
        name: 'inscricao',
        component: () => import('@/views/Inscricao.vue'),
      },
      {
        path: 'regulamento',
        name: 'regulamento',
        component: () => import('@/views/Regulamento.vue'),
      },
    ],
  },
];
