import * as React from 'react';

export interface IAuthContext {
  isAuth: boolean;
  login: () => void;
}

interface IState {
  isAuth: boolean;
}

const AuthContext = React.createContext<IAuthContext>(({
  isAuth: false
} as unknown) as IAuthContext);

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component<{}, IState> {
  state: Readonly<IState> = {
    isAuth: false
  };

  login = () => {
    this.setState({ isAuth: true });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          login: this.login
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthConsumer, AuthProvider };
