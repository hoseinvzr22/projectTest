import { getApiCountry } from "./../Services/Api";
export const chooseCountry = () => {
  return async (dispatch) => {
    const { data, status } = await getApiCountry();
    console.log(data);
    await dispatch({ type: "Country", payload: data });
  };
};
