import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import BadgeHome from "../pages/BadgeHome";
import Layout from "./Layout"
import Page404 from "../pages/Page404";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome}/>
          <Route exact path="/badges" component={Badges}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
          <Route path="/404" component={Page404}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;