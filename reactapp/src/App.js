import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoadingSpinner from './shared/UIElements/LoadingSpinner/LoadingSpinner'
import './styles/Main.scss'

const Main = lazy(() => import('./components/Main'))
const Layout = lazy(() => import('./components/Layout'))
const Login = lazy(() => import('./components/account/auth/Login'))
const Signup = lazy(() => import('./components/account/auth/Signup'))
const Logout = lazy(() => import('./components/account/auth/Logout'))
const Account = lazy(() => import('./components/account/Account'))
const Scoreboard = lazy(() => import('./components/Scoreboard'))
const Quiz = lazy(() => import('./components/Quiz'))
const Questions = lazy(() => import('./components/Questions'))

function App() {
  const { isLoggedIn } = useSelector((s) => s.auth)
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center' }}>
          <LoadingSpinner asOverlay />
        </div>
      }
    >
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
    </Suspense>
  )
}

export default App
