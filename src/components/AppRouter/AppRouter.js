import React from "react";
import { observer } from "mobx-react-lite";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes/Routes";
import { SHOP_ROUTE } from "../../utils/constants";
import {useStore} from "../../hooks/useStore";

export const AppRouter = observer(() => {
  const { user } = useStore();
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
});
