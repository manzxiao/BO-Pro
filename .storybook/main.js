module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#A0006B',
            'link-color': '#116EBE',
          },
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
