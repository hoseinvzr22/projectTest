export const chooseCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case "Country":
      return {...action.payload};

    default:
      return state;
  }
};
