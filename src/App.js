import "./App.css";
import { Route, withRouter } from "react-router-dom";
import HeaderWraper from "./components/header/HeaderWraper";
import Navbar from "./components/navbar/navbar";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

import React, { lazy, Suspense } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { setInicialized } from "./components/state/IticializeReducer";
import Preloader from "./components/common/Preloader";

const UsersPageWraper = lazy(() =>
  import("./components/UsersPage/userPageWraper")
);
const DialogsPage = lazy(() => import("./components/dialogPage/DialogsPage"));
const LoginPage = lazy(() => import("./components/loginPage/LoginPage"));
class App extends React.Component {
  componentDidMount() {
    this.props.setInicialized();
  }

  render() {
    if (!this.props.inicialized) return <Preloader />;
    return (
      <div className="App">
        <HeaderWraper />
        <Navbar />
        <Route path="/profile/:id?" render={() => <ProfilePageContainer />} />
        <Suspense fallback={Preloader}>
          <Route path="/dialogs" render={() => <DialogsPage />} />
          <Route path="/users" render={() => <UsersPageWraper />} />
          <Route path="/login" render={() => <LoginPage />} />
        </Suspense>
      </div>
    );
  }
}

let mspStateToProps = (state) => {
  return {
    inicialized: state.inicialize.inicialized,
  };
};

let mapDispatchToProps = {
  setInicialized,
};

export default compose(
  withRouter,
  connect(mspStateToProps, mapDispatchToProps)
)(App);
