import Login from "./pages/Login";
import Main from "./pages/Main";
import "./styles/Main.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
