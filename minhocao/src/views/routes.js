export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/turnos',
    name: 'Turnos',
    component: () => import('@/views/Turnos.vue'),
  },
  {
    path: '/:periodo/:turno',
    name: 'Salas',
    component: () => import('@/views/Salas.vue'),
  },
  {
    path: '/:periodo/:turno/:sala',
    name: 'Detalhes',
    component: () => import('@/views/Detalhes.vue'),
  },
  {
    path: '/regulamento',
    name: 'Regulamento',
    component: () => import('@/views/Regulamento.vue'),
  },
];
