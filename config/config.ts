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
        { path: '/updateNow', name: 'updateNow', component: '@/pages/update/index' },
        { path: '/ranking', name: 'ranking', component: '@/pages/ranking/index' },
        {
          path: '/map',
          name: 'map',
          routes: [
            {
              path: '/map/science',
              name: 'science',
              component: '@/pages/map/index',
            },
            {
              path: '/map/action',
              name: 'action',
              component: '@/pages/map/index',
            },
            {
              path: '/map/comedy',
              name: 'comedy',
              component: '@/pages/map/index',
            },
            {
              path: '/map/crime',
              name: 'crime',
              component: '@/pages/map/index',
            },
            {
              path: '/map/love',
              name: 'love',
              component: '@/pages/map/index',
            },
            {
              path: '/map/animation',
              name: 'animation',
              component: '@/pages/map/index',
            },
            { component: '@/pages/404' },
          ],
        },
        { path: '/detail/:id', component: '@/pages/detail/index' },
        { path: '/video/:id', component: '@/pages/video/index' },
        { path: '/search', component: '@/pages/search/index' },
        { path: '/statement', component: '@/pages/statement/index' },
        { path: '/msg', component: '@/pages/msg' },
        { path: '/feedback', component: '@/pages/feedback/index' },
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
