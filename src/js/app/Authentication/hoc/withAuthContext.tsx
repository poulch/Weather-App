import * as React from 'react';
import { AuthConsumer, IAuthContext } from '../context/AuthContext';
import { Subtract } from 'utility-types';

interface IInjectedProps {
  authContext: IAuthContext;
}

const withAuthContext = <P extends IInjectedProps>(
  Component: React.ComponentType<P>
) =>
  function WithContext(props: Subtract<P, IInjectedProps>) {
    return (
      <AuthConsumer>
        {value => <Component {...props as P} authContext={value} />}
      </AuthConsumer>
    );
  };

export { withAuthContext };
