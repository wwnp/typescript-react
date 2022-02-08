import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type ContexState = {
  isAuth: boolean
}
interface IContext {
  isAuth: boolean
  toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
  isAuth: true,
  toggleAuth: () => { }
})

class Login extends Component {
  static contextType = AuthContext
  contex!: React.ContextType<typeof AuthContext>
  render() {
    const { toggleAuth, isAuth } = this.context;
    return (
      <button onClick={toggleAuth}>
        {isAuth
          ? 'Logout'
          : 'Login'
        }
      </button>
    )
  }
}

const Profile: React.FC = (): React.ReactElement => {
  return (
    <AuthContext.Consumer>
      {
        ({ isAuth }: IContext) => (
          <h1>{
            isAuth
              ? 'You are logged in'
              : 'Please log in'
          }</h1>
        )
      }
    </AuthContext.Consumer>
  )
}

class Context extends Component<{}, ContexState> {
  readonly state = {
    isAuth: false,
    test: 'test'
  }
  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth
    }))
  }
  render() {
    const { isAuth } = this.state
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };
    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile></Profile>
      </AuthContext.Provider>
    )
  }
}
const App: React.FC = () => <Context />;
export default App;
