// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', name: 'home', component: '@/pages/index' },
        { path: '/updateNow', name: 'updateNow', component: '@/pages/updateNow' },
        { path: '/ranking', name: 'ranking', component: '@/pages/ranking' },
        { path: '/map', name: 'map', component: '@/pages/map' },
        { path: '/detail/:id', component: '@/pages/detail/index' },
        { path: '/video/:id', component: '@/pages/video/index' },
        { path: '/statement', component: '@/pages/statement' },
        { path: '/msg', component: '@/pages/msg' },
        { path: '/feedback', component: '@/pages/feedback' },
        { component: '@/pages/404' },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: defaultSettings.Theme,
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
