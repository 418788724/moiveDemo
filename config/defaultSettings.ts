type DefaultSettings = {
  navTheme: string;
  Theme: DefaultTheme;
};

type DefaultTheme = {
  'primary-color': string; // 全局主色
};

const Settings: DefaultSettings = {
  navTheme: 'dark',
  Theme: {
    'primary-color': '#0CCDA3',
  },
};

export { Settings };
