import Main from './components/Main'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from './components/Layout'
import Login from './components/account/auth/Login'
import Signup from './components/account/auth/Signup'
import Logout from './components/account/auth/Logout'
import Account from './components/account/Account'
import Scoreboard from './components/Scoreboard'
import Quiz from './components/Quiz'
import Questions from './components/Questions'

import './styles/Main.scss'

function App() {
  const { isLoggedIn } = useSelector((s) => s.auth)

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

          <Route path="/account" exact>
            <Account />
          </Route>
          <Route path="/scoreboard" exact>
            <Scoreboard />
          </Route>
          {isLoggedIn ? (
            <Switch>
              <Route path="/logout" exact>
                <Logout />
              </Route>
              <Route path="/quiz" exact>
                <Quiz />
              </Route>
              <Route path="/questions" exact>
                <Questions />
              </Route>
            </Switch>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Layout>
    </>
  )
}

export default App
