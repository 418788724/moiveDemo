import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Oops',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
