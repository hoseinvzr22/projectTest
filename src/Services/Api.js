

import http from "./http";
import config from "./config.json";

export const getApiCountrys=()=>{
    return http.get(`${config.api}/api/countries`)
}
export const getApiCountry=()=>{
    return http.get(`${config.api}/api/countries/Iran`)
}
