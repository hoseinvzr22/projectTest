import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Persons from "./components/Persons";
import Show from "./components/Show";
import { Global } from "./action/GlobalCountry";
import { chooseCountry } from "./action/chooseCountry";

const App = () => {
  const countrys = useSelector((state) => state.countrys);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Global());
    dispatch(chooseCountry());
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Persons} />
        <Route
          path="/show-information"
          render={() => <Show countrys={countrys} country={country} />}
        />
      </Switch>
    </div>
  );
};

export default App;
