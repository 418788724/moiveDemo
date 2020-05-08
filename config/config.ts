import { defineConfig } from 'umi';
import { Settings } from './defaultSettings';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  manifest: {
    basePath: '/',
  },
  dva: {
    hmr: true,
  },
  targets: {
    ie: 11,
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: require('../src/utils/routes'),
    },
    {
      component: '@/pages/404',
    },
  ],
  theme: Settings.Theme,
});
