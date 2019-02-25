import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import AuthorizedWrapper from '../../Shared/components/AuthorizedWrapper';
import { AuthContext } from '../context/AuthContext';

const withUnAuthorized = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithUnAuthorized extends React.Component<P & RouteComponentProps> {
    static contextType = AuthContext;

    render() {
      const { isAuth } = this.context;

      if (isAuth) {
        return <Redirect to="/" />;
      }

      return <Component {...this.props as P} />;
    }
  };

export default withUnAuthorized;
