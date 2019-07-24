import React from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/common/header";
// import Footer from "./components/common/footer";
// import SignUpPage from "../src/components/views/signUp";
// import SignInPage from "../src/components/views/signIn";
// import PasswordForgetPage from "../src/components/views/passwordForget";
// // import HomePage from "../src/components/views/home";
import App from "./components/App";
// import PasswordResetPage from "./components/views/passwordReset";
// import NotFound from "./components/views/notFound";
// import ProtectedRoute from "./protected.route";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
      {/* <Route exact path="/" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/forgetpassword" component={PasswordForgetPage} />
      <Route path="/resetpassword" component={PasswordResetPage} /> */}
      {/* <ProtectedRoute path="/app" component={App} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
    {/* <Footer /> */}
  </Router>
);

export default Routes;
