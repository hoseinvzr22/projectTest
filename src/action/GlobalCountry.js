import {getApiCountrys} from "./../Services/Api";
export const Global = () => {
  return async (dispatch) => {
    const { data, status } = await getApiCountrys();
    console.log(data);
    await dispatch({ type: "Countrys", payload: data.countries });
  };
};
