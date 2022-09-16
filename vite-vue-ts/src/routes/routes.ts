export const routes = [
  {
    path: '/helloworld',
    component: () => import('../components/HelloWorld.vue'),
    props: { msg: "Vite + Vue" },
  },
  {
    path: '/ancestor',
    component: () => import('../components/Ancestor.vue'),
  }, {
    path: '/show',
    component: () => import('../components/Show.vue'),
  }, {
    path: '/',
    component: {
      template: `<div>Home</div>`,
    }
  }
]