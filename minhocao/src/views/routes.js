export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/salas',
    name: 'Salas',
    component: () => import('@/views/Salas.vue'),
  },
  {
    path: '/salas/:id',
    name: 'Detalhes',
    component: () => import('@/views/Detalhes.vue'),
  },
];
