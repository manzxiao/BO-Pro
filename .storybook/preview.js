// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
};
