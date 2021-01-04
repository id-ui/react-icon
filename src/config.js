let icons = {};

export const configureIcons = (customIcons) => {
  icons = {
    ...icons,
    ...customIcons,
  };
};

export { icons };
