import Main from "./components/Main";
import "./styles/Main.scss";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/account/auth/Login";
import Signup from "./components/account/auth/Signup";
import Logout from "./components/account/auth/Logout";
import Account from "./components/account/Account";
import Scoreboard from "./components/Scoreboard";
import Quiz from "./components/Quiz";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/logout" exact>
            <Logout />
          </Route>
          <Route path="/account" exact>
            <Account />
          </Route>
          <Route path="/scoreboard" exact>
            <Scoreboard />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
          <Route path="/questions" exact>
            <Questions />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
