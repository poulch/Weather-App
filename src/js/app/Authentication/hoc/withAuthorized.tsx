import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import AuthorizedWrapper from '../../Shared/components/AuthorizedWrapper';

const withAuthorized = <P extends object>(Component: React.ComponentType<P>) =>
  class WithAuthorized extends React.Component<P & RouteComponentProps> {
    static contextType = AuthContext;

    render() {
      const { isAuth } = this.context;

      if (!isAuth) {
        return <Redirect to="/login" />;
      }

      return (
        <AuthorizedWrapper>
          <Component {...this.props as P} />
        </AuthorizedWrapper>
      );
    }
  };

export default withAuthorized;
