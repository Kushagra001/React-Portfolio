import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
// const Resume = lazy(() => import("../pages/Resume"));

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route exact path="/dashboard" component={Home} />
            {/* <Route path="/resume" component={Resume} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};
