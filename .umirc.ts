import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Oops',
  dva: {},
  plugins: [],
  routes: [
    {
      path: '/',
      component: '@/layouts/DrawerLayout/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
});
