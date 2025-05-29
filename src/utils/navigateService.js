// utils/navigateService.js
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (...args) => {
  if (navigator) {
    navigator(...args);
  }
};
