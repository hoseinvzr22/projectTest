export const GlobalCountryReducer = (state = [], action) => {
  switch (action.type) {
    case "Countrys":
      return [...action.payload];
   
    default:
      return state;
  }
};
