import './App.css'
import {useSelector} from 'react-redux'
import {
    AppContainer,
} from "./styles";
import Main from './components/main'
import LoginPage from "./components/Login/loginPage"
import {history} from "./helpers";
import { Router } from "react-router-dom";

const App = () => {
    const { user } = useSelector(
        state => ({ user: state.auth.user })
    );

    return (
        <Router history={history}>
          <AppContainer className={'App'}>
              { user ?
              <Main/> : <LoginPage/>}
          </AppContainer>
        </Router>
    );
}

export default App;
