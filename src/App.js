import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import DialogsPage from "./components/dialogPage/DialogsPage";
import UsersPageWraper from "./components/UsersPage/userPageWraper";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/profile/:id?" render={() => <ProfilePageContainer />} />
        <Route path="/dialogs" render={() => <DialogsPage />} />
        <Route path="/users" render={() => <UsersPageWraper />} />
      </div>
    </Router>
  );
}

export default App;
