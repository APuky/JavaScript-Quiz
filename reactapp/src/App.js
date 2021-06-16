import Main from "./components/Main";
import "./styles/Main.scss";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/account/auth/Login";
import Signup from "./components/account/auth/Signup";
import Logout from "./components/account/auth/Logout";

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
        </Switch>
      </Layout>
    </>
  );
}

export default App;
